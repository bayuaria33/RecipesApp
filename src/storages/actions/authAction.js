import axios from 'axios';

const REACT_APP_API_URL = 'https://rich-colt-cuff.cyclic.app/';
export const loginUser = data => async dispatch => {
  try {
    dispatch({type: 'USER_LOGIN_PENDING'});
    const result = await axios.post(`${REACT_APP_API_URL}/auth/login`, data);
    // const user = result.data.data;
    dispatch({type: 'USER_LOGIN_SUCCESS', payload: result.data});

    console.log('User Login success');
  } catch (err) {
    console.log('User Login failed');
    console.log(err);
    dispatch({type: 'USER_LOGIN_ERROR'});
  }
};

export const registerUser = data => async dispatch => {
  try {
    dispatch({type: 'USER_REGISTER_PENDING'});
    const result = await axios.post(
      `${REACT_APP_API_URL}/auth/register/user`,
      data,
    );
    // const user = result.data.data;
    dispatch({type: 'USER_REGISTER_SUCCESS', payload: result.data});
    console.log('User Register success');
  } catch (err) {
    console.log('User Register failed');
    console.log(err);
    dispatch({type: 'USER_REGISTER_ERROR'});
  }
};

export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_STORE_TOKEN'});
  };
};
