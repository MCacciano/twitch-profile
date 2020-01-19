import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  line-height: 64px;

  background: #10171c;
`;

// overall link styles
const NavbarLink = styled(Link)`
  color: #bfc0c0;
  text-decoration: none;
  display: block;
  height: 100%;
`;

export const NavLogoContainer = styled(NavbarLink)`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;

  padding-left: 2rem;
  font-weight: 700;
  font-size: 1.5em;
`;

export const NavLogoImg = styled.img`
  width: 100%;
  height: auto;
`;

export const LogoStreamerName = styled.h4`
  padding-bottom: 10px;
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
