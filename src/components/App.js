import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Resume from './Resume'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about-me' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
