import React, { Component } from 'react'
import ryan from '../images/Ryan-3.jpg'

class Home extends Component {
  render () {
    return <div className='Home'>
      <div className='Hello'>
        <img className='me' src={ryan} alt='ryan vurva' width='200px' height='200px' />
        <p className='line-1 anim-typewriter'>Hi, I'm Ryan Vurva.</p>
        <p className='line-2 anim-typewriter-2'>I'm a Junior Developer</p>
        <p className='line-3 anim-typewriter-3'>in the Tampa Bay Area.</p>
        <a href='#' className='fancy-btn'>Would you like to know more?</a>
      </div>
    </div>
  }
}

export default Home
