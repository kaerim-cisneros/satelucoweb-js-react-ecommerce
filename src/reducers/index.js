import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import headerNavbar from './headernavbarReducer';
import user from './userReducers';

const rootReducer = combineReducers({
  form,
  headerNavbar,
  user
});

export default rootReducer;