import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: grid;

  position: relative;
  background: ${props => (props.url ? 'url(' + props.url + ')' : '')};
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 50vh;
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
