import React from 'react'
import './index.scss'

import Header from '../../components/home/Header'
import Game from '../../components/home/Game'

const Home = () => {
  return (
    <div id="Home">
      <div
        className="flex flex-col items-center justify-center"
      >
        <Header />
        <Game />
      </div>
    </div>
  )
}

export default Home
