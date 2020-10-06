import React, { Component } from 'react'
import fire from '../config/fire'
import DoctorLogin from './DoctorLogin'

import ViewAppoint from './ViewAppoint'


 class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user:{}
    }
  }
componentDidMount(){
  this.authListener()
}

  authListener=()=>{
    fire.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({user})
      }else{
        this.setState({user:null})
      }

    })
  }
  render() {
    return (
      <div className="App">
      {!this.state.user?<DoctorLogin/>:<ViewAppoint user={this.state.user}/>}
    </div>
    )
  }
}

export default Login;
