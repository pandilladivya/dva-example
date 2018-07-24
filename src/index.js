
import dva from 'dva'

import shapesModel from './models/shapes'
import counterModel from './models/counter'
import tourStatus from './models/tour'
import './style.css'

const app = dva()

app.model(shapesModel)
app.model(counterModel)
app.model(tourStatus)

app.router(require('./router').default)

app.start('#root')
