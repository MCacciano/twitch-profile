import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: grid;
  height: 50vh;
`;

export const HeroImgWrapper = styled.div`
  height: 100%;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
