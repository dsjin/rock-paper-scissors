import React from 'react'
import { motion } from 'framer-motion'

import iconClose from '../../assets/images/icon-close.svg'
import imageRules from '../../assets/images/image-rules.svg'
import { IModal } from 'src/interfaces/components/common/Modal'

const Modal = (props: IModal) => {
  return (
    <motion.div
      className="bg-white rounded-md p-5"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={
        {
          ease: [0.6, 0.01, -0.05, 0.9],
          duration: 0.8
        }
      }
    >
      <div
        className="flex justify-between items-center mb-10"
      >
        <span
          className="text-4xl"
        >
          RULES
        </span>
        <img 
          className="cursor-pointer w-4 h-4"
          src={iconClose}
          alt="CloseButton"
          onClick={props.closeCallback}
        />
      </div>
      <div>
        <img src={imageRules} alt="ImageRules" />
      </div>
    </motion.div>
  )
}

export default Modal
