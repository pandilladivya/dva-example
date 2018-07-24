import React, { Component } from 'react'
import { connect } from 'dva'
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
      switch (shape.shapeType) {
        case 'square':
          shapeStyling = {width: 40, height: 40, margin: 2, backgroundColor: shape.color}
          break
        case 'rectangle':
          shapeStyling = {width: 80, height: 40, margin: 2, backgroundColor: shape.color}
          break
        case 'circle':
          shapeStyling = {width: 40, height: 40, borderRadius: 20, margin: 2, backgroundColor: shape.color}
          break
        case 'triangle': shapeStyling = {
          width: 0,
          height: 0,
          borderTopWidth: 0,
          borderBottomWidth: 40,
          borderLeftWidth: 20,
          borderRightWidth: 20,
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: shape.color,
          margin: 10
        }
          break
      }
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
