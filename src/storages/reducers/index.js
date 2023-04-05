import {combineReducers} from 'redux';
import authReducer from './authReducer';

const appReducers = combineReducers({
  auth: authReducer,
});

export default appReducers;
