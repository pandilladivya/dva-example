export default {
  namespace: 'counter',
  state: [],
  reducers: {
    shapeCounter  (state, action) {
      return [...state, action.shape]
    }
  }
}
