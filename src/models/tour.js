import {data} from './mock'
export default {
  namespace: 'tour',
  state: {
    tourType: '',
    status: false,
    steps: []
  },
  reducers: {
    changeTourStatus  (state) {
      return Object.assign({}, state, {
        tourType: state.tourType,
        status: !state.status,
        steps: state.steps
      })
    },
    changeTour  (state, action) {
      return Object.assign({}, state, {
        tourType: action.tourType, status: true, steps: data[action.tourType]
      })
    }
  }
}
