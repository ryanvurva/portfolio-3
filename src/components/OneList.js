import React, { Component } from 'react'
import cx from 'classnames'
import _ from 'lodash'

import db from '../db'

// import send from '../images/001-arrows.svg'

class OneList extends Component {
  state = {
    items: {}
  }

  componentDidMount () {
    db.ref('items').on('value', (snapshot) => {
      this.setState({
        items: snapshot.val()
      })
    })
  }

  addItem (text) {
    db.ref('items').push().set({ text, completed: false })
  }

  toggle (id) {
    const completed = !this.state.items[id].completed
    db.ref(`items/${id}`).update({ completed })
  }

  delete (id) {
    db.ref(`items/${id}`).remove()
  }

  _submit = (event) => {
    event.preventDefault()
    const input = this.refs.todoText
    this.addItem(input.value)
    input.value = ''
  }

  render () {
    return <div className='OneList'>
      <ul className='one-list'>
        {_.map(this.state.items, ({ completed, text }, key) =>
          <li className={cx({ completed })} key={key}>
            <span onClick={() => this.toggle(key)}>{text}</span>
            <button onClick={() => this.delete(key)}><i className='fa fa-trash-o' aria-hidden='true' /></button>
          </li>
          )}
      </ul>
      <form onSubmit={this._submit}>
        <input type='text' ref='todoText' placeholder='add new item' required />
        <button><i className='fa fa-share-square-o' aria-hidden='true' /></button>
      </form>
    </div>
  }
}

export default OneList
