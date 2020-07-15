const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '':
      return { ...state, ...action.payload }

    default:
      return state
  }
}
