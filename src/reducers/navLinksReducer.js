import * as types from '../actions/actionTypes';
import initialState from './initialState';

const navLinksReducer = (state = initialState.navLinks, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default navLinksReducer;