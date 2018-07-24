export default {
  namespace: 'tourStatus',
  state: true,
  reducers: {
    changeTourStatus  (state) {
      return !state
    }
  }
}
