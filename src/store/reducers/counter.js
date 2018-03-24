import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      let newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      newState = Object.assign({}, state);
      newState.counter = state.counter + action.value;
      return newState;

    case actionTypes.SUBTRACT:
      newState = Object.assign({}, state);
      newState.counter = state.counter - action.value;
      return newState;

    default:
      return state;
  }

  return state;
}

export default reducer;