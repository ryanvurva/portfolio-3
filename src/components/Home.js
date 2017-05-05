import React, { Component } from 'react'
import ryan from '../images/Ryan-3.jpg'

class Home extends Component {
  render () {
    return <div className='Home'>
      <div className='Hello'>
        <img src={ryan} alt='ryan vurva' width='200px' height='200px' />
      </div>
    </div>
  }
}

export default Home
