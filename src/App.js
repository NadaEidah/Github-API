import React,{Component} from 'react';
import User from './user'
//import { BrowserRouter} from 'react-router-dom';
import Hedar from './heder';
import 'bootstrap/dist/css/bootstrap.css';
//import User1 from './user1';

import './App.css';


class App extends Component {

  state = {
    user:{  
    }
    }
    getUser =() => {
      const name = this.refs.name.value;
     fetch(`http://api.github.com/users/${name}`)
     .then(response => response.json())
     .then(data => {
       this.setState({
         user:{
          avatar_url:data.avatar_url,
           name:data.name,
           location:data.location,
           email:data.email,
           followers:data.followers,
           following:data.following,
           public_repos:data.public_repos,
         }
       })
     })
    }
    
  render() {
    const {user} =this.state;
    return (
     
      <div className="App">
         <Hedar/>
        <button  id="btn" >Play</button>
        <button onClick={this.getUser} id="btn">Search topic</button>
        <input type="text" placeholder="Enter Name in Githab" 
        ref="name"/>
        <button onClick={this.getUser} id="btn">Get User</button>
        <User user={user}/>
      </div>
      
     );
  }
}
 
export default App ;