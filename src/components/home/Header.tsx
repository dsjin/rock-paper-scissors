import React from "react"

import './Header.scss'
import Logo from '../../assets/images/logo.svg'
import { IHeader } from "../../interfaces/components/home/Header"

const Header = (props: IHeader) => {
  return (
    <div
      id="Header"
      className="p-4 border-2 border-solid rounded-xl text-white w-screen lg:w-6/12 mt-10"
    >
      <div
        className="flex justify-between"
      >
        <img
          src={Logo}
          className="mr-5"
          alt="logo"
        />
        <div
          className="flex flex-col justify-center items-center bg-white px-8 lg:px-12 rounded-xl"
        >
          <span
            className="txt-score-label text-lg"
          >
            score
          </span>
          <span
            className="txt-score text-5xl lg:text-6xl font-bold"
          >
            { props.score }
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
