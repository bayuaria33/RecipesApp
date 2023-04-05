import axios from 'axios';

const dummyLogin = {
  email: 'dxc80943@omeie.com',
  password: '123',
};

const REACT_APP_API_URL = 'https://rich-colt-cuff.cyclic.app/';
export const loginUser = data => async dispatch => {
  data = dummyLogin;
  try {
    dispatch({type: 'USER_LOGIN_PENDING'});
    const result = await axios.post(`${REACT_APP_API_URL}/auth/login`, data);
    const user = result.data.data;
    user && dispatch({type: 'USER_LOGIN_SUCCESS', payload: result.data});

    console.log('User Login success');
  } catch (err) {
    console.log('User Login failed');
    console.log(err);
    dispatch({type: 'USER_LOGIN_ERROR'});
  }
};

// export const registerUser = (data, navigate) => async dispatch => {
//   try {
//     dispatch({type: 'USER_REGISTER_PENDING'});
//     const result = await axios.post(
//       `${process.env.REACT_APP_API_URL}/auth/register/user`,
//       data,
//     );
//     const user = result.data.data;
//     console.log(user);
//     dispatch({type: 'USER_REGISTER_SUCCESS', payload: user});
//     navigate('/login');
//     console.log('User Register success');
//   } catch (err) {
//     console.log('User Register failed');
//     console.log(err);
//   }
// };

export const logoutUser = () => {
  return (dispatch, getState) => {
    dispatch({type: 'DELETE_STORE_TOKEN'});
  };
};
