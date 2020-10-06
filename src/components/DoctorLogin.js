import React, { Component } from 'react'
import fire from '../config/fire'
import ImageA from '../resources/images/appointment-image.jpg'
import Fade from 'react-reveal/Fade';

 class DoctorLogin extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            inputs:{
                email:{
                    value:'',
                    valid:false,
                    message:''
                },
                password:{
                    value:'',
                    valid:false,
                    message:''
                }
            }
            ,
            allValid:{
                valid:false,
                message:''
        }
         }
     }
     

     inputChange=(event)=>{
        let inputs = {...this.state.inputs}
        inputs[event.target.name].value = event.target.value 
        
        if(event.target.value!==""){
            if(event.target.name==='email'){
            
            if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test((event.target.value)))) {
            inputs[event.target.name].valid=false
            inputs[event.target.name].message='Email Not Valid'
            
            }else{
                inputs[event.target.name].valid=true
                inputs[event.target.name].message=''
            }
        }else   {
            inputs[event.target.name].valid=true
            inputs[event.target.name].message=''
        }
                            
        }  else{
                inputs[event.target.name].valid=false
                inputs[event.target.name].message='Please fill this field'
        }
        this.setState({inputs})
            
      }



      handleLogin=(event)=>{
        
        event.preventDefault()
        const val={...this.state.inputs}
        let check=true
    for( let key in val){
              if(!val[key].valid){
            check=false
            this.setState({allValid:{
                valid:check,
                message:'One or more fields are empty or not valid'
            }})
            this.clear()
            break;
            
        }
    }
    if(check){
        
        fire.auth().signInWithEmailAndPassword(this.state.inputs.email.value,this.state.inputs.password.value)
        .then((user)=>{
        }).catch((err)=>{
            var errorMessage=''
            if(err.code==="auth/user-not-found"){
                 errorMessage = 'Email Not Found';
            }else{
                 errorMessage = err.message;
            }
            
            this.setState({
                allValid:{
                                valid:false,
                                message: errorMessage
                            } 
            })
            this.clear()
        })
    }
    }
    clear=()=>{
        setTimeout(()=>{
            this.setState({
                allValid:{
                    valid:false,
                    message:''
                }
            })
        },2000)
    }
      

    render() {
        return (
            <div id="appointment">
                
        <div className="container">
            <div className="row">

                <div className="col-md-6 col-sm-6 image-login">
                    <img src={ImageA} className="img-responsive " height='400px' width='auto' alt="doctor"/>
                </div>

                <div className="col-md-6 col-sm-12 login-form">
                
                    <form id="appointment-form" autoComplete='off'>
                       
                    <div className="col-md-12 col-sm-12 col-xs-12"><h2>DOCTOR LOGIN</h2></div><br/>

                        <div className="col-md-12 col-sm-12 col-xs-12">

                           
                        <input type="email"  className="form-control" 
                                        id="email" name="email" 
                                        value={this.state.inputs.email.value}onChange={this.inputChange} 
                                         placeholder="Your Email" data-rule="email"  required/>
                                          <Fade duration={1000} bottom  when={!this.state.inputs.email.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.inputs.email.message}</label> 
                                            </div>
                                        </Fade>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                           
                            <input type="password"
                             value={this.state.inputs.password.value} 
                             onChange={this.inputChange} className="form-control" 
                             id="password" name="password" placeholder="Enter Password" required/>
                        </div>

                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <button type="submit" onClick={this.handleLogin} className="form-control" id="cf-submit" name="submit">Submit Button</button>

                            <Fade show={false} duration={1000} bottom  when={!this.state.allValid.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.allValid.message}</label> 
                                            </div>
                                        </Fade>
                        </div>
                        

                    </form>


                </div>

            </div>

        </div>
                
     </div>
        )
    }
}

export default DoctorLogin
