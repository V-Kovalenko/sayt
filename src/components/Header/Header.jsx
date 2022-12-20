import React from 'react'
import './Header.scss'
const Header = () => {
    return (
        <header className='header'>
          <nav className="header__nav">
              <a href='/#home' className="header__item">Home</a>
              <a href='/#about' className="header__item">About me</a>
              <a href='/#skills' className="header__item">Skills</a>
              <a href='/#portfolio' className="header__item">Portfolio</a>
              <a href='/#contacts' className="header__item">Contacts</a>
          </nav>

        </header>)
}
export default Header