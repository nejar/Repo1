import React from 'react';

const User = (props) =>{
  return (<div>Name: {props.children} || Gender:{props.gender} || Age:{props.age}</div>)
}

export default User;
