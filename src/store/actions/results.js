import * as actions from '../actions/actions';

export const saveResult = (result) => {
  return {
    type: actions.STORE_RESULT,
    result
  }
}

// async
export const storeResult = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000);
  }
};

export const deleteResult = (resultId) => {
  return {
    type: actions.DELETE_RESULT,
    resultId
  }
};