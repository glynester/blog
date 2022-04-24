import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder";

// wired up with redux thunk - as for other action creators
// dispatch - to dispatch our own actions inside here.
export const fetchPostsAndUsers=()=>async dispatch=>{
  console.log('about to fetch posts');
  await dispatch(fetchPosts()); // Pass the result of calling fetchPosts() into dispatch function. Manually depatching result of calling action creator. 
  // When we dispatch a function, redux thunk invokes it.
  console.log('fetched posts');
} 

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

export const fetchUser=id=>async dispatch=>{
  const response= await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    })
};

// Memoized version for future reference
// export const fetchUser=id=>dispatch=>_fetchUser(id, dispatch);   // Call memoized fetchUser inside action creator

// const _fetchUser=_.memoize(async(id, dispatch)=>{
//   const response= await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//       type: 'FETCH_USER',
//       payload: response.data
//     })
// });

//~~~

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

// This is wrong - can't use async await syntax
// Error message is: Uncaught Error: Actions must be plain objects. Instead, the actual type was: 'Promise'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. 
// export const fetchPosts=async()=>{
//   const response=await jsonPlaceholder.get('/posts');
//   return {
//     type: 'FETCH_POSTS',
//     payload: response
//   };
// };

