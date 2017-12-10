import * as types  from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import historyApi from '../data/mockHistory';

export function loadHistory(history) {
  return {type:types.LOAD_HISTORY_SUCCESS , history};
}

export function loadHistory1() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return historyApi.getHistory().then(history=>{
      dispatch(loadHistorySuccess(history));
    }).catch(error=>{
      throw (error);
    });
  };
}
