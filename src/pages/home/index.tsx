import React from 'react'
import './index.scss'

import Header from '../../components/home/Header'
import Game from '../../components/home/Game'

const Home = () => {
  return (
    <div
      id="Home"
      className="w-screen min-h-screen"
    >
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
