import React, {Component} from 'react'
import { routerRedux, Route, Switch } from 'dva/router'
import { connect } from 'dva'
import Tour from 'reactour'
import App from './App'
import Shape from './shape'

const { ConnectedRouter } = routerRedux
class RouterConfig extends Component {
  render () {
    const accentColor = '#5cb7b7'
    const {history, tour, dispatch} = this.props

    return (
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/shape' component={Shape} />
          </Switch>
        </ConnectedRouter>
        <Tour
          onRequestClose={() => { dispatch({type: 'tour/changeTourStatus'}) }}
          steps={tour.steps}
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

export default connect(({ tour }) => ({
  tour: tour
}))(RouterConfig)
