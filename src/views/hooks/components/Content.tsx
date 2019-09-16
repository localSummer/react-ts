import * as React from 'react';
import { BgContext, IStore } from '../store/BgStore';

const Content: React.FC = () => {
  const store: IStore = React.useContext(BgContext);
  return (
    <div style={store.state}>background: {store.state.background}</div>
  );
};

export default Content;