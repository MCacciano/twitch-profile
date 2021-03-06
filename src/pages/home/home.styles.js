import styled from 'styled-components';

export const Header = styled.header`
  display: grid;
  grid-template-rows: 62.5vh 125px;
`;

export const HeroImg = styled.div`
  position: relative;
  background: ${props => (props.url ? 'url(' + props.url + ')' : '')};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 70vh;
  z-index: -2;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

export const H1 = styled.h1`
  color: #fff;
`;
