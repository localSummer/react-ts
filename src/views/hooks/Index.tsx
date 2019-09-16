import * as React from 'react';
import { BgSore } from './store/BgStore';
import Content from './components/Content';
import Buttons from './components/Buttons';

const MokeRedux: React.FC= () => {
  return (
    <BgSore>
      <Content />
      <Buttons />
    </BgSore>
  );
};

export default MokeRedux;
