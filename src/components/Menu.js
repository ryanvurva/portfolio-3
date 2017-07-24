import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { observer } from 'mobx-react'
import cx from 'classnames'
import ui from '../ui'

@observer
class Menu extends Component {
  render () {
    return <div className='Menu'>
      <aside className={cx('menuMobile', { hidden: !ui.menuShown })}>
        <ul>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/about-me'>about</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/projects'>projects</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/contact'>contact</NavLink></li>
          <li onClick={() => ui.toggleMenu()}><NavLink to='/resume'>resume</NavLink></li>
        </ul>
      </aside>
    </div>
  }
}

export default Menu
