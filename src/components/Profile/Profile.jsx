import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  InfoName,
  InfoAdditional,
  StatsList,
  StatsItem,
  StatsValue,
  Label,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <InfoName>{username}</InfoName>
        <InfoAdditional>@{tag}</InfoAdditional>
        <InfoAdditional>{location}</InfoAdditional>
      </Description>
      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </StatsList>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
