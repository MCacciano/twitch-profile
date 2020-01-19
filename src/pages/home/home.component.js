import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//components
import CountCards from '../../components/count-cards/count-cards.component';

// redux
import { connect } from 'react-redux';
import { getUser } from '../../redux/twitch/twitch.actions';
// import { getUser, getUserFollows, getUserVideos, getUserClips } from '../../redux/twitch/twitch.actions';

// styled-components
import { HeroImg, Header } from './home.styles';

// const HomePage = ({ cards, getUser, user, getUserFollows, follows, getUserVideos, videos, getUserClips, clips }) => {
const HomePage = ({ cards, getUser, user, getUserFollows, follows, getUserVideos, videos, getUserClips, clips }) => {
  useEffect(() => {
    const asyncGetUser = async () => await getUser({ name: 'joeneverfails' });
    asyncGetUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <Header>
      <HeroImg url='/images/hero-2.jpg' />
      <CountCards user={user} />
    </Header>
  );
};

HomePage.propTypes = {
  // cards: PropTypes.array.isRequired,
  user: PropTypes.object,
  // follows: PropTypes.object,
  // videos: PropTypes.object,
  // clips: PropTypes.object,
  getUser: PropTypes.func.isRequired
  // getUserFollows: PropTypes.func.isRequired,
  // getUserVideos: PropTypes.func.isRequired,
  // getUserClips: PropTypes.func.isRequired
};

const mapStateToProps = ({ user: { user, follows, videos, clips } }) => ({
  user
  // follows,
  // videos,
  // clips
});

const mapDispatchToProps = dispatch => ({
  getUser: name => dispatch(getUser(name))
  // getUserFollows: userID => dispatch(getUserFollows(userID)),
  // getUserVideos: userID => dispatch(getUserVideos(userID)),
  // getUserClips: userID => dispatch(getUserClips(userID))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
