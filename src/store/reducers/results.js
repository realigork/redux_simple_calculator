import * as actions from '../actions/actions';
import { updateObject } from '../utilities';

const initialState = {
  results: []
};

const deleteResult = (state, action) => {
  const updated = state.results.filter(result => result.id !== action.resultId);
  return updateObject(state, { results: updated })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.STORE_RESULT:
      return updateObject(state, { results: state.results.concat({ id: new Date(), val: action.result}) })

    case actions.DELETE_RESULT:
      return deleteResult(state, action);

    default:
      return state;
  }

  return state;
}

export default reducer;