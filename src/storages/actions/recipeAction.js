import axios from 'axios';
const url = 'https://rich-colt-cuff.cyclic.app/recipes/';
export const getAllRecipe = (token, search) => async dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  try {
    dispatch({type: 'GET_RECIPE_PENDING'});
    const result = await axios.get(url + '?search=' + search, config);
    let res = result.data.data;
    dispatch({type: 'GET_RECIPE_SUCCESS', payload: res});
  } catch (error) {
    dispatch({type: 'GET_RECIPE_ERROR'});
  }
};

export const getMyRecipe = token => async dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  try {
    dispatch({type: 'GET_MY_RECIPE_PENDING'});
    const result = await axios.get(url + 'my-recipe', config);
    let res = result.data.data;
    dispatch({type: 'GET_MY_RECIPE_SUCCESS', payload: res});
  } catch (error) {
    dispatch({type: 'GET_MY_RECIPE_ERROR'});
  }
};

export const getDetailRecipe = (token, id) => async dispatch => {
  const config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  try {
    dispatch({type: 'GET_DETAIL_RECIPE_PENDING'});
    const result = await axios.get(url + id, config);
    console.log('url: ', url + id);
    let res = result.data.data;
    dispatch({type: 'GET_DETAIL_RECIPE_SUCCESS', payload: res});
  } catch (error) {
    dispatch({type: 'GET_DETAIL_RECIPE_ERROR'});
  }
};
