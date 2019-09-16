import * as React from 'react';

interface IState {
  background: string;
}

interface IAction {
  type: string;
  value: string;
}

export interface IStore {
  state: {
    background: string
  };
  dispatch?: React.Dispatch<IAction>;
}

export const BgContext= React.createContext<IStore>({
  state: {
    background: '#eee'
  }
});


const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BG':
      return {...state, background: action.value};
    default:
      return state;
  }
};

export const BgSore: React.FC = ({children}) => {
  const [state, dispatch] = React.useReducer(reducer, {background: '#eee'});
  return (
    <BgContext.Provider value={{state, dispatch}}>
      {children}
    </BgContext.Provider>
  );
};


