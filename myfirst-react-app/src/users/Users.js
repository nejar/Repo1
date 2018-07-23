import React, {Component} from 'react';
import User from './User';

class Users extends Component {

// setting initial state
state = {
  users:[
    {name:"john",age:20,gender:"male"},
    {name:"kiran",age:22,gender:"female"}
  ],
  title:"USers List"
}

//function
decreaseAge=()=>{
  const newState = this.state.users.map((user)=>{
    const tempUSer = user;
    tempUSer.age -= 10;
    if(tempUSer.age<0){
      tempUSer.age = 0;
      alert("age cant be less than 0");
    }
    if(tempUSer.gender =="male"){

      alert(tempUSer.name +' you are male');
    }
    return tempUSer;
  });
  this.setState({
    newState
  });
}

  render() {
    return(<div>
      <button onClick={this.decreaseAge}> decrease Age</button>

<h1>{this.state.title}</h1>
{
  this.state.users.map((user)=>{
    return <User age={user.age} gender={user.gender}>{user.name}</User>
  })
}




      </div>)
  }
}
export default Users;
