import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
  renderList(){
    return this.props.posts.map(post=>{
      return (
        <div key={post.id} className="item">
          <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <h2>{post.userId}</h2>
            </div>
          </div>
        </div>
      )
    });
  }

  render(){
    console.log("PostList=>this.props.posts",this.props.posts);
    return (
      // <div>PostList</div>
      <div className="ui relaxed divided list">
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return { posts: state.posts };
}

// Pass in null until we have state and can define 'mapStateToProps'. Action creator as second argument.
export default connect(mapStateToProps,{ fetchPosts})(PostList);
// export default PostList;