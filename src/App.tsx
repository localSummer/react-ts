import * as React from 'react'
import { observer, inject } from 'mobx-react'
import { IMobxStore } from './stores/mobxStore'
import { Button } from 'antd'
import MokeRedux from './views/hooks/Index'
import TodoInput from './views/TodoInput'
import './App.less'

interface IAppProps {
  mobxStore?: IMobxStore
}

@inject('mobxStore')
@observer
class App extends React.Component<IAppProps> {
  public render() {
    const { greeting } = this.props.mobxStore!

    return (
      <div className="App">
        <header className="App-header">
          {greeting}
          <Button onClick={this.clickHandler}>Change Greeting</Button>
        </header>
        <MokeRedux />
        <TodoInput />
      </div>
    )
  }

  private clickHandler = () => {
    const { setName } = this.props.mobxStore!
    setName('Bob')
  }
}

export default App
