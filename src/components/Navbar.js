import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ui from '../ui'

class Navbar extends Component {
  render () {
    return <div className='Navbar'>
      <h1><NavLink to='/'>Ryan A Vurva</NavLink></h1>
      <div className='Nav'>
        <NavLink to='/about-me'>about</NavLink>
        <NavLink to='/projects'>projects</NavLink>
        <NavLink to='/contact'>contact</NavLink>
        <NavLink to='/resume'>resume</NavLink>
      </div>
      <div className='mobileNav'>
        <button onClick={() => ui.toggleMenu()}><i className='fa fa-bars' aria-hidden='true' /></button>
      </div>
    </div>
  }
}

export default Navbar
