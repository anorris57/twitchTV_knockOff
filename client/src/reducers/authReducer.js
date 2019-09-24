const INITIAL_STATE = {
  isSignedIN: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {...state, isSignedIN: true};
    case 'SIGN_OUT':
      return {...state, isSignedIN: false};
    default:
      return state;
  }
};