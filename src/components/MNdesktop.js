import React from 'react'
import { NavLink } from 'react-router-dom'

import movieNight from '../images/movieNight.png'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects/MNdesktop-gif'><img src={movieNight} className='MNdesktop' /></NavLink>
  </div>
)

export default Desktop
