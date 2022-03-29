import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';


class UserHeader extends React.Component {

  componentDidMount(){
      this.props.fetchUser(this.props.userId);
  }

  render(){
    const user=this.props.users.find(user=>user.id===this.props.userId);
    if (!user){
      return null;
    }
    return (
      // Call action creator inside here to get appropriate user
      <div className="header">{user.name}</div>
    );
  }

}

const mapStateToProps=(state)=>{
  return { users: state.users }
}

// Must call an action creator to fetch the user to show on the screen.
export default connect(mapStateToProps,{ fetchUser})(UserHeader);


