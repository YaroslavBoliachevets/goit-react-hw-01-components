import { FriendItem } from './FriendListItem';
import {FriendsList} from './FriendList.styled'

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        ></FriendItem>
      ))}
    </FriendsList>
  );
};
