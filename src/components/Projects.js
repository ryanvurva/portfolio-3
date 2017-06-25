import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import MNdesktop from './MNdesktop'
import MNmobile from './MNmobile'

import braavos from '../images/bistro-braavos.gif'
import tictactoe from '../images/tictactoe.png'

class Projects extends Component {
  render () {
    return <div className='Projects'>
      <div className='movieNight'>
        <Switch>
          <Route exact path='/projects' component={MNdesktop} />
          <Route path='/projects/mn-mobile' component={MNmobile} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div>movieNight |&nbsp;</div>
            <div className='desktop-icon'>
              <NavLink to='/projects'><i className='fa fa-desktop' aria-hidden='true' /></NavLink>
            </div>
            <div>-</div>
            <div className='mobile-icon'>
              <NavLink to='/projects/mn-mobile'>&nbsp;<i className='fa fa-mobile' aria-hidden='true' /></NavLink>
            </div>
          </div>
          <NavLink to='http://movienight.co' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> movienight.co</NavLink>
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
      <div className='bistroBraavos'>
        <img src={braavos} />
        <div className='projectTitle'>
          <div className='section-left'>
            <div>bistroBraavos</div>
          </div>
          <NavLink to='http://food-menu.ryanvurva.surge.sh/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> bistrobraavos.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>A Restaurant Menu designed for a project while at the Iron Yard.</div>
          <div>An Online Menu that pulls the data from an online database.  In this case it was with Google's Firebase Rest API service.</div>
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>CSS / SASS / React / MobX / JS / Firebase</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Oyesters, Clams and Cockles!  Best in the city!"</p>
        </div>
      </div>
      <div className='tictactoe'>
        <img src={tictactoe} />
        <div className='projectTitle'>
          <div className='section-left'>
            <div>Tic-Tac-Toe</div>
          </div>
          <NavLink to='http://tic-tac-toe.ryanvurva.surge.sh/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> b@ttle-of-the-b@stards.tictactoe.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>A Tic Tac Toe app project from the Iron Yard program.</div>
          <div>One of the game projects we were given to learn how to use Javascript to manipulate data based on a series of clicks, and the current state of the board/game.</div>
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>HTML / CSS / SASS / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Oyesters, Clams and Cockles!  Best in the city!"</p>
        </div>
      </div>
    </div>
  }
}

export default Projects
