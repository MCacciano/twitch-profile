import React, { useEffect } from 'react';

import { HeaderWrapper, HeroImgWrapper, HeroImg } from './home.styles';

const HomePage = () => {
  return (
    <header>
      <HeaderWrapper>
        <HeroImgWrapper>
          <HeroImg src='/images/hero-1.jpg' />
        </HeroImgWrapper>
      </HeaderWrapper>
    </header>
  );
};

export default HomePage;
