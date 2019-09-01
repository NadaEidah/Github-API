import React, {Component} from 'react';

class user1 extends Component {
    state = {  }
    render() { 
        const {user} = this.props;
        const user1= user-repos1;
        const user2= user-repos2;

        return ( 
            <div>  
            <input type="text" placeholder="Enter Name in Githab" 
            ref="name"/>
            <button onClick={this.user} id="btn">Get User1</button>
            <h5>user dirals</h5>
                <img src={user.avatar_url}></img>
                <h5>user name1{user.name}</h5>
                <h5>user repos1{user.public_repos}</h5>


            <input type="text" placeholder="Enter Name in Githab" 
            ref="name"/>
            <button onClick={this.user1} id="btn">Get User2</button>
            <h5>user dirals</h5>
                <img src={user1.avatar_url}></img>
                <h5>user name2{user1.name}</h5>
                <h5>user repos2{user1.public_repos}</h5>
            <div>
            {user1>user2
            <h1>"uaer is winner"</h1>
           

           user1<user2
            <h1>uaer1 is winner</h1>
            }  
              </div>  
            </div>
         );
    }
}
 
export default user1 ;

