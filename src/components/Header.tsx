import React from 'react'
import Logo from './Logo'
import MainMenu from './MainMenu'
import '@/styles/navigation.scss'

const Header = () => {
  return (
    <header className='header z-30 sticky top-0'>
      <nav className='navbar container'>
        <Logo />
        <MainMenu />
      </nav>
      
    </header>
  )
}

export default Header