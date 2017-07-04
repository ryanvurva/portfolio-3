import React, { Component } from 'react'

import codeLogos from '../images/code-logos.png'
import Sass from '../images/sass.png'
import ReactLogo from '../images/react.png'
import MobX from '../images/mobx.png'
import Wordpress from '../images/wordpress-logo-long.png'
import Slack from '../images/slack-logo.png'
import GitHub from '../images/github-logo.png'
import NodeJS from '../images/nodejs.png'
import Ajax from '../images/ajax.png'
import Dreamweaver from '../images/dreaweaver-cs4-logo.png'
import Atom from '../images/atom.png'
import jQuery from '../images/jquery.png'
import graphQL from '../images/graphql.png'

class About extends Component {
  render () {
    return <div className='About'>
      <div className='aboutMe'>
        <div className='aboutMeHeader fade-in-1'>
          Would you like to know more?
        </div>
        <div className='description fade-in-2'>
          I'm a web developer in the Tampa Bay, FL area.  I have a number of things that I am passionate about,
          but web design and programming have always been high on my list of interests.  I grew an affinity for the tech industry
          in high school learning about graphic arts and production printing/screen printing, but it was the tech design part that always held my attention.
          After high school I began working in web design and development as a side option to a career in the service industry as a Bartender.  After 10+
          years of this, I decided to enroll in the Iron Yard, St. Pete.  I learned to refine my basic programming skills, and learned Javascript with a
          strong focus on ReactJS.  I also have a background using Wordpress.org for various websites.  My other passions include being a father/husband, music,
          movies and the film industry, and much more.  My goal is to take every project given to me, and to the best of my ability, move that project forward...
        </div>
      </div>
      <div className='skills'>
        <div className='skillsTitle wow fadeInDown' data-wow-delay='300ms'>My "Utility" Belt</div>
        <div className='Skills'>
          <div className='base-languages wow flipInX' data-wow-delay='500ms'>
            <img src={codeLogos} alt='html 5, css 3, javascript es2016' title='html 5, css 3, javascript es2016' />
          </div>
          <div className='sass wow flipInX' data-wow-delay='600ms'>
            <img src={Sass} alt='sass' title='sass' />
          </div>
          <div className='mobx wow flipInX' data-wow-delay='700ms'>
            <img src={MobX} alt='mob x' title='mobx' />
          </div>
          <div className='reactlogo wow flipInX' data-wow-delay='500ms'>
            <img src={ReactLogo} alt='react' title='react' />
          </div>
          <div className='wordpress wow flipInX' data-wow-delay='600ms'>
            <img src={Wordpress} alt='wordpress' title='wordpress' />
          </div>
          <div className='slack wow flipInX' data-wow-delay='500ms'>
            <img src={Slack} alt='slack' title='slack' />
          </div>
          <div className='github wow flipInX' data-wow-delay='600ms'>
            <img src={GitHub} alt='github' title='github' />
          </div>
          <div className='nodeJS wow flipInX' data-wow-delay='500ms'>
            <img src={NodeJS} alt='node.js' title='node.js' />
          </div>
          <div className='ajax wow flipInX' data-wow-delay='600ms'>
            <img src={Ajax} alt='ajax' title='ajax' />
          </div>
          <div className='jQuery wow flipInX' data-wow-delay='500ms'>
            <img src={jQuery} alt='jQuery' title='jQuery' />
          </div>
          <div className='jQuery wow flipInX' data-wow-delay='600ms'>
            <img src={graphQL} alt='graph QL' title='graphQL' />
          </div>
          <div className='atom wow flipInX' data-wow-delay='500ms'>
            <img src={Atom} alt='atom' title='atom' />
          </div>
          <div className='dreamweaver wow flipInX' data-wow-delay='600ms'>
            <img src={Dreamweaver} alt='dreamweaver' title='adobe dreamweaver' />
          </div>
        </div>
      </div>
    </div>
  }
}

export default About
