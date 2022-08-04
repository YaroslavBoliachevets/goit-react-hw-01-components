import { Profile } from './Profile/Profile';
import { Stats } from './Stats/Stats';
import { FriendList } from './FriendList/FriendList';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { Transactions } from './Transactions/Transactions';
import user from '../data/user.json';


export const App = () => {
  return (
    <div>
      <Profile user={user}/>
      <Stats />
      <FriendList>
        <FriendListItem></FriendListItem>
      </FriendList>
      <Transactions />
    </div>
  );
};
