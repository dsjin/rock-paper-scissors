import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { IActionButton } from '../../interfaces/components/home/ActionButton'

const ActionButton = (props: IActionButton) => {

  return (
    <motion.div
      layoutId={props.actionName}
      style={
        {
          background: props.color
        }
      }
      className={`flex justify-center items-center cursor-pointer rounded-full h-32 w-32 xl:h-48 xl:w-48 ${props.class ? props.class : ''}`}
      whileHover={{ scale: 1.1, transition: {
        type: "spring",
        stiffness: 700,
        damping: 100
      }}}
      whileTap={{ scale: 0.9, transition: {
        type: "spring",
        stiffness: 700,
        damping: 100
      }}}
      onClick={() => props.action({
        selectedAction: props.actionName,
        visible: false
      })}
      transition={
        {
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 1.6
        }
      }
    >
      <div
        className="flex justify-center items-center rounded-full h-24 w-24 xl:h-36 xl:w-36 bg-white"
      >
        <img src={require(`../../assets/images/${props.src}`).default} />
      </div>
    </motion.div>
  )
}

export default ActionButton
