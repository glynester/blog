import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

// This is wrong - can't use async await syntax
// Error message is: Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. 
// export const fetchPosts=async()=>{
//   const response=await jsonPlaceholder.get('/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };

// Only concerned with what we return from the outer function (the action creator).
// Function returns a function.
export const fetchPosts=()=>{
  // With redux thunk we can use async await
  return async dispatch=>{
    const response= await jsonPlaceholder.get('/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    })
  };
};

// Can't refetch user - side effect - can only fetch once. Would need identical action creator (without the memoize) to do this.
export const fetchUser=(id)=>{
  return dispatch=>{
    _fetchUser(id, dispatch);   // Call memoized fetchUser inside action creator
  };
};

const _fetchUser=_.memoize(async(id, dispatch)=>{
  const response= await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    })
});

// export  const fetchUser= function(id){
//   // Doesn't work because a new function is created each time so this can't be memoized.
//   return _.memoize(async function (dispatch){
//     const response= await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data
//     })
//   });
// };

