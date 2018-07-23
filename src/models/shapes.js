import index from 'dva'

export default {
  namespace: 'shapes',
  state: [],
  reducers: {
    add  (state, action) {
      var shape = {
        shapeType: action.shapeType,
        color: action.color
      }
      return [...state, shape]
    },
    remove (state) { return state.splice(index, state.length - 1) }
  }
}
