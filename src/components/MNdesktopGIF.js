import React from 'react'
import { NavLink } from 'react-router-dom'

import movieNightGIF from '../images/movieNight.gif'
// import movieNight from '../images/movieNight.png'

const Desktop = () => (
  <div className='Desktop'>
    <NavLink to='/projects'><img src={movieNightGIF} className='MNdesktop' /></NavLink>
    {/* <div className='desktopGIF'>
      <NavLink to='/projects'><img src={movieNightGIF} className='MNdesktop' /></NavLink>
    </div> */}
  </div>
)

export default Desktop
