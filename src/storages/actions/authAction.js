import axios from 'axios';
const url = `${process.env.REACT_APP_API_URL}/`;
export const loginUser = data => async dispatch => {
  try {
    dispatch({type: 'USER_LOGIN_PENDING'});
    const result = await axios.post(url + '/auth/login', data);
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
    const result = await axios.post(url + '/auth/register/user', data);
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

export const requestOTP = data => async dispatch => {
  try {
    dispatch({type: 'REQUEST_OTP_PENDING'});
    const result = await axios.post(url + '/users/otp', data);
    // const user = result.data.data;
    dispatch({type: 'REQUEST_OTP_SUCCESS', payload: result.data});
    console.log('Request OTP success');
  } catch (err) {
    console.log('Request OTP failed');
    console.log(err);
    dispatch({type: 'REQUEST_OTP_ERROR'});
  }
};
export const verifyUser = data => async dispatch => {
  try {
    dispatch({type: 'VERIFY_PENDING'});
    const result = await axios.post(url + '/users/verify', data);
    // const user = result.data.data;
    dispatch({type: 'VERIFY_SUCCESS', payload: result.data});
    console.log('User verify success');
  } catch (err) {
    console.log('User verify failed');
    console.log(err);
    dispatch({type: 'VERIFY_ERROR'});
  }
};
//ADD VERIFYUSER
