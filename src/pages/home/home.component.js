import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';
import { getUser } from '../../redux/twitch/twitch.actions';

// styled-components
import { HeaderWrapper, H1 } from './home.styles';

const HomePage = ({ getUser, user }) => {
  useEffect(() => {
    getUser({ name: 'k00ka' });
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <header>
      <HeaderWrapper url='/images/hero-1.png'>
        <H1></H1>
      </HeaderWrapper>
    </header>
  );
};

HomePage.propTypes = {
  user: PropTypes.object,
  getUser: PropTypes.func.isRequired
};

const mapStateToProps = ({ user }) => ({
  user: user.user
});

const mapDispatchToProps = dispatch => ({
  getUser: name => dispatch(getUser(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
