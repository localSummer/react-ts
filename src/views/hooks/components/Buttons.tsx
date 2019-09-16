import * as React from 'react';
import { Button } from 'antd';
import { BgContext, IStore } from '../store/BgStore';

const Buttons: React.FC = () => {
  const store: IStore = React.useContext(BgContext);

  const handleClickBlue = () => {
    store.dispatch!({
      type: 'UPDATE_BG',
      value: 'blue'
    });
  };

  const handleClickOrange = () => {
    store.dispatch!({
      type: 'UPDATE_BG',
      value: 'orange'
    });
  };

  return (
    <>
      <Button type="primary" onClick={handleClickBlue}>Update blue</Button>
      <Button type="primary" onClick={handleClickOrange}>Update orange</Button>
    </>
  );
};

export default Buttons;