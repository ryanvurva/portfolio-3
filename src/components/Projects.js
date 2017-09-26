import React, { Component } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import { observer } from 'mobx-react'

import MNdesktop from './MNdesktop'
import MNmobile from './MNmobile'
import MNdesktopGIF from './MNdesktopGIF'
import MNmobileGIF from './MNmobileGIF'
import BBdesktop from './BBdesktop'
import BBdesktopGIF from './BBdesktopGIF'
import WGdesktop from './WGdesktop'
import AEdesktop from './AEdesktop'
import CDEblog from './CdeBlogDesktop.js'
import HQcde from './HQcde.js'
import GoEBTblog from './GoEBTBlogDesktop.js'
import ColorPicker from './ColorPicker'
import OneList from './OneList'

import tictactoe from '../images/tictactoe.png'

@observer
class Projects extends Component {
  render () {
    return <div className='Projects'>
      {/* movie night */}
      <div className='project movieNight wow slideInRight' data-wow-delay='800ms'>
        <Switch>
          <Route exact path='/projects' component={MNdesktop} />
          <Route exact path='/projects/mn-mobile' component={MNmobile} />
          <Route exact path='/projects/MNdesktop-gif' component={MNdesktopGIF} />
          <Route exact path='/projects/MNmobile-gif' component={MNmobileGIF} />
          <Route path='/projects' component={MNdesktop} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='800ms'>movieNight</div>
            <div className='spacer-bar'>  &nbsp;|&nbsp;</div>
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
      {/* food menu */}
      <div className='project bistroBraavos wow slideInLeft' data-wow-delay='800ms'>
        <Switch>
          <Route exact path='/projects' component={BBdesktop} />
          <Route exact path='/projects/BBdesktop-gif' component={BBdesktopGIF} />
          <Route path='/projects' component={BBdesktop} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>bistroBraavos</div>
          </div>
          <NavLink to='http://food-menu.ryanvurva.surge.sh/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> bistrobraavos.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>A Restaurant Menu designed for a project while at the Iron Yard.</div>
          <div>An Online Menu that pulls the data from an online database.  In this case it was with Google's Firebase Rest API service.</div>
          <div className='skills-used'>&nbsp;- Designed from the ground up using : <span>CSS / SASS / React / MobX / JS / firebase rest API</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Oyesters, Clams and Cockles!  Best in the city!"</p>
        </div>
      </div>
      {/* wealth guidance */}
      <div className='project wealthGuidance wow slideInRight' data-wow-delay='800ms'>
        <Switch>
          <Route exact path='/projects' component={WGdesktop} />
          <Route path='/projects' component={WGdesktop} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>Wealth Guidance Group LLC</div>
          </div>
          <NavLink to='http://www.wealthguidancegroup.com' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' />www.wealthguidancegroup.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>This was a site UI/UX redesign for a financial accounting firm.</div>
          <div>A local St. Pete Accounting firm that is a client of Ecliptic Designs.  We already have a site that we built for them a few years ago and recently were asked to do a site upgrade with new Wordpress features included.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>"With over 30 years experience we'll ensure you always get the best guidance." | Larry L. Galantis - CFO</p>
        </div>
      </div>
      {/* adriatic experience */}
      <div className='project adriaticExperience wow slideInLeft'>
        <Switch>
          <Route exact path='/projects' component={AEdesktop} />
          <Route path='/projects' component={AEdesktop} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>Adriatic Experience</div>
          </div>
          <NavLink to='https://www.adriaticexperience.com/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> www.adriaticexperience.com</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>On this site, I was responsible for full site content transfer to an upgraded version of Wordpress software and client functionality.</div>
          <div>After desiring the capability to add new photos and packages for their travel organization without the requirement of a web master, this site was moved over to use a new back end editor in Wordpress called "Visual Composer".  This meant rebuilding every page in the new dashboard area so that it looked and acted exactly the same as before on the front end for users.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>Adriatic Experience is a travel site for your dream vacation to the Adriatic Sea and surrounding areas.  Hearing about Ecliptic Designs through word of mouth, we have designed and deployed 2 versions of their site through the Wordpress software.  Check them out now for wine tours and yacht rentals all around the Adriatic Sea.</p>
        </div>
      </div>
      {/* cde blog */}
      <div className='project cdeBlog wow slideInRight'>
        <Switch>
          <Route exact path='/projects' component={CDEblog} />
          <Route path='/projects' component={CDEblog} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>CDE Solutions Blog</div>
          </div>
          <NavLink to='https://www.cdesolutions.com/blog/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' />www.cdesolutions.com/blog</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>Another site UI/UX redesign, but for a POS systems company.</div>
          <div>For this client I was asked to redesign their blog page from the default Wordpress display to better match another style that they were going for.  The company liked the redesign so much I was asked to mostly duplicate it on another one of their sites as well.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>CDE aims to eliminate the lifecycle of critical POS equipment and accessories to provide the peace of mind needed to operate and grow a successful business in a world of ever changing technology and demands.</p>
        </div>
      </div>
      {/* HQ CDE solutions */}
      <div className='project cdeBlog wow slideInLeft'>
        <Switch>
          <Route exact path='/projects' component={HQcde} />
          <Route path='/projects' component={HQcde} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>CDE HQ Internal Monitors</div>
          </div>
          {/* <NavLink to='https://www.cdesolutions.com/blog/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' />www.cdesolutions.com/blog</NavLink> */}
        </div>
        <hr />
        <div className='projectDescription'>
          <div>Web page used for monitors inside the HQ of CDE solutions in Georgia.</div>
          <div>To make an easily editable and updatable screen to display info around the workplace on 50 in. monitors.  Built from scratch in a Wordpress environment, this site uses jQuery and PHP to display sets of information in the dialogue boxes and scroll through said text at a steady interval, depending on the size of the content being shown. </div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
      </div>
      {/* goEBT blog */}
      <div className='project cdeBlog wow slideInRight'>
        <Switch>
          <Route exact path='/projects' component={GoEBTblog} />
          <Route path='/projects' component={GoEBTblog} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>goEBT.com Blog</div>
          </div>
          <NavLink to='https://www.goebt.com/news/' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' />www.goebt.com/news</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>This is the other site that I did an almost replica of the blog section.  There are some differences that they wanted to shine between the two, like the type of info that is presented on the landing page for the blog section, or there being ad spaces as well as the blog content.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>WORDPRESS / PHP / CSS / jQuery / JS</span></div>
        </div>
        <div className='projectPitch'>
          <p>goEBT exists to provide convenience and grocery store owners the opportunity to have ideal EBT card processing without all of the confusion or difficulty.</p>
        </div>
      </div>
      {/* color picker */}
      <div className='project colorPicker wow slideInLeft'>
        <Switch>
          <Route exact path='/projects' component={ColorPicker} />
          <Route path='/projects' component={ColorPicker} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>ColorBox</div>
          </div>
          <NavLink to='https://github.com/ryanvurva/react-colorpicker' target='new window'><i className='fa fa-arrow-circle-o-right' aria-hidden='true' /> GitHub repository</NavLink>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>An HSL color picker project.</div>
          <div>Responsive functionality to the changes you make on the sliders is controlled using Javascript and MobX for the control over the state.  Interactive and accurate code displays either 'hsl' or 'hsla' depending on the position of the alpha (opacity) setting.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>HTML / SASS / JS / React / MobX</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Go ahead, give it a try.  This is a live example!"</p>
        </div>
      </div>
      {/* one list */}
      <div className='project taskManager wow slideInRight'>
        <Switch>
          <Route exact path='/projects' component={OneList} />
          <Route path='/projects' component={OneList} />
        </Switch>
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>Task Manager</div>
          </div>
        </div>
        <hr />
        <div className='projectDescription'>
          <div>A glorified To-Do list.</div>
          <div>This web app is a To-Do list with the ability to add items, mark them as complete, and delete them if they are no longer necessary.</div>
          <div className='skills-used'>&nbsp;- Designed using : <span>HTML / SASS / JS / React / MobX / Firebase API / Lodash</span></div>
        </div>
        <div className='projectPitch'>
          <p>"Add/remove a comment or task for me, or just say HI"</p>
        </div>
      </div>
      {/* tic-tac-toe */}
      <div className='project tictactoe wow slideInLeft'>
        <img src={tictactoe} />
        <div className='projectTitle'>
          <div className='section-left'>
            <div className='title wow tada' data-wow-delay='300ms'>Tic-Tac-Toe</div>
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
    </div>
  }
}

export default Projects
