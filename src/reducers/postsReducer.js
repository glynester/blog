export default(state=[], action)=>{
  // return 123;
  // if (action.type==='FETCH_POSTS'){
  //   return action.payload;
  // }
  // return state;   // Never return undefined from a reducer.
  // Using switch statement as an alternative way of doing this.
  switch(action.type){
    case 'FETCH_POSTS': return action.payload;
    // case 'xyz': 
    default: return state;
  }
}