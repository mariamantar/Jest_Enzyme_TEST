const Enzyme = require('enzyme');
// this is where we reference the adapter package we installed
// earlier
const EnzymeAdapter = require('enzyme-adapter-react-16');
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });



import React from 'react';
class Login extends React.Component {
constructor() {
  super()
  this.state = {
   username: '',
   password: ''
  }
 }
handleInputChange = (event) => {
  this.setState({
   [event.target.name]: event.target.value
  })
 }

 render() {
  return (
   <form className='login'>
     <label>Username</label>
     <input id='email' onChange={this.handleInputChange} name='email' type='text' />
     <label>Password</label>
     <input id='password' onChange={this.handleInputChange} name='password' type='password' />
     <button>Submit</button>
   </form>
  )
 }
}
export default Login;
