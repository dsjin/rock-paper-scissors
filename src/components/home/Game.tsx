import React from 'react'
import { IActionButton } from 'src/interfaces/components/home/ActionButton'

import bgTriangle from '../../assets/images/bg-triangle.svg'
import ActionButton from './ActionButton'

const Game = () => {

  const actionList: Array<IActionButton> = [
    {
      color: 'radial-gradient(ellipse at top, hsl(230, 89%, 65%), hsl(230, 89%, 62%))',
      src: 'icon-paper.svg',
      class: 'absolute -top-20 -left-20'
    },
    {
      color: 'radial-gradient(ellipse at top, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
      src: 'icon-scissors.svg',
      class: 'absolute -top-20 -right-20'
    },
    {
      color: 'radial-gradient(ellipse at top, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
      src: 'icon-rock.svg',
      class: 'absolute inset-x-14 -bottom-20'
    }
  ]

  const actionElms = actionList.map((value: IActionButton) => {
    return (
      <ActionButton
        src={value.src}
        color={value.color}
        class={value.class}
      />
    )
  })

  return (
    <div
      className="mt-44 relative" 
    >
      <img
        src={bgTriangle}
      />
      { actionElms }
    </div>
  )
}

export default Game