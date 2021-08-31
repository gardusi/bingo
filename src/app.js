import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Route, Redirect, Switch } from 'react-router'
import Dashboard from './containers'
import './index.css'

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      <Switch>
        <Route path='/bingo' exact component={Dashboard} />
        <Redirect to='/bingo' />
      </Switch>
    </div>
  </ConnectedRouter>
)
App.propTypes = {
  history: PropTypes.object
}
export default App
