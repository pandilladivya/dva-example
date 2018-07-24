import React, { Component } from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import Tour from 'reactour'
import _ from 'lodash'
import {style} from './style'
import './style.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shapesArray: this.props.shapes,
      isTourOpen: false,
      color: 'black',
      shapeType: 'square',
      counter: this.props.counter
    }
    this.renderShapes = this.renderShapes.bind(this)
  }

  componentWillMount () {
    this.setState({isTourOpen: this.props.tourStatus})
  }

  componentWillReceiveProps (nextProps) {
    this.setState({shapesArray: nextProps.shapes})
    this.setState({counter: nextProps.counter})
    this.setState({isTourOpen: nextProps.tourStatus})
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
    const accentColor = '#5cb7b7'
    return (
      <div>
        <div style={style.containerStyle}>
          <select style={style.elementStyle} data-tut='shape' value={this.state.shapeType} onChange={(event) => { this.setState({shapeType: event.target.value}) }}>
            <option value='rectangle'>Rectangle</option>
            <option value='circle'>Circle</option>
            <option value='square'>Sqaure</option>
            <option value='triangle'>Triangle</option>
          </select>

          <select style={style.elementStyle} data-tut='color' value={this.state.color} onChange={(event) => { this.setState({color: event.target.value}) }}>
            <option value='blue'>Blue</option>
            <option value='black'>Black</option>
            <option value='red'>Red</option>
            <option value='green'>Green</option>
            <option value='orange'>Orange</option>
            <option value='purple'>Purple</option>
          </select>

          <button style={style.elementStyle} data-tut='add-shape' key='addShape' onClick={() => { this.props.dispatch({type: 'shapes/add', color: this.state.color, shapeType: this.state.shapeType}) }}>Add Shape</button>
          <button style={style.elementStyle} key='removeShape' data-tut='remove-shape' onClick={() => { this.props.dispatch({type: 'shapes/remove'}) }}>Remove Shape</button>

          {this.renderShapes(this.state.shapesArray, values)}

        </div>
        <Tour
          onRequestClose={() => { this.props.dispatch({type: 'tourStatus/changeTourStatus'}) }}
          steps={tourConfig}
          isOpen={this.state.isTourOpen}
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

const tourConfig = [
  {
    selector: '[data-tut="shape"]',
    position: 'right',
    content: `Choose Shape which you want to add`
  },
  {
    selector: '[data-tut="color"]',
    position: 'right',
    content: `Enter color which you want to fill inside the shape`
  },
  {
    selector: '[data-tut="add-shape"]',
    position: 'right',
    content: `You can Add shape by clicking this button`
  },
  {
    selector: '[data-tut="remove-shape"]',
    position: 'left',
    content: ({ goTo }) =>
      <div>
       If you want to remove recently added shape, click this

      </div>
  }
]

export default connect(({ shapes, counter, tourStatus }) => ({
  shapes: shapes,
  counter: counter,
  tourStatus: tourStatus
}))(App)
