import React from 'react'
import img1 from '../../Images/Photo1.svg'
export default function Middlesection() {
  return (
    <>
    <br />
    
  <div className="container white z-depth-1">
 
    <br />
    {/* message from founder section starts*/}
    <div className="row">
        
      <div className="col l6 m12 s12">
        <h4 className="left-align orange-text text-accent-3" style={{padding : "20px 20px"}}>WHY US ?</h4>
        <br />
        <p style={{padding : "30px 20px"}}>
        Blood donation is a time-consuming process in health care since it takes a long time to identify a donor who is compatible with the patient's blood group. We created  a blood donation Web app as a blood bank solution to connect the requester and the donor at any time and from any location. This application's goal is to provide information about the requested blood as well as the number of available donors in the area. The goal of this research was to create a blood management information system to help with the management of blood donor data and to make/control blood distribution in various parts of the country based on hospital needs.
          <br />
          <br />
          Creating market strategies for blood donation, lobbying, and sensitization of blood donors becomes very difficult without quick and timely access to donor records. The blood management information system has features that allow for easy access to donor records collected across the country. 
          <br />
        </p>
      </div>
      <div className="col l6 s12">
        <img src={img1} alt="rocket" style={{ width: "100%" , marginTop : "100px" }} />
        
      </div>
      
      {/* message from founder section ends*/}
      {/*about us section ends*/}
    </div>
  </div>
  
  
</>

  )
}
