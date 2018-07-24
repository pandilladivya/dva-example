import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import _ from 'lodash'

import {style} from './style'
import {Constants} from './constants'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shapesArray: this.props.shapes,
      color: 'black',
      shapeType: 'square',
      counter: this.props.counter
    }
    this.renderShapes = this.renderShapes.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    this.setState({shapesArray: nextProps.shapes})
    this.setState({counter: nextProps.counter})
  }

  renderShapes (shapes, values) {
    return <div style={{display: 'flex', flexDirection: 'row'}}>
      {shapes.map((shape) => {
        var shapeType = shape.shapeType
        var shapeStyling = Constants.getShapeStyling(shapeType, shape.color)

        return <div tour-ref='single-shape'
          onClick={() => {
            this.props.dispatch({type: 'counter/shapeCounter', shape: shapeType})
          }} // Increment Shape counter on single Click

          onDoubleClick={() => {
            this.props.dispatch(routerRedux.push({pathname: '/shape', shape: shape, counter: values[shapeType]}))
          }} // Navigate to shape page on Double click

          style={shapeStyling} >

          <div style={shapeType === 'triangle' ? {marginTop: 10, marginLeft: -2} : {}}>{values[shapeType]}</div>

        </div>
      }
      )}
    </div>
  }

  render () {
    var values = _.countBy(this.state.counter)
    return (
      <div>
        <div style={style.containerStyle}>
          <select style={style.elementStyle} tour-ref='shape' value={this.state.shapeType} onChange={(event) => { this.setState({shapeType: event.target.value}) }}>
            {['Rectangle', 'Circle', 'Sqaure', 'Triangle'].map((shape) => <option value={shape.toLowerCase()}>{shape}</option>)}
          </select>

          <select style={style.elementStyle} tour-ref='color' value={this.state.color} onChange={(event) => { this.setState({color: event.target.value}) }}>
            {['Blue', 'Black', 'Red', 'Green', 'Orange', 'Purple'].map((color) => <option value={color.toLowerCase()}>{color}</option>)}
          </select>

          <button style={style.elementStyle} tour-ref='add-shape' key='addShape' onClick={() => { this.props.dispatch({type: 'shapes/add', color: this.state.color, shapeType: this.state.shapeType}) }}>Add Shape</button>
          <button style={style.elementStyle} key='removeShape' tour-ref='remove-shape' onClick={() => { this.props.dispatch({type: 'shapes/remove'}) }}>Remove Shape</button>

          {this.renderShapes(this.state.shapesArray, values)}
        </div>
      </div>
    )
  }
}

export default connect(({ shapes, counter, tour }) => ({
  shapes: shapes,
  counter: counter,
  tour: tour
}))(App)
