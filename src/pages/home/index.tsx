import React, { useState } from 'react'
import './index.scss'

import Header from '../../components/home/Header'
import Game from '../../components/home/Game'

const Home = () => {

  const [score, setScore] = useState(0)

  return (
    <div
      id="Home"
      className="w-screen min-h-screen"
    >
      <div
        className="flex flex-col items-center justify-center"
      >
        <Header
          score={score}
        />
        <Game
          scoreCallback={(value: number) => setScore(score + value)}
        />
      </div>
    </div>
  )
}

export default Home
