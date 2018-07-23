import React from 'react'
import { routerRedux, Route, Switch } from 'dva/router'
import App from './App'
import Shape from './shape'

const { ConnectedRouter } = routerRedux

function RouterConfig ({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={App} />
        <Route path='/shape' component={Shape} />
      </Switch>
    </ConnectedRouter>
  )
}

export default RouterConfig
