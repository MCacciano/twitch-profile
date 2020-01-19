import React, { useEffect } from 'react';

import CountCard from '../count-card/count-card.component';

// redux
import { connect } from 'react-redux';
import { getUserFollows, getUserVideos, getUserClips } from '../../redux/twitch/twitch.actions';

import { CardContainer } from './count-cards.styles';

const CountCards = ({ user, follows, getUserFollows, videos, getUserVideos, clips, getUserClips }) => {
  useEffect(() => {
    const asyncGetTwitchData = async () => {
      if (user.id !== undefined) {
        await getUserFollows(user.id);
        await getUserVideos(user.id);
        await getUserClips(user.id);
      }
    };
    asyncGetTwitchData();
  }, [user]);

  // not sure how else to handle this right now but it prevents
  // not having any cards on the screen while fetching twitch data
  if (!clips.data)
    return (
      <CardContainer>
        <CountCard title='Videos' count='-' />
        <CountCard title='Follows' count='-' />
        <CountCard title='Clips' count='-' />
        <CountCard title='Views' count='-' />
      </CardContainer>
    );

  return (
    <CardContainer>
      <CountCard title='Videos' count={videos.data.length} />
      <CountCard title='Follows' count={follows.total} />
      <CountCard title='Clips' count={clips.data.length} />
      <CountCard title='Views' count={user.view_count} />
    </CardContainer>
  );
};
const mapStateToProps = ({ user: { follows, videos, clips } }) => ({
  follows,
  videos,
  clips
});

const mapDispatchToProps = dispatch => ({
  getUserFollows: userID => dispatch(getUserFollows(userID)),
  getUserVideos: userID => dispatch(getUserVideos(userID)),
  getUserClips: userID => dispatch(getUserClips(userID))
});

export default connect(mapStateToProps, mapDispatchToProps)(CountCards);
