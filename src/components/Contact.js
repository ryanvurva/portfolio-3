import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'

class Contact extends Component {
  render () {
    return <div className='Contact'>
      <div className='social-container'>
        <div className='social'>
          <div className='social-icon'>
            <a href='https://www.facebook.com/ryan.vurva' target='_blank'>
              <i className='fa fa-facebook' aria-hidden='true' title='facebook' />
            </a>
          </div>
          <div className='social-icon'>
            <a href='https://www.linkedin.com/in/ryan-vurva-0993bb13b/' target='_blank'>
              <i className='fa fa-linkedin' aria-hidden='true' title='linked in' />
            </a>
          </div>
          <div className='social-icon'>
            <a href='https://twitter.com/theeffinvurv' target='_blank'>
              <i className='fa fa-twitter' aria-hidden='true' title='twitter' />
            </a>
          </div>
        </div>
        <div className='social'>
          <div className='social-icon'>
            <a href='https://github.com/ryanvurva' target='_blank'>
              <i className='fa fa-github' aria-hidden='true' title='github' />
            </a>
          </div>
          <div className='social-icon'>
            <a href='https://medium.com/@theeffinvurv' target='_blank'>
              <i className='fa fa-medium' aria-hidden='true' title='medium blogs' />
            </a>
          </div>
          <div className='social-icon'>
            <a href='http://codepen.io/theVurv/' target='_blank'>
              <i className='fa fa-codepen' aria-hidden='true' title='codepen.io' />
            </a>
          </div>
        </div>
      </div>
      <div><h4>directly connect to me</h4></div>
      <div className='connect'>
        <div className='connect-icon appear'>
          <a href='http://www.slack.com' target='_blank'>
            <i className='fa fa-slack' aria-hidden='true' /> <p>&nbsp;ryan.vurva</p>
          </a>
        </div>
        <div className='connect-icon appear'>
          <a href='mailto:ryanvurva@gmail.com'>
            <i className='fa fa-envelope-o' aria-hidden='true' /> <p>&nbsp;ryanvurva@gmail.com</p>
          </a>
        </div>
        <div className='connect-icon appear'>
          <a href='tel:3214439109' target='_blank'>
            &nbsp;&nbsp;<i className='fa fa-mobile' aria-hidden='true' /> <p>&nbsp;321.443.9109</p>
          </a>
        </div>
      </div>
    </div>
  }
}

export default Contact
