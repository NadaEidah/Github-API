import React, {Component} from 'react';

class user extends Component {
    state = {  }
    render() { 
        const {user} = this.props
        return ( 
            <div>
                <h5>User Dirals</h5>
                <img src={user.avatar_url}></img>
                <h5>Use   Name :{user.name}</h5>
                <h5>User Location:{user.location}</h5>
                <h5>User Followers:{user.followers}</h5>
                <h5>User Following:{user.following}</h5>
                <h5>User Repositories:{user.public_repos}</h5>
            </div>
         );
    }
}
 
export default user ;