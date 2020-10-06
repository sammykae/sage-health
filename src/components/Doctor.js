import React from 'react'
import Jason from '../resources/images/team-image2.jpg'
import Miasha from '../resources/images/team-image3.jpg'
import Nate from '../resources/images/team-image1.jpg'
function Doctor() {
    return (
        <div>
                <div className="page-header" style={{padding: '1px', textAlign: 'center'}}><h2 >Our Doctors</h2><hr/></div>
          <section id="team" >
          <div className="container">
               <div className="row">

                    <div className="col-md-4 col-sm-6 thumbnail">
                        
                              <img src={Nate} className="img-responsive doctor-image" alt="nate"/>

                                   <div className="team-info">
                                        <h3>Nate Baston</h3>
                                        <p>General Principal</p>
                                        <div className="team-contact-info">
                                             <p><i> 08064866714</i></p>
                                             <p><i >natebaston@yahoo.com</i> </p>
                                        </div>
                                       
                                   

                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6 thumbnail">
                        
                              <img src={Jason} className="img-responsive doctor-image" alt="jason"/>

                                   <div className="team-info">
                                        <h3>Jason Stewart</h3>
                                        <p>Heamatologist</p>
                                        <div className="team-contact-info">
                                             <p><i></i>07035466520</p>
                                             <p><i></i> jason1@gmail.com</p>
                                        </div>
                                        
                                   

                         </div>
                    </div>

                    <div className="col-md-4 col-sm-6 thumbnail">
                        
                              <img src={Miasha} className="img-responsive doctor-image" alt="Miasha"/>

                                   <div className="team-info">
                                        <h3>Miasha Nakahara</h3>
                                        <p>Cardiology</p>
                                        <div className="team-contact-info">
                                             <p><i>09032345678</i> </p>
                                             <p><i>nakahara222@live.com</i> </p>
                                        </div>
                                       
                                   

                         </div>
                    </div>
                    
               </div>
          </div>
          </section>
            
        </div>
    )
}

export default Doctor
