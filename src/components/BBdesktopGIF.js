import React from 'react'
import { NavLink } from 'react-router-dom'

import bistroBraavos from '../images/bistro-braavos.gif'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects'><img src={bistroBraavos} className='MNdesktop' /></NavLink>
  </div>
)

export default Desktop
