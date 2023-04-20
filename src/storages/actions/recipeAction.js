import axios from 'axios';
const url = `${process.env.REACT_APP_API_URL}/recipes/`;
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

export const addRecipe = (token, data) => async dispatch => {
  try {
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    };
    dispatch({type: 'ADD_RECIPE_PENDING'});
    const result = await axios.post(url, data, config);
    const payload = result.data;
    dispatch({type: 'ADD_RECIPE_SUCCESS', payload});
  } catch (err) {
    dispatch({type: 'ADD_RECIPE_FAILED', payload: err.response.data.message});
    console.log('Add Recipe error');
    console.log('data = ', data);
    console.log(err);
  }
};

export const editRecipe = (token, data, id) => async dispatch => {
  try {
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'multipart/form-data',
      },
    };
    dispatch({type: 'EDIT_RECIPE_PENDING'});
    const result = await axios.put(url + id, data, config);
    const payload = result.data;
    dispatch({type: 'EDIT_RECIPE_SUCCESS', payload});
  } catch (err) {
    dispatch({type: 'EDIT_RECIPE_FAILED', payload: err.response.data.message});
    console.log('Edit Recipe error');
    console.log('data = ', data);
    console.log(err);
  }
};

export const deleteRecipe = (token, id) => async dispatch => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  try {
    dispatch({type: 'DELETE_RECIPE_PENDING'});
    const result = await axios.delete(url + `${id}`, config);
    const recipe = result.data;
    dispatch({type: 'DELETE_RECIPE_SUCCESS', payload: recipe});
  } catch (err) {
    dispatch({
      type: 'DELETE_RECIPE_FAILED',
      payload: err.response.data.message,
    });
    console.log('Delete Recipe error');
    console.log(err);
  }
};

export const sendNotifs = () => async dispatch => {
  const url_onesignal = 'https://onesignal.com/api/v1/notifications';
  let data = {
    included_segments: 'Subscribed Users',
    app_id: `${process.env.ONESIGNAL_APP_ID}`,
    headings: {en: 'New Recipe has been added'},
    contents: {en: 'Check it out now!'},
    name: 'RECIPES_ADDED_NOTIFS',
  };
  let config = {
    headers: {
      accept: 'application/json',
      Authorization: `Basic ${process.env.ONESIGNAL_REST_API_KEY}`,
      'content-type': 'application/json',
    },
  };
  try {
    const result = await axios.post(url_onesignal, data, config);
    console.log(result.data);
  } catch (err) {
    console.log('Send notifs error');
    console.log(err);
  }
};
