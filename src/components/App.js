import React, { Component } from 'react'
import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import Skills from './Skills'
import Contact from './Contact'

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
            <Route path='/skills' component={Skills} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
