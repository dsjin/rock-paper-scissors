import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { IActionButton } from 'src/interfaces/components/home/ActionButton'

import bgTriangle from '../../assets/images/bg-triangle.svg'
import ActionButton from './ActionButton'
import ActionDisplay from './ActionDisplay'
import { IGame } from 'src/interfaces/components/home/Game'

const Game = (props: IGame) => {

  const [ selectPhase, setSelectPhase ] = useState({
    selectedAction: '',
    visible: true
  })

  const [ theHouseSelect, setTheHouseSelect ] = useState({
    selectedAction: ''
  })

  const [ resultMsg, setResultMsg ] = useState('YOU WIN')

  const [ theHouseWin, setTheHouseWin ] = useState(false)

  const [ playerWin, setPlayerWin ] = useState(false)

  useEffect(() => {
    if (selectPhase.selectedAction) {
      setTimeout(() => {
        setTheHouseSelect({
          selectedAction: ['paper', 'scissors', 'rock'][Math.floor(Math.random() * 3)]
        })
      }, 3000)
    }
  }, [selectPhase])

  useEffect(() => {
    if (theHouseSelect.selectedAction && selectPhase.selectedAction) {
      if (theHouseSelect.selectedAction === selectPhase.selectedAction) {
        props.scoreCallback(0)
        setResultMsg('DRAW')
      } else if (
        (selectPhase.selectedAction === 'paper' && theHouseSelect.selectedAction === 'rock') ||
        (selectPhase.selectedAction === 'scissors' && theHouseSelect.selectedAction === 'paper') ||
        (selectPhase.selectedAction === 'rock' && theHouseSelect.selectedAction === 'scissors')
      ) {
        props.scoreCallback(1)
        setResultMsg('YOU WIN')
        setPlayerWin(true)
      } else {
        props.scoreCallback(-1)
        setResultMsg('YOU LOSE')
        setTheHouseWin(true)
      }
    }
  }, [theHouseSelect])


  const actionList: Array<IActionButton> = [
    {
      actionName: 'paper',
      color: 'radial-gradient(ellipse at top, hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
      src: 'icon-paper.svg',
      class: 'absolute -top-10 -left-10 xl:-top-20 xl:-left-20',
      action: setSelectPhase
    },
    {
      actionName: 'scissors',
      color: 'radial-gradient(ellipse at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      src: 'icon-scissors.svg',
      class: 'absolute -top-10 -right-10 xl:-top-20 xl:-right-20',
      action: setSelectPhase
    },
    {
      actionName: 'rock',
      color: 'radial-gradient(ellipse at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      src: 'icon-rock.svg',
      class: 'absolute inset-x-20 -bottom-10 xl:inset-x-14 xl:-bottom-20',
      action: setSelectPhase
    }
  ]

  const actionDisplay = {
    'paper': {
      actionName: 'paper',
      color: 'radial-gradient(ellipse at top, hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
      src: 'icon-paper.svg',
      class: 'absolute -top-10 left-10 xl:-top-10 xl:left-0'
    },
    'scissors': {
      actionName: 'scissors',
      color: 'radial-gradient(ellipse at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      src: 'icon-scissors.svg',
      class: 'absolute -top-10 left-10 xl:-top-10 xl:left-0'
    },
    'rock': {
      actionName: 'rock',
      color: 'radial-gradient(ellipse at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      src: 'icon-rock.svg',
      class: 'absolute -top-10 left-10 xl:-top-10 xl:left-0'
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
            className="mt-44 relative w-screen xl:w-6/12"
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
              className="absolute -top-24 left-16 xl:-top-24 xl:left-14 text-white opacity-0"
              animate={{ opacity: 100 }}
              transition={{ ease: [0.6, 0.01, -0.05, 0.9],
                duration: 10 }}
            >
              YOU PICKED
            </motion.p>
            <motion.p
              className="absolute -top-24 right-10 xl:-top-24 xl:right-10 text-white opacity-0"
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
              isWinner={playerWin}
            />
            {
              !theHouseSelect.selectedAction ? (<motion.div
                className="flex justify-center items-center rounded-full h-32 w-32 xl:h-48 xl:w-48 bg-gray-700 absolute -top-10 right-10 xl:-top-10 xl:right-0"
                animate={{ scale: [1.0, 1.1, 1.0], opacity: [1, 0.6, 1] }}
                transition={{ ease: "easeInOut", duration: 2, repeat: Infinity }}
              />) : (
                <ActionDisplay
                  actionName={`${(actionDisplay as any)[theHouseSelect.selectedAction].actionName}-oppernent`}
                  color={(actionDisplay as any)[theHouseSelect.selectedAction].color}
                  src={(actionDisplay as any)[theHouseSelect.selectedAction].src}
                  class="absolute -top-10 right-10 xl:-top-10 xl:right-0"
                  isWinner={theHouseWin}
                />
              )
            }
            <AnimatePresence>
              {
                theHouseSelect.selectedAction ? (
                  <div
                    className="flex flex-col items-center -mt-36 xl:-mt-72"
                  >
                    <motion.div
                      animate={{ scale: [0, 1], opacity: [0, 1] }}
                      transition={{ ease: "easeInOut", duration: 0.8}}
                      className="text-white text-6xl font-bold"
                    >
                      { resultMsg }
                    </motion.div>
                    <motion.div
                      animate={{ scale: [0, 1], opacity: [0, 1] }}
                      transition={{ ease: "easeInOut", duration: 0.8}}
                      className="bg-white rounded-xl py-3 px-20 text-xl mt-6 tracking-widest cursor-pointer"
                      onClick={
                        () => {
                          setSelectPhase({
                            selectedAction: '',
                            visible: true
                          })
                          setTheHouseSelect({
                            selectedAction: ''
                          })
                          setTheHouseWin(false)
                          setPlayerWin(false)
                        }
                      }
                    >
                      PLAY AGAIN
                    </motion.div>
                  </div>
                ) : null
              }
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Game