import React from 'react'

import { motion } from 'framer-motion'

import { IActionButton } from '../../interfaces/components/home/ActionButton'

const ActionButton = (props: IActionButton) => {
  return (
    <motion.div
      style={
        {
          background: props.color
        }
      }
      className={`flex justify-center items-center rounded-full h-48 w-48 ${props.class ? props.class : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div
        className="flex justify-center items-center rounded-full h-36 w-36 bg-white"
      >
        <img src={require(`../../assets/images/${props.src}`).default} />
      </div>
    </motion.div>
  )
}

export default ActionButton
