import React from 'react'
import { NavLink } from 'react-router-dom'

import movieNightMobile from '../images/movieNight-mobile.gif'

const Mobile = () => (
  <div className='Mobile'>
    <NavLink to='/projects/mn-mobile'><img src={movieNightMobile} /></NavLink>
  </div>
)

export default Mobile
