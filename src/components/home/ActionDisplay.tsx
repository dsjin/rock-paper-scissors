import React from 'react'

import { motion } from 'framer-motion'

import { IActionDisplay } from '../../interfaces/components/home/ActionDisplay'

import './ActionDisplay.scss'

const ActionDisplay = (props: IActionDisplay) => {

  return (
    <motion.div
      layoutId={props.actionName}
      style={
        {
          background: props.color
        }
      }
      className={`flex justify-center items-center rounded-full h-32 w-32 xl:h-48 xl:w-48 ${props.class ? props.class : ''}`}
      transition={
        {
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 1.6
        }
      }
    >
      {
        props.isWinner ?
        <motion.div
          className="is-winner"
          animate={
            {
              boxShadow: [
                '0 0 0 0px rgba(255, 255, 255, 0.07), 0 0 0 0px rgba(255, 255 ,255, 0.04), 0 0 0 0px rgba(255, 255 ,255, 0.02)',
                '0 0 0 40px rgba(255, 255, 255, 0.07), 0 0 0 80px rgba(255, 255 ,255, 0.04), 0 0 0 130px rgba(255, 255 ,255, 0.02)'
              ]
            }
          }
          transition={
            {
              ease: [0.6, 0.01, -0.05, 0.9],
              duration: 2
            }
          }
        /> : null
      }
      <div
        className="flex justify-center items-center rounded-full h-24 w-24 xl:h-36 xl:w-36 bg-white"
      >
        <img src={require(`../../assets/images/${props.src}`).default} />
      </div>
    </motion.div>
  )
}

export default ActionDisplay
