import {LOAD_HISTORY_SUCCESS} from '../actions/actionTypes';
import initialState from './initialState';

function historyReducer(state=initialState.authenticationHistory, action) {
  switch (action.type) {
    case LOAD_HISTORY_SUCCESS:
      return{ ...state, history1: action.history};
    default:
      return state;
  }
}

export default historyReducer;
