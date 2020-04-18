import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// Create unique network request with ._uniq , _.map
export const fetchPostsAndUsers = () => async (dispatch, getState) => { 
  await dispatch(fetchPosts());
  // //lodash version of _.map
  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // // call fetchuser for each ID, 
  // userIds.forEach(id => dispatch(fetchUser(id)));

  // We can refactor our commented code with lodash chain
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()   // means execute

};



// Action creator to fetchPosts
export const fetchPosts = () =>  async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  
  dispatch( { type: 'FETCH_POSTS', payload: response.data });
};



export const fetchUser = (id) => async (dispatch) => { 
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
}




// // Function before Memoize 
// export const fetchUser = (id) => async (dispatch) => { 
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// }


// // Action creator to fetch user with _memoize
// export const fetchUser = id => dispatch => { 
//   _fetchUser(id, dispatch); 
//  };
//  // we need to give id , dispactch to fetch user
 
//  const _fetchUser = _.memoize(async (id, dispatch) => { 
//    const response = await jsonPlaceholder.get(`/users/${id}`);
//    dispatch({ type: 'FETCH_USER', payload: response.data });
//  });
 