import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import NewStation from './pages/NewStation'

import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import AllStations from './pages/AllStations'
import AllFireFighters from './pages/AllFireFighters'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Seaside Fire Department</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/station/new"> Create Station</Link>
            </li>
            <li>
              <Link to="/AllStations/">All Stations</Link>
            </li>
            <li>
              <Link to="/fireFighter/">
                All Firefighters/Create Firefighters
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/station/new" component={NewStation}></Route>
        <Route exact path="/AllStations" component={AllStations}></Route>
        <Route exact path="/fireFighter" component={AllFireFighters}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
