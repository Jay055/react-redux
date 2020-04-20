import streams from '../apis/streams';
// history 
import history from '../history';


import {   CREATE_STREAM, FETCH_STREAMS, DELETE_STREAM,EDIT_STREAM, SIGN_IN, SIGN_OUT, FETCH_STREAM } from './types';


export const signIn = (userId) => { 
  return { 
    type: SIGN_IN,
    payload:userId
  };
};

export const signOut = () => { 
  return { 
    type: SIGN_OUT

  }
}




// Post Request with axios, formValues=formInput, Async would need redux-thunx, post formValues into /streams
// We call dispatchhere because it's a function and while signin and out are called plain objects. 
// getState - how we get values from redux store
export const createStream = formValues => async (dispatch, getState) => { 
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: response.data });
    //Do some progammatic navigation to 
    // get the user back to root route 
  history.push('/');

};




export const fetchStreams = () => async dispatch => { 
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data })
;
}

export const fetchStream = (id) => async dispatch => { 
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data })
;
}




// Edit need the new values also
export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data})
};


// We don't need to return anything on delete 
export const deleteStream = (id) => async dispatch => { 
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id })
}
