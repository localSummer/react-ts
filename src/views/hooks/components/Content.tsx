import React, { useContext } from 'react'
import { BgContext, IStore } from '../store/BgStore'

const Content: React.FC = () => {
  const store = useContext<IStore>(BgContext)
  return <div style={store.state}>background: {store.state.background}</div>
}

export default Content
