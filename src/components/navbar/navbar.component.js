import React from 'react';
import PropTypes from 'prop-types';

// redux
import { connect } from 'react-redux';

import {
  NavWrapper,
  NavLogoContainer,
  NavList,
  NavListItem,
  NavListLink,
  NavLogoImg,
  LogoStreamerName
} from './navbar.styles';

const Navbar = ({ user }) => {
  return (
    <nav>
      <NavWrapper>
        <NavLogoContainer to='/' className='brand-logo'>
          <NavLogoImg src='/images/warrior-job-icon.png' />
          <LogoStreamerName>{user.display_name}</LogoStreamerName>
        </NavLogoContainer>
        <NavList>
          <NavListItem>
            <NavListLink to='/'>Home</NavListLink>
          </NavListItem>
          <NavListItem>
            <NavListLink to='/stream'>Stream</NavListLink>
          </NavListItem>
        </NavList>
      </NavWrapper>
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.object
};

const mapStateToProps = ({ user }) => ({
  user: user.user
});

export default connect(mapStateToProps, null)(Navbar);
