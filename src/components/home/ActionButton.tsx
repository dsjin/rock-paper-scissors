import React from 'react'

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
      className={`flex justify-center items-center cursor-pointer rounded-full h-32 w-32 lg:h-48 lg:w-48 ${props.class ? props.class : ''}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => props.action({
        selectedAction: props.actionName,
        visible: false
      })}
    >
      <div
        className="flex justify-center items-center rounded-full h-24 w-24 lg:h-36 lg:w-36 bg-white"
      >
        <img src={require(`../../assets/images/${props.src}`).default} />
      </div>
    </motion.div>
  )
}

export default ActionButton
