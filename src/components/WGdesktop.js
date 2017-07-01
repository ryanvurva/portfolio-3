import React from 'react'
import { NavLink } from 'react-router-dom'

import wealthGuidance from '../images/wealthguidance.png'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects/WGdesktop-gif'><img src={wealthGuidance} className='MNdesktop' /></NavLink>
  </div>
)

export default Desktop
