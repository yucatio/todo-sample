const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const MAX_RECENT_UPDATED_TODOS = 10;

const addRecentUpdate = (uid, todoId, todo, eventType) => {
  return admin.database().ref('/users/' + uid).once('value').then((snapshot) => {
    const user = snapshot.val();
    return (admin.database().ref('/recentUpdatedTodos/' + todoId).set({
      uid,
      displayName: user.displayName,
      avatarUrl: user.avatarUrl,
      text: todo.text,
      eventType,
      _updatedAt: todo._updatedAt
    }));
  });
}

exports.addRecentUpdateOnCreate = functions.database.ref('/todos/{uid}/{todoId}/_createdAt')
  .onCreate((snapshot, context) => {
    const uid = context.params.uid;
    const todoId = context.params.todoId;

    return snapshot.ref.parent.once('value').then((snapshot) => {
      const todo = snapshot.val();
      return addRecentUpdate(uid, todoId, todo, 'CREATE');
    });
})

exports.addRecentUpdateOnUpdate = functions.database.ref('/todos/{uid}/{todoId}/_updatedAt')
  .onUpdate((change, context) => {
    const todoId = context.params.todoId;
    const uid = context.params.uid;

    return change.after.ref.parent.once('value').then((snapshot) => {
      const todo = snapshot.val();
      return addRecentUpdate(uid, todoId, todo, 'UPDATE');
    });
})

exports.limitRecentUpdatedTodos = functions.database.ref('/recentUpdatedTodos/{todoId}/_updatedAt')
  .onCreate((snapshot, context) => {
    const recentUpdatedTodosRef = snapshot.ref.parent.parent;
    return recentUpdatedTodosRef.orderByChild('_updatedAt').once('value').then((todosSnapshot) => {

      if (todosSnapshot.numChildren() <= MAX_RECENT_UPDATED_TODOS) {
        return null;
      }

      let childCount = 0;
      const updates = {};
      todosSnapshot.forEach((child) => {
        // remove old updates
        if (++childCount <= todosSnapshot.numChildren() - MAX_RECENT_UPDATED_TODOS) {
          updates[child.key] = null;
        }
      });
      return recentUpdatedTodosRef.update(updates);
    });
})
