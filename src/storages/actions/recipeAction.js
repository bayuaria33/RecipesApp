import axios from 'axios';
import {useSelector} from 'react-redux';

let url = `${process.env.REACT_APP_API_URL}/recipes`;
export const getRecipe = (search, sort, page) => async dispatch => {
  const auth = useSelector(state => state.auth.data);
  const token = 'Bearer ' + auth.accessToken;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({type: 'GET_RECIPE_PENDING'});
    const result = await axios.get(
      url + `?search=${search}&sort=${sort}&page=${page}&limit=5`,
      config,
    );
    const recipe = result.data.data;
    dispatch({type: 'GET_RECIPE_SUCCESS', payload: recipe});
  } catch (err) {
    dispatch({type: 'GET_RECIPE_FAILED', payload: err.response.data.message});
    console.log('Get Recipe error');
    console.log(err);
  }
};

export const getUserRecipe = page => async dispatch => {
  const auth = useSelector(state => state.auth.data);
  const token = 'Bearer ' + auth.accessToken;
  let config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    dispatch({type: 'GET_USER_RECIPE_PENDING'});
    const result = await axios.get(
      url + `/my-recipe?page=${page}&limit=5`,
      config,
    );
    const recipe = result.data.data;
    dispatch({type: 'GET_USER_RECIPE_SUCCESS', payload: recipe});
  } catch (err) {
    dispatch({
      type: 'GET_USER_RECIPE_FAILED',
      payload: err.response.data.message,
    });
    console.log('Get User Recipe error');
    console.log(err);
  }
};
