import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Transactions } from './Transactions/Transactions';
import user from '../data/user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats />
      <FriendList>
        <FriendListItem></FriendListItem>
      </FriendList>
      <Transactions />
    </div>
  );
};
