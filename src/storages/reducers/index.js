import {combineReducers} from 'redux';
import authReducer from './authReducer';
import regisReducer from './regisReducer';
import getAllReducer from './getRecipeReducer';
import getMyReducer from './myRecipeReducer';
import detailReducer from './detailRecipeReducer';
const appReducers = combineReducers({
  auth: authReducer,
  regis: regisReducer,
  all: getAllReducer,
  my: getMyReducer,
  detail: detailReducer,
});

export default appReducers;
