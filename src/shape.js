import React, { Component } from 'react'
import { connect } from 'dva'

import {Constants} from './constants'
import './style.css'

class Shape extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shape: this.props.location.shape,
      counter: this.props.location.counter
    }
  }

  componentWillMount () {
    this.props.dispatch({type: 'tour/changeTour', tourType: 'shapeDetails'})
  }

  render () {
    const {shape} = this.state

    var shapeStyling = {}
    if (shape) {
      shapeStyling = Constants.getShapeStyling(shape.shapeType, shape.color)
    }

    return (
      <div>
        <div tour-ref='shape-details' style={shapeStyling} />
        <div tour-ref='shape-info'>
          <h5>Type: {shape.shapeType}</h5>
          <h5>Color: {shape.color}</h5>
          <h5>Number of times {shape.shapeType} is clicked: {this.state.counter}</h5>
        </div>
      </div>
    )
  }
}

export default connect(({ tour }) => ({
  tour: tour
}))(Shape)
