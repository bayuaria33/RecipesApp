import {combineReducers} from 'redux';
import authReducer from './authReducer';
import regisReducer from './regisReducer';
import getAllReducer from './getRecipeReducer';
import getMyReducer from './myRecipeReducer';
import detailReducer from './detailRecipeReducer';
import addReducer from './addRecipeReducer';
import deleteReducer from './deleteRecipeReducer';
import editReducer from './editRecipeReducer';
import editProfile from './editProfileReducer';
const appReducers = combineReducers({
  auth: authReducer,
  regis: regisReducer,
  all: getAllReducer,
  my: getMyReducer,
  detail: detailReducer,
  add: addReducer,
  del: deleteReducer,
  edit: editReducer,
  editprofile: editProfile,
});

export default appReducers;
