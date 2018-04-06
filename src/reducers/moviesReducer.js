import * as types from '../actions/actionTypes';
import initialState from './initialState';

const moviesReducer = (state = initialState.movies, action) => {
  switch(action.type) {
    case types.LOAD_MOVIES_SUCCESS:
    console.log('state: ', state);
      return {...state, data: action.movies};
    default:
      return state;
  }
}

export default moviesReducer;