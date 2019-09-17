import * as React from 'react'
import { BgSore } from './store/BgStore'
import Content from './components/Content'
import Buttons from './components/Buttons'
import GetState from './components/GetState'

const MokeRedux: React.FC = () => {
  return (
    <BgSore>
      <Content />
      <Buttons />
      <GetState name="test" />
    </BgSore>
  )
}

export default MokeRedux
