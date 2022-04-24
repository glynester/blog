import React from 'react';
import { connect } from 'react-redux';
// import { fetchUser } from '../actions';


class UserHeader extends React.Component {

  // componentDidMount(){
  //     this.props.fetchUser(this.props.userId);
  // }

  render(){
    const { user } = this.props;
    if (!user){ return null; }
    return (
      // Call action creator inside here to get appropriate user
      <div className="header">{user.name}</div>
    );
  }

}

// Can do precalculations (ownProps reference items about to go into the component) inside mapStateToProps to cut down on data passed.
const mapStateToProps=(state, ownProps)=>{
  return { user: state.users.find(user=>user.id===ownProps.userId) }
}

// Must call an action creator to fetch the user to show on the screen.
// export default connect(mapStateToProps,{ fetchUser})(UserHeader);
export default connect(mapStateToProps)(UserHeader);


