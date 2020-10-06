import React, { Component } from 'react'
import ImageA from '../resources/images/appointment-image.jpg'
import fire from '../config/fire'
import Fade from 'react-reveal/Fade';
 class Appoint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            inputs:{
                name:{
                    value:'',
                    valid:false,
                    message:''
                },
                email:{
                    value:'',
                    valid:false,
                    message:''
                },
                date:{
                    value:'',
                    valid:false,
                    message:''
                },
                dept:{
                    value:'',
                    valid:false,
                    message:''
                },
                phone:{
                    value:'',
                    valid:false,
                    message:''
                },
                complain:{
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

      handleSubmit=(event)=>{
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
            break;
            
        }
    }
    const vall={...this.state.inputs}
     const input ={}
      for( let key in vall){
            input[key]=vall[key].value
      
  }
 
    if(check){
        fire.database().ref().child('appointment').push(input).catch(err=>{
            console.log(err)
        })
        const reset={...this.state.inputs}
        for( let key in reset){
            reset[key].value=''
            reset[key].valid=false
            reset[key].message=''
        }
    this.setState({
            inputs:reset,
          
            allValid:{
                valid:false,
                message:'APPOINTMENT SET'
            } 
    })

    }
    this.clear()
     
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
            <div>
               
                <div id="appointment" >
          <div className="container">
               <div className="row">

                    <div className="col-md-6 col-sm-6 thumbnail img-appoint" >
                         <img src={ImageA} className="img-responsive" alt="appoint"/>
                    </div>

                    <div className="col-md-6 col-sm-12">
                         
                         <form id="appointment-form" autoComplete="off">

                                   <h2>Make an appointment</h2>

                                   <div className="col-md-12 col-sm-12">
                                       
                                        <input type="text"  className="form-control" 
                                        id="name" name="name" value={this.state.inputs.name.value} 
                                        onChange={this.inputChange} placeholder="Full Name" required/>
                                        <Fade duration={1000} bottom  when={!this.state.inputs.name.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                                <label>{this.state.inputs.name.message}</label> 
                                            </div>
                                        </Fade>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                       
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

                                   <div className="col-md-12 col-sm-12">
                                        Select Date
                                        <input type="date" name="date" placeholder="Select Date"  
                                        value={this.state.inputs.date.value}
                                         onChange={this.inputChange} className="form-control" required/>
                                          <Fade duration={1000} bottom  when={!this.state.inputs.date.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.inputs.date.message}</label> 
                                            </div>
                                        </Fade>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                        
                                        <select className="form-control" value={this.state.inputs.dept.value} 
                                        onChange={this.inputChange} name="dept"required>
                                        <option value="">Select Department</option>
                                             <option value="General Health">General Health</option>
                                             <option value="Cardiology">Cardiology</option>
                                             <option value="Dental">Dental</option>
                                             <option value="X-ray">X-ray</option>
                                             <option value="Medical Research">Medical Research</option>
                                        </select>
                                        <Fade duration={1000} bottom  when={!this.state.inputs.dept.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.inputs.dept.message}</label> 
                                            </div>
                                        </Fade>
                                   </div>

                                   <div className="col-md-12 col-sm-12">
                                        
                                        <input type="tel" className="form-control" id="phone" 
                                        value={this.state.inputs.phone.value}onChange={this.inputChange} 
                                         name="phone" placeholder="Phone" maxLength='11' required/>
                                          <Fade duration={1000} bottom  when={!this.state.inputs.phone.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.inputs.phone.message}</label> 
                                            </div>
                                        </Fade>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                        <textarea className="form-control"  rows="5" id="complain"
                                         name="complain" value={this.state.inputs.complain.value} onChange={this.inputChange} 
                                         placeholder="Complain" required></textarea>
                                          <Fade show={false} duration={1000} bottom  when={!this.state.inputs.complain.valid}>
                                            <div className="invalid-feedback" style={{ display: 'block' }}>
                                            <label>{this.state.inputs.complain.message}</label> 
                                            </div>
                                        </Fade>
                                        </div>
                                        <div className="col-md-12 col-sm-12">
                                        <button type="submit" className="form-control" 
                                        id="cf-submit" onClick={this.handleSubmit} 
                                        name="submit">Make Appointment</button>
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
    </div>
        )
    }
}

export default Appoint
