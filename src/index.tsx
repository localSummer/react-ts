import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { stores } from './stores/index'
import './utils/index'
import './index.css'

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
