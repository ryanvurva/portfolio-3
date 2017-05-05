import React, { Component } from 'react'
import { BrowserRouter as Router,
Route,
Switch
} from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'

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
          </Switch>
        </main>
      </div>
    </Router>
  }
}

export default App
