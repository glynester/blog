import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  render(){
    return (
      <div>PostList</div>
    )
  }
}

// Pass in null until we have state and can define 'mapStateToProps'. Action creator as second argument.
export default connect(null,{ fetchPosts})(PostList);
// export default PostList;