import { combineReducers } from 'redux';
import postsReducer from './postsReducer';


export default combineReducers({
  // dummy: ()=>"Dummy"
  posts: postsReducer
})