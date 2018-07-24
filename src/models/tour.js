export default {
  namespace: 'tour',
  state: {
    tourType: '',
    status: false
  },
  reducers: {
    changeTourStatus  (state) {
      return Object.assign({}, state, {
        tourType: state.tourType, status: !state.status
      })
    },
    changeTour  (state, action) {
      return Object.assign({}, state, {
        tourType: action.tourType, status: true
      })
    }
  }
}
