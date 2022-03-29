import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
  // dummy: ()=>"Dummy"
  posts: postsReducer,
  users: usersReducer
})