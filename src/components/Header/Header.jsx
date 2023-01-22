import React from 'react'
import "./Header.css"
import {logo} from "../../assets"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <div className="header-left-text">
                <span>SUNDAY BLUES</span>
            </div>
            <img src={logo} alt="logo" />
        </div>
        <div className="header-right">
            <p>DISCO CLUB</p>
        </div>
    </div>
  )
}

export default Header