import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({avatar, name, isOnline, }) => {
	return <li className={css.friendListItem}>
	<span className="status">{isOnline}</span>
	<img className="avatar" src={avatar} alt="User avatar" width="48" />
	<p className="name">{name}</p>
  </li>
}

FriendListItem.propsType = {
	avatar: PropTypes.string,
	name: PropTypes.string, 
	isOnline: PropTypes.bool,
}