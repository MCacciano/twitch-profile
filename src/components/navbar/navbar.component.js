import React from 'react';

import { NavWrapper, NavLogo, NavList, NavListItem, NavListLink } from './navbar.styles';

const Navbar = () => {
  return (
    <nav>
      <NavWrapper>
        <NavLogo to='/' className='brand-logo'>
          Logo
        </NavLogo>
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

export default Navbar;
