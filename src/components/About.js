import React from 'react'
import Founder from '../resources/images/doctor.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
function About() {
    return (
        <div>
            <div className="page-header" style={{padding: '1px', textAlign: 'center'}}><h2 >About Us</h2><hr/></div>
        <div id="about">
          <div className="container">
               <div className="row">
                    <div className="col-md-12 col-sm-12">
                        
                              <h2 >Welcome to <i>Sage Health Center</i></h2>
                              
                                   <p>&nbsp;&nbsp;&nbsp;The Sage Health Centre was founded in the year
                                        2010 by Dr. Samuel Precious. The centre is situated at No
                                         1 Beco street, Off Babaponmile Road, Mangoro, Ikeja, 
                                         Lagos. Since its opening, the centre has successfully 
                                         carried out its duties as an health institution. 
                                         The centre has been rated as one of the best in Lagos State </p>
                                   
                                
                                    </div>
                                    </div>

                                    <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                    <h2 >The Founder - <i>Sage Health Center</i></h2>
                                   <p>&nbsp;&nbsp;&nbsp;Dr. Samuel Precious, born on the 31<sup>st</sup> of March 1990,
                                    he went to Air Force Primary School, Taqwa High School, did a two years National Diploma(ND)
                                     SLT,  Studied Medicine and came out with first class
                                    degree(Bsc) at the University of Ibadan. 
                                    He worked at the University College Hospital(UCH) for five years 
                                    before deciding to establish "Sage Health Centre"</p>
                        
                                    </div>
                                    
                                  
                                    <div className="col-md-6 col-sm-6">
                              <figure className="thumbnail" >
                                   <img src={Founder} className="img" alt="founder" />
                                   <figcaption>
                                        <h3>Dr. Samuel Precious</h3>
                                        <p>Founder</p>
                                   </figcaption>
                              </figure>
                              </div>
                              </div>
                         
                    </div>
                    
               </div>
         
   
     </div>
    )
}

export default About
