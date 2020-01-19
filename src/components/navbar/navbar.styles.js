import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;

  /* background: #4f5d75; */
`;

// overall link styles
const NavbarLink = styled(Link)`
  color: #bfc0c0;
  text-decoration: none;
  display: block;
  height: 100%;
`;

export const NavLogo = styled(NavbarLink)`
  font-size: 1.5rem;
  padding-left: 2rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex: 1;

  list-style: none;
  padding-right: 2rem;
`;

export const NavListItem = styled.li`
  text-align: center;
  width: 80px;
`;

export const NavListLink = styled(NavbarLink)``;
