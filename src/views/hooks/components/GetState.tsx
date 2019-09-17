import React from 'react'
import { BgContext, IStore } from '../store/BgStore'

interface IProps {
  name: string
}

class GetState extends React.Component<IProps> {
  public render() {
    return (
      <BgContext.Consumer>
        {(props: IStore) => {
          return (
            <div>
              <p>{props.state.background}</p>
              <span>{this.props.name}</span>
            </div>
          )
        }}
      </BgContext.Consumer>
    )
  }
}

export default GetState
