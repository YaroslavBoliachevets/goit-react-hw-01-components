import PropTypes from 'prop-types';
import {Item, Status, Img, Name} from './FriendList.styled'

export const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
		<Status isOnline={isOnline}>{isOnline}</Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <Name className="name">{name}</Name>
    </Item>
  );
};

FriendItem.propsType = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
