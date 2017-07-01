import React from 'react'
import { NavLink } from 'react-router-dom'

import bistroBraavos from '../images/bistro-braavos.png'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects/BBdesktop-gif'><img src={bistroBraavos} className='MNdesktop' /></NavLink>
  </div>
)

export default Desktop
