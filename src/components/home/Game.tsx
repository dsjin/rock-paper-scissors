import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { IActionButton } from 'src/interfaces/components/home/ActionButton'

import bgTriangle from '../../assets/images/bg-triangle.svg'
import ActionButton from './ActionButton'
import ActionDisplay from './ActionDisplay'

const Game = () => {

  const [ selectPhase, setSelectPhase ] = useState({
    selectedAction: '',
    visible: true
  })

  const [ theHouseSelect, setTheHouseSelect ] = useState({
    selectedAction: ''
  })

  useEffect(() => {
    if (selectPhase.selectedAction) {
      setTimeout(() => {
        setTheHouseSelect({
          selectedAction: ['paper', 'scissors', 'rock'][Math.floor(Math.random() * 3)]
        })
      }, 3000)
    }
  }, [selectPhase])


  const actionList: Array<IActionButton> = [
    {
      actionName: 'paper',
      color: 'radial-gradient(ellipse at top, hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
      src: 'icon-paper.svg',
      class: 'absolute -top-10 -left-10 lg:-top-20 lg:-left-20',
      action: setSelectPhase
    },
    {
      actionName: 'scissors',
      color: 'radial-gradient(ellipse at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      src: 'icon-scissors.svg',
      class: 'absolute -top-10 -right-10 lg:-top-20 lg:-right-20',
      action: setSelectPhase
    },
    {
      actionName: 'rock',
      color: 'radial-gradient(ellipse at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      src: 'icon-rock.svg',
      class: 'absolute inset-x-20 -bottom-10 lg:inset-x-14 lg:-bottom-20',
      action: setSelectPhase
    }
  ]

  const actionDisplay = {
    'paper': {
      actionName: 'paper',
      color: 'radial-gradient(ellipse at top, hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
      src: 'icon-paper.svg',
      class: 'absolute -top-10 left-10 lg:-top-10 lg:left-0'
    },
    'scissors': {
      actionName: 'scissors',
      color: 'radial-gradient(ellipse at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      src: 'icon-scissors.svg',
      class: 'absolute -top-10 left-10 lg:-top-10 lg:left-0'
    },
    'rock': {
      actionName: 'rock',
      color: 'radial-gradient(ellipse at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      src: 'icon-rock.svg',
      class: 'absolute -top-10 left-10 lg:-top-10 lg:left-0'
    }
  }

  const actionElms = actionList.map((value: IActionButton) => {
    return (
      <ActionButton
        actionName={value.actionName}
        src={value.src}
        color={value.color}
        class={value.class}
        action={value.action}
      />
    )
  })

  return (
    <AnimateSharedLayout
      type="crossfade"
    >
      <AnimatePresence>
        {selectPhase.visible ? <motion.div
          className="mt-44 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <img
            src={bgTriangle}
          />
          { actionElms }
        </motion.div> : (
          <motion.div
            className="mt-44 relative w-screen lg:w-6/12"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img
              src={bgTriangle}
              style={{
                opacity: 0
              }}
            />
            <motion.p
              className="absolute -top-24 left-16 lg:-top-24 lg:left-14 text-white opacity-0"
              animate={{ opacity: 100 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9],
                duration: 10 }}
            >
              YOU PICKED
            </motion.p>
            <motion.p
              className="absolute -top-24 right-10 lg:-top-24 lg:right-10 text-white opacity-0"
              animate={{ opacity: 100 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9],
                duration: 10 }}
            >
              THE HOUSE PICKED
            </motion.p>
            <ActionDisplay
              actionName={(actionDisplay as any)[selectPhase.selectedAction].actionName}
              color={(actionDisplay as any)[selectPhase.selectedAction].color}
              src={(actionDisplay as any)[selectPhase.selectedAction].src}
              class={(actionDisplay as any)[selectPhase.selectedAction].class}
            />
            {
              !theHouseSelect.selectedAction ? (<motion.div
                className="flex justify-center items-center rounded-full h-32 w-32 lg:h-48 lg:w-48 bg-gray-700 absolute -top-10 right-10 lg:-top-10 lg:right-0"
                animate={{ scale: [1.0, 1.1, 1.0], opacity: [1, 0.6, 1] }}
                transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
              />) : (
                <ActionDisplay
                  actionName={`${(actionDisplay as any)[theHouseSelect.selectedAction].actionName}-oppernent`}
                  color={(actionDisplay as any)[theHouseSelect.selectedAction].color}
                  src={(actionDisplay as any)[theHouseSelect.selectedAction].src}
                  class="absolute -top-10 right-10 lg:-top-10 lg:right-0"
                />
              )
            }
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Game