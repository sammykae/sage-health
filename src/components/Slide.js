
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider1 from'../resources/images/slider1.jpg'
import Slider2 from '../resources/images/slider2.jpg'
import Slider3 from'../resources/images/back.jpg'


import {Link} from 'react-router-dom'
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const fadeProperties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: false,
    ease:'ease-in',
    //prevArrow: <div style={{width: "30px", marginRight: "-30px",  color:'#fff',cursor:'pointer',paddingTop: '100px',paddingBottom: '100px'}}><ArrowBackIosIcon fontSize='large'/></div> ,
   // nextArrow: <div style={{width: "30px", marginLeft: "-30px", color:'#fff', cursor:'pointer',paddingTop: '100px',paddingBottom: '100px'}}><ArrowForwardIosIcon fontSize='large'/></div>
  }

function Slide() {
    return (
      <div className='slide'>
        <Fade {...fadeProperties}>
     
     <div className="each-fade ">
            <div style={{'backgroundImage': `url(${Slider1})`}}>
              <div>
              <p className='top'>LET'S MAKE YOUR LIFE HEALTHIER</p>
              <h1  className='title'>Little Of What We Offer </h1><br className='hidden'/>
              <Link to ="/service">
              <div href="/" className="section-btn btn btn-default point ">Services</div>
                  </Link>
              </div>
            </div>
          </div>
          <div className="each-fade ">
        
            <div style={{'backgroundImage': `url(${Slider2})`}}>
            <div>
              <p className='top'>SAGE HEALTH CENTRE</p>
              <h1 className='title'>Get To Know Us</h1><br className='hidden'/>
              <Link to ="/about">
              <div href="/" className="section-btn btn btn-default btn-gray point">About</div>
                  </Link>
              </div>
              
            </div>
            
          </div>
          <div className="each-fade ">
         
            <div style={{'backgroundImage': `url(${Slider3})`}}>
            <div>
              <p className='top'>WE ARE WAITING FOR YOU</p>
              <h1  className='title'>Your Health Benefit Awaits</h1><br className='hidden'/>
                <Link to ="/appoint">
                <div className="section-btn btn btn-default btn-blue point" href="/">Appointment</div>
                  </Link>

              </div>
            </div>
          </div>
          
    </Fade>
    </div>
       
      
    
    )
}

export default Slide


 