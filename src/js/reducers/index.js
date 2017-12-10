import { combineReducers } from 'redux';
import authenticationHistory from './historyReducer';
//import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  authenticationHistory,

});

export default rootReducer;
