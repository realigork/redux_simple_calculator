import * as actions from '../actions/actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actions.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), val: action.result})
      }

    case actions.DELETE_RESULT:
      const updated = state.results.filter(result => result.id !== action.resultId);
      return {
        ...state,
        results: updated
      }

    default:
      return state;
  }

  return state;
}

export default reducer;