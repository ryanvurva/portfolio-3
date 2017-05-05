import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return <div className='Navbar'>
      <h1><NavLink to='/'>Forward ]-[yperMedia</NavLink></h1>
      <div className='Links'>
        <NavLink to='/skills'>skills</NavLink>
        <NavLink to='/projects'>projects</NavLink>
        <NavLink to='/contact'>contact</NavLink>
        <NavLink to='/resume'>resume</NavLink>
      </div>
    </div>
  }
}

export default Navbar
