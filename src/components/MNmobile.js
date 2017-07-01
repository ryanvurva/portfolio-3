import React from 'react'
import { NavLink } from 'react-router-dom'

import movieNightMobile from '../images/movieNight-mobile.png'

const Mobile = () => (
  <div className='Mobile'>
    <NavLink to='/projects/MNmobile-gif'><img src={movieNightMobile} /></NavLink>
  </div>
)

export default Mobile
