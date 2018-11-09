import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import 'moment/locale/ja'
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import PropTypes from 'prop-types'

const UserUpdatedTodos = ({text, eventType, uid, displayName, avatarUrl, _updatedAt}) => (
  <ListItem divider button component={Link} to={`/users/${uid}/todos`}>
    {avatarUrl ?
      <Avatar alt={displayName} src={avatarUrl} />
      :
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
    }
    <ListItemText
      secondary={moment(_updatedAt).fromNow()} >
      {displayName}さんが {text} を{eventType === 'CREATE' ? '作成' : '更新'}しました。
    </ListItemText>
  </ListItem>
)

UserUpdatedTodos.propTypes = {
  text: PropTypes.string.isRequired,
  eventType: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
  _updatedAt: PropTypes.number.isRequired
}

export default UserUpdatedTodos;
