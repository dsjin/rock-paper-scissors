import React, { useState } from 'react'
import './index.scss'

import { motion, AnimatePresence } from 'framer-motion'

import Header from '../../components/home/Header'
import Game from '../../components/home/Game'
import Modal from '../../components/common/Modal'

const Home = () => {

  const [score, setScore] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

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
      <AnimatePresence>
        {
          modalOpen && (
              <div
                className="absolute top-0 left-0 bottom-0 right-0 bg-gray-900 z-10 bg-opacity-75 flex justify-center items-center"
              >
                <Modal
                  closeCallback={() => setModalOpen(false)}
                />
              </div>
          )
        }
      </AnimatePresence>
      <motion.div
        className="absolute bottom-5 xl:right-5 bg-transparent border-2 border-white rounded-xl py-3 px-14 text-xl mt-6 tracking-wider cursor-pointer text-white hover:text-black hover:bg-white"
        whileHover={{ scale: 1.1}}
        whileTap={{ scale: 0.8 }}
        transition={
          {
            type: "spring",
            stiffness: 700,
            damping: 100
          }
        }
        onClick={() => setModalOpen(true)}
      >
        RULES
      </motion.div>
    </div>
  )
}

export default Home
