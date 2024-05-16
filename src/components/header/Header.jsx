import React from 'react'
import { NavBar } from './NavBar'
import { Cart } from './CartWidget'

export const Header = () => {
  return (
    <div>
        <header className='header'>
            <h1 className='header-title'>SportBall</h1>
            <NavBar />
            <Cart />
        </header>
    </div>
  )
}