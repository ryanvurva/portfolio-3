import React from 'react'
import { NavLink } from 'react-router-dom'

import adriaticExperience from '../images/adriaticExperience.png'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects/AEdesktop-gif'><img src={adriaticExperience} /></NavLink>
  </div>
)

export default Desktop
