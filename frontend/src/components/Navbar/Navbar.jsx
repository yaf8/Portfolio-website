/* eslint-disable no-unused-vars */
import React from 'react'
import "./Navbar.scss"
import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className="app__navbar">
        <div className='app__navbar-logo'>
            <img src={images.logo} alt='logo'/>
        </div>
        <ul className='app__navbar-links'>
            {['home', 'about', 'skills', 'work', 'contact'].map( (item) => (
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div>
                        <a href={`#${item}`}>{item}</a>
                    </div>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar