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
                className="absolute top-0 left-0 bottom-0 right-0 xl:bg-gray-900 z-10 xl:bg-opacity-75 flex justify-center items-center"
              >
                <Modal
                  closeCallback={() => setModalOpen(false)}
                />
              </div>
          )
        }
      </AnimatePresence>
      <div
        className="absolute bottom-1 xl:bottom-5 left-1/2 xl:left-auto xl:right-5"
        style={
          {
            transform: 'translate(-50%, -50%)'
          }
        }
      >
        <motion.div
          className="bg-transparent border-2 border-white rounded-xl w-max py-3 px-14 text-xl tracking-wider cursor-pointer text-white hover:text-black hover:bg-white"
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
    </div>
  )
}

export default Home
