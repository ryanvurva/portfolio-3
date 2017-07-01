import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'

import MNdesktop from './MNdesktop'
import MNmobile from './MNmobile'
import MNdesktopGIF from './MNdesktopGIF'
import MNmobileGIF from './MNmobileGIF'
import BBdesktop from './BBdesktop'
import BBdesktopGIF from './BBdesktopGIF'
import WGdesktop from './WGdesktop'
import AEdesktop from './AEdesktop'

import tictactoe from '../images/tictactoe.png'
import wealthGuidance from '../images/wealthguidance.png'

class Projects extends Component {
  render () {
    return <div className='Projects'>
      <div className='movieNight wow slideInRight'>
        <Switch>
          <Route exact path='/projects' component={MNdesktop} />
          <Route exact path='/projects/mn-mobile' component={MNmobile} />
          <Route exact path='/projects/MNdesktop-gif' component={MNdesktopGIF} />
          <Route exact path='/projects/MNmobile-gif' component={MNmobileGIF} />
          <Route path='/projects' component={MNdesktop} />
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
      <div className='bistroBraavos wow slideInLeft'>
        <Switch>
          <Route exact path='/projects' component={BBdesktop} />
          <Route exact path='/projects/BBdesktop-gif' component={BBdesktopGIF} />
          <Route path='/projects' component={BBdesktop} />
        </Switch>
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
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>CSS / SASS / React / MobX / JS / graphQL</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Oyesters, Clams and Cockles!  Best in the city!"</p>
        </div>
      </div>
      <div className='tictactoe wow slideInRight'>
        <img src={tictactoe} />
        <div className='projectTitle'>
          <div className='section-left'>
            <div>Tic-Tac-Toe</div>
          </div>
          <NavLink to='http://tic-tac-toe.ryanvurva.surge.sh/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> b@ttle-of-the-b@st@rds.tictactoe.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>A Tic Tac Toe app project from the Iron Yard program.</div>
          <div>One of the game projects we were given to learn how to use Javascript to manipulate data based on a series of clicks, and the current state of the board/game.</div>
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>HTML / CSS / SASS / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>"If only Rickon knew how to run in a zig-zag..."</p>
        </div>
      </div>
      <div className='wealthGuidance wow slideInLeft'>
        <Switch>
          <Route exact path='/projects' component={WGdesktop} />
        </Switch>
        {/* <img src={wealthGuidance} /> */}
        <div className='projectTitle'>
          <div className='section-left'>
            <div>Wealth Guidance Group LLC</div>
          </div>
          <NavLink to='#'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> link not available/pending approval</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>This was a site UI/UX redesign for a financial accounting firm.</div>
          <div>A local St. Pete Accounting firm that is a client of Ecliptic Designs.  We already have a site that we built for them a few years ago, and recently were asked to do a site upgrade with new Wordpress features included.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>"With over 30 years experience we'll ensure you always get the best guidance." | Larry L. Galantis - CFO</p>
        </div>
      </div>
      <div className='adriaticExperience wow slideInRight'>
        <Switch>
          <Route exact path='/projects' component={AEdesktop} />
        </Switch>
        {/* <img src={AEdesktop} /> */}
        <div className='projectTitle'>
          <div className='section-left'>
            <div>Adriatic Experience</div>
          </div>
          <NavLink to='https://www.adriaticexperience.com/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> www.adriaticexperience.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>On this site, I was responsible for full site content transfer to an upgraded version of Wordpress software and client functionality.</div>
          <div>Adriatic Experience is a travel site for your dream vacation to the Adriatic Sea and surrounding areas.  Hearing about Ecliptic Designs through word of mouth, we have designed and deployed 2 versions of their site through the Wordpress software.  Check them out now for wine tours and yacht rentals all around the Adriatic Sea.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>"...immerse yourself"</p>
        </div>
      </div>
    </div>
  }
}

export default Projects
