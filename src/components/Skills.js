import React, { Component } from 'react'
import codeLogos from '../images/code-logos.png'
import Sass from '../images/sass.png'
import ReactLogo from '../images/react.png'
import MobX from '../images/mobx.png'
import Wordpress from '../images/wordpress-logo-long.png'
import Slack from '../images/slack-logo.png'
import Trello from '../images/trello.png'

class Skills extends Component {
  render () {
    return <div className='Skills'>
      <div className='base-languages'>
        <img src={codeLogos} alt='html 5, css 3, javascript es2016' title='html 5, css 3, javascript es2016' />
      </div>
      <div className='sass'>
        <img src={Sass} alt='sass' title='sass' />
      </div>
      <div className='mobx'>
        <img src={MobX} alt='mob x' title='mobx' />
      </div>
      <div className='reactlogo'>
        <img src={ReactLogo} alt='react' title='react' />
      </div>
      <div className='wordpress'>
        <img src={Wordpress} alt='wordpress' title='wordpress' />
      </div>
      <div className='slack'>
        <img src={Slack} alt='slack' title='slack' />
      </div>
      <div className='trello'>
        <img src={Trello} alt='trello' title='trello' />
      </div>
    </div>
  }
}

export default Skills
