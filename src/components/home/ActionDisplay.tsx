import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { IActionDisplay } from '../../interfaces/components/home/ActionDisplay'

const ActionDisplay = (props: IActionDisplay) => {

  return (
    <motion.div
      layoutId={props.actionName}
      style={
        {
          background: props.color
        }
      }
      className={`flex justify-center items-center rounded-full h-32 w-32 lg:h-48 lg:w-48 ${props.class ? props.class : ''}`}
      transition={
        {
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 1.6
        }
      }
    >
      <div
        className="flex justify-center items-center rounded-full h-24 w-24 lg:h-36 lg:w-36 bg-white"
      >
        <img src={require(`../../assets/images/${props.src}`).default} />
      </div>
    </motion.div>
  )
}

export default ActionDisplay
