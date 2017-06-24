import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import movieNight from '../images/movieNight.gif'

class Projects extends Component {
  render () {
    return <div className='Projects'>
      <div>
        <img src={movieNight} />
        <div className='projectTitle'>
          <div className='section-left'>
            <div>movieNight |&nbsp;</div>
            <div className='desktop-icon'><i className='fa fa-desktop' aria-hidden='true' />&nbsp;</div>
            <div>-</div>
            <div className='mobile-icon'>&nbsp;<i className='fa fa-mobile' aria-hidden='true' /></div>
          </div>
          <NavLink to='http://movienight.co'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> movienight.co</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>My Final Project from my time at the Iron Yard.</div>
          <div>A Social Media application based on a person's movie and TV preferences.</div>
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>CSS / SASS / React / MobX / GraphQL / JS / API calls from the Movie Database</span></div>
        </div>
        <div className='projectPitch'>
          <p>"I don't know about you, but my wife and I ask each other 2 questions every day, 'What are we going to eat?' and 'What are we going to watch?'  MovieNight helps to solve one of those questions by keeping a list of movies/shows you want to watch, that your peers can offer their opinions to help you decide before you even asked!"</p>
        </div>
      </div>
    </div>
  }
}

export default Projects
