
import dva from 'dva'

import shapesModel from './models/shapes'
import counterModel from './models/counter'
import tour from './models/tour'
import './style.css'

const app = dva()

app.model(shapesModel)
app.model(counterModel)
app.model(tour)

app.router(require('./router').default)

app.start('#root')
