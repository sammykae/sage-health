
import React, { Component } from 'react'
import fire from '../config/fire'
import Table from './Table'



 class ViewAppoint extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            contactObject:[],
             dept:''
        }
    }
    
    componentDidMount(){
    

fire.database().ref('store').on('value',(snapshot)=> {
  const user=this.props.user.email
  
  let dept=''
    if(snapshot.val()!=null){
         const val=snapshot.val()
         
         Object.keys(val).map((id)=>{
            if(val[id].email===user){
                dept= val[id].department
            }
        })
        
         
    }
     fire.database().ref('appointment').on('value',(snapshot)=> {
  
  if(snapshot.val()!=null){
       const vall=snapshot.val()
       const data=Object.keys(vall).map(id=>{ 
        if(vall[id].dept===dept){
            return {...vall[id]}
        }
        else{
            return null
        }
      }
      
      )
      
      const dat= Object.keys(data).filter(id=>
        data[id]!==null
      ).map(id=>({...data[id]}))

     
   this.setState({contactObject:dat, dept})
  }
 
})
   
  })

    }
      handleLogout=()=>{
        fire.auth().signOut()
    }

    render() {
        return (
            <div className='view-appoint'>
               
                <button className='btn btn-danger logout' onClick={this.handleLogout}>LOGOUT</button><br/>

               <Table dept={this.state.dept} data={this.state.contactObject}/>
            </div>
        )
    }
}

export default ViewAppoint
