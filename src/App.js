import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import _ from 'lodash'
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
        console.log('values', values['square'])
        var shapeType = shape.shapeType
        var shapeStyling = {}
        switch (shapeType) {
          case 'square':
            shapeStyling = {width: 40, height: 40, margin: 20, backgroundColor: shape.color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
            break
          case 'rectangle':
            shapeStyling = {width: 80, height: 40, margin: 20, backgroundColor: shape.color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
            break
          case 'circle':
            shapeStyling = {width: 40, height: 40, borderRadius: 20, margin: 20, backgroundColor: shape.color, color: '#fff', justifyContent: 'center', alignItems: 'center', display: 'flex'}
            break
          case 'triangle': shapeStyling = {
            width: 0,
            height: 0,
            borderTopWidth: 0,
            borderBottomWidth: 40,
            borderLeftWidth: 20,
            borderRightWidth: 20,
            borderStyle: 'solid',
            color: '#fff',
            backgroundColor: 'transparent',
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: shape.color,
            margin: 20
          }
            break
        }
        return <div
          onClick={() => {
            this.props.dispatch({type: 'counter/shapeCounter', shape: shapeType})
          }}
          onDoubleClick={() => {
            this.props.dispatch(routerRedux.push({pathname: '/shape', shape: shape}))
          }}
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
        <select value={this.state.shapeType} onChange={(event) => { this.setState({shapeType: event.target.value}) }}>
          <option value='rectangle'>Rectangle</option>
          <option value='circle'>Circle</option>
          <option value='square'>Sqaure</option>
          <option value='triangle'>Triangle</option>
        </select>

        <input value={this.state.color} label='Enter Color' placeholder='Choose Color' onChange={(event) => {
          this.setState({color: event.target.value})
        }} />
        <button key='addShape' onClick={() => { this.props.dispatch({type: 'shapes/add', color: this.state.color, shapeType: this.state.shapeType}) }}>Add Shape</button>
        <button key='removeShape' onClick={() => { this.props.dispatch({type: 'shapes/remove'}) }}>Remove Shape</button>

        {this.renderShapes(this.state.shapesArray, values)}

      </div>
    )
  }
}

export default connect(({ shapes, counter }) => ({
  shapes: shapes,
  counter: counter
}))(App)
