const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

const MAX_RECENT_UPDATED_TODOS = 10;

exports.addCreatedAt = functions.database.ref('/todos/{uid}/{todoId}/text')
  .onCreate((snapshot, context) => {
    const current = admin.database.ServerValue.TIMESTAMP;
    return snapshot.ref.parent.update({_createdAt:current, _updatedAt: current});
  });

exports.updateUpdatedAt = functions.database.ref('/todos/{uid}/{todoId}/{field}')
  .onUpdate((change, context) => {
    const field = context.params.field;
    if (field === '_updatedAt') {
      return null;
    }
    return change.after.ref.parent.child('_updatedAt').set(admin.database.ServerValue.TIMESTAMP);
  });

const addRecentUpdate = (uid, todoId, todo, eventType) => {
  return admin.database().ref('/users/' + uid + '/displayName').once('value').then((snapshot) => {
    const displayName = snapshot.val();
    return (admin.database().ref('/recentUpdatedTodos/' + todoId).set({
      uid,
      displayName,
      text: todo.text,
      eventType,
      _updatedAt: admin.database.ServerValue.TIMESTAMP
    }))});
  }

exports.addRecentUpdateOnCreate = functions.database.ref('/todos/{uid}/{todoId}/text')
  .onCreate((snapshot, context) => {
    const todo =  snapshot.val();
    const todoId = context.params.todoId;
    const uid = context.params.uid;
    return addRecentUpdate(uid, todoId, todo, 'CREATE');
  })

exports.addRecentUpdateOnUpdate = functions.database.ref('/todos/{uid}/{todoId}')
  .onUpdate((change, context) => {
    const todo =  change.after.val();
    const todoId = context.params.todoId;
    const uid = context.params.uid;
    return addRecentUpdate(uid, todoId, todo, 'UPDATE');
  })

exports.limitRecentUpdatedTodos = functions.database.ref('/recentUpdatedTodos/{todoId}')
  .onCreate((snapshot, context) => {
    const parentRef = snapshot.ref.parent;
    return parentRef.orderByChild('_updatedAt').once('value').then((todosSnapshot) => {

      if (todosSnapshot.numChildren() > MAX_RECENT_UPDATED_TODOS) {
        let childCount = 0;
        const updates = {};
        todosSnapshot.forEach((child) => {
          // remove old updates
          if (++childCount <= todosSnapshot.numChildren() - MAX_RECENT_UPDATED_TODOS) {
            updates[child.key] = null;
          }
        });
        return parentRef.update(updates);
      }

      return null;
    });
  })
