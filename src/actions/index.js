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