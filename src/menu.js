import React, {Component} from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

class SideMenu extends Component {
  render () {
    return (
      <div style={{flexDirection: 'column', display: 'flex', float: 'right'}}>
        <a tour-ref='home-page' onClick={() => { this.props.dispatch(routerRedux.push({pathname: '/'})) }}><u>Home Page</u></a>
        <a onClick={() => { this.props.dispatch({type: 'tour/changeTour', tourType: 'demo'}) }}><u>Basic App Intro</u></a>
        <a onClick={() => { this.props.dispatch({type: 'tour/changeTour', tourType: 'add'}) }}><u>How to add a shape?</u></a>
        <a onClick={() => { this.props.dispatch({type: 'tour/changeTour', tourType: 'remove'}) }}><u>How to remove a shape?</u></a>
        <a onClick={() => {
          if (this.props.shapes.length > 0) { this.props.dispatch({type: 'tour/changeTour', tourType: 'singleShape'}) } else { alert('Please Add Atleast one shape to know more about shape') }
        }} style={{cursor: 'pointer'}}>
          <u>About each shape?</u>
        </a>
      </div>

    )
  }
}

export default connect(({ tour, shapes }) => ({
  tour,
  shapes
}))(SideMenu)
