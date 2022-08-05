import css from './FriendList.module.css';

export const FriendStatus = ({isOnline}) => {
	return <span className={css.status}>{isOnline}</span>
}