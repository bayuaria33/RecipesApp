import {combineReducers} from 'redux';
import authReducer from './authReducer';
import regisReducer from './regisReducer';

const appReducers = combineReducers({
  auth: authReducer,
  regis: regisReducer,
});

export default appReducers;
