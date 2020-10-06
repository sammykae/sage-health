import React, { Component } from 'react'
import Logo from '../resources/images/logo.png'

import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline'

import {NavLink} from 'react-router-dom'



 class Header extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            navCollapsed: false
         }
     }
     onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
      }
    
     
    render() {
        return (
            <div >  
            
            <button
            aria-expanded='false'
            className='navbar-toggle collapsed'
            onClick={this.onToggleNav}
            type='button'
            >
           <ViewHeadlineIcon style={{ color: '#a5c422' }}/>
          </button>
          <div
          className={(this.state.navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
          >
               <ul
           
            className='navi'
           
            >
                
               <div style={{flexGrow:1}} className="heading">
                        <div >
                        <img src={Logo} alt="ICN" width="50" height="50"/>
                        
                   <span><i className="fa">SAGE HEALTH CENTER</i></span>
                        </div>
                    </div>
    
                    <li >
                    <NavLink to ="/">
                    <div href='/' className='nav-button' color='inherit'>Home</div>
                    </NavLink>
</li>
<li>
                    <NavLink to ="/about">
                   
                    <div   className='nav-button' color='inherit'>About</div>
                    </NavLink>
</li>
<li>
                    <NavLink to ="/doctor">
                    
                    <div  className='nav-button' color='inherit'>Doctors</div>
                    </NavLink>
</li>
<li>
                    <NavLink to ="/service"> 
                    
                    <div  className='nav-button' color='inherit'>Services</div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to ="/appoint"> 
                    
                    <div  className='nav-button' color='inherit'>Appointment</div>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to ="/doctor_login"> 
                    
                    <div  className='nav-button' color='inherit'>Login</div>
                    </NavLink>
                   
                </li>

                    </ul>

          </div>
                 
            
              
               
            
            
            </div>
        )
    }
}

export default Header
