import React from "react"

import './Header.scss'
import Logo from '../../assets/images/logo.svg'

const Header = () => {
  return (
    <div
      id="Header"
      className="p-4 border-2 border-solid rounded-xl text-white w-6/12 mt-10"
    >
      <div
        className="flex justify-between"
      >
        <img
          src={Logo}
          className="mr-5"
        />
        <div
          className="flex flex-col justify-center items-center bg-white px-12 rounded-xl"
        >
          <span
            className="txt-score-label text-lg"
          >
            score
          </span>
          <span
            className="txt-score text-6xl font-bold"
          >
            12
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
