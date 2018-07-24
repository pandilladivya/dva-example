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
      var steps = []
      switch (action.tourType) {
        case 'add':
          steps = [
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
              content: 'New shape is added when this button is clicked, based on above selected properties'
            }
          ]
          break
        case 'remove':
          steps = [
            {
              selector: '[data-tut="remove-shape"]',
              position: 'right',
              content: 'Recently Created shape is removed, when this button is clicked.'
            }
          ]
          break
        case 'demo':
          steps = [
            {
              selector: '[data-tut="shape"]',
              position: 'right',
              content: 'Choose Shape which you want to add'
            },
            {
              selector: '[data-tut="color"]',
              position: 'right',
              content: 'Enter color which you want to fill inside the shape'
            },
            {
              selector: '[data-tut="add-shape"]',
              position: 'right',
              content: 'New shape is added when this button is clicked, based on above selected properties'
            },
            {
              selector: '[data-tut="remove-shape"]',
              position: 'left',
              content: 'If you want to remove recently added shape, click this'
            }
          ]
      }
      return Object.assign({}, state, {
        tourType: action.tourType, status: true, steps: steps
      })
    }
  }
}
