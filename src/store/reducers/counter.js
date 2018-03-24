import * as actions from '../actions/actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      let newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };

    case actions.ADD:
      newState = Object.assign({}, state);
      newState.counter = state.counter + action.value;
      return newState;

    case actions.SUBTRACT:
      newState = Object.assign({}, state);
      newState.counter = state.counter - action.value;
      return newState;

    default:
      return state;
  }

  return state;
}

export default reducer;