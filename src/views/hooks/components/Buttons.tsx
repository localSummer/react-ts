import * as React from 'react';
import { Button } from 'antd';
import { BgContext, IStore } from '../store/BgStore';

const Buttons: React.FC = () => {
  const store = React.useContext<IStore>(BgContext);

  const handleClickBlue = ():void => {
    store.dispatch!({
      type: 'UPDATE_BG',
      value: 'blue'
    });
  };

  const handleClickOrange = ():void => {
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