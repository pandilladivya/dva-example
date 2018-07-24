import React, {Component} from 'react'
import { connect } from 'dva'
import { routerRedux, Route, Switch } from 'dva/router'
import Tour from 'reactour'

import App from './App'
import Shape from './shape'
import SideMenu from './menu'

const { ConnectedRouter } = routerRedux
class RouterConfig extends Component {
  render () {
    const accentColor = '#5cb7b7'
    const {history, tour, dispatch} = this.props
    var steps = []
    if (history.location.pathname !== '/') {
      steps.push({
        selector: '[tour-ref="home-page"]',
        position: 'left',
        content: 'Go to Home Page to continue'
      })
    }
    steps.push(...tour.steps)

    return (
      <div>
        <SideMenu />
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/shape' component={Shape} />
          </Switch>
        </ConnectedRouter>
        <Tour
          onRequestClose={() => { dispatch({type: 'tour/changeTourStatus'}) }}
          steps={steps}
          isOpen={tour.status}
          maskClassName='mask'
          maskSpace='10'
          className='helper'
          rounded={5}
          accentColor={accentColor}
        />
      </div>
    )
  }
}

export default connect(({ tour, shapes }) => ({
  tour,
  shapes
}))(RouterConfig)
