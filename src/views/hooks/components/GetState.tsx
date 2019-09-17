import * as React from 'react';
import { BgContext, IStore} from '../store/BgStore';

interface IState {
  name: string;
}

class GetState extends React.Component<{}, IState> {
  public state = {
    name: 'test'
  };

  public render() {
    return (
      <BgContext.Consumer>
        {(props: IStore) => {
          return (
            <div>
              <p>{props.state.background}</p>
              <span>{this.state.name}</span>
            </div>
          );
        }}
      </BgContext.Consumer>
    )
  }
}

export default GetState;