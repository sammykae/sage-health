import React from 'react'
import Tech from '../resources/images/news-image1.jpg'
import Tech2 from '../resources/images/news-image2.jpg'
import Tech3 from '../resources/images/news-image3.jpg'
import Doctor from '../resources/images/doctor.jpg'
import Appoint from '../resources/images/appointment-image.jpg'
import Author from '../resources/images/author-image.jpg'
function Service() {
    return (
        <div>
            
      <div className="page-header" style={{padding: '1px', textAlign: 'center'}}><h2 >Our Services</h2><hr/></div>
     <section id="news" >
          <div className="container">
               <div className="row">

                   

                    <div className="col-md-4 col-sm-6">
                        
                         <div className="news-thumb thumbnail " >
                             
                                   <img src={Tech}className="img-responsive" alt="tech"/>
                            
                              <div className="news-info">
                                   <span>TECH</span>
                                   <h3>Our Equipment</h3>
                                   <p>With our state of the art technology well trained operators, we are well prepared for you</p>
                                   <div className="author">
                                        <img src={Appoint} className="img-responsive" alt="author"/>
                                        <div className="author-info">
                                             <h5>Engineer</h5>
                                             <p>State of the art</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        
                         <div className="news-thumb thumbnail" >
                             
                                   <img src={Tech2} className="img-responsive" alt="author"/>
                             
                              <div className="news-info">
                                   <span>READY</span>
                                   <h3>Our Doctors</h3>
                                   <p>Our well trained, friendly, professional doctors are here to make your health a better one</p>
                                   <div className="author">
                                        <img src={Doctor} className="img-responsive" alt="author"/>
                                        <div className="author-info">
                                             <h5>Chief Doctor</h5>
                                             <p>At your service</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                       
                         <div className="news-thumb thumbnail" >
                             
                                   <img src={Tech3} className="img-responsive" alt="author"/>
                             
                              <div className="news-info">
                                   <span>COMFY</span>
                                   <h3>Our Ward</h3>
                                   <p>With a well ventilated, comfortable, clean wards, we aim to make your recovery a comfortable one. </p>
                                   <div className="author">
                                        <img src={Author} className="img-responsive" alt="author"/>
                                    
                                         <div className="author-info">
                                             <h5>Ward Manager</h5>
                                             <p>Your Comfort is our aim</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
          </div>
     </section>
            
        </div>
    )
}

export default Service
