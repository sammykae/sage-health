import React from 'react'

function Footer() {
    return (
        <footer>
       <hr/>
       <hr/>
        
        <div className="container">
             <div className="row">

                  <div className="col-md-6 col-sm-6">
                       <div className="footer-thumb"> 
                            <h4 >Contact Info</h4>
                            <p>You can visit us at our office at: No 1 Beco street, Off Babaponmile Road, Mangoro, Ikeja, Lagos.</p>

                            <div className="contact-info">
                                 <p><i>Phone: 08024153500 &nbsp; 07064866714</i></p>
                                 <p><i >Email: sammykay301@yahoo.com</i> </p>
                            </div>
                       </div>
                  </div>

                  

                  <div className="col-md-6 col-sm-6"> 
                       <div className="footer-thumb">
                            <div className="opening-hours">
                                 <h4 >Opening Hours</h4>
                                 <p>Monday - Friday <span>06:00 AM - 10:00 PM</span></p>
                                 <p>Saturday <span>09:00 AM - 08:00 PM</span></p>
                                 <p>Sunday <span>10:00 AM - 08:00 PM    </span></p>
                                 <span></span>
                                  <p>Copyright &copy; 2020</p>
                            </div> 

   
                       </div>
                  </div>

                  
             </div>
        </div>
   </footer>
    )
}

export default Footer
