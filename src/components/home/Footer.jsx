
import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <footer>
      
        <div className='container grid1'>
          
          <div className='box'>
            <img src='./assets/logo1.png' width="100px" alt='' />
            <p>Making blood Donation Easier</p>
            <div className='SocailIcon'>
              <i className='fab fa-facebook-f facebook'></i>
              <i className='fab fa-instagram instagram'></i>
              <i className='fab fa-twitter twitter'></i>
              <i className='fab fa-youtube youtube'></i>
            </div>
          </div>

          <div className='box'>
            <h2>Quick Links</h2>
            <ul>
              <li>
              <Link to='/'>Home</Link></li>
              <li>
              <Link to='/About Us'>About</Link></li>
              <li>
              <Link to='/Contact'>Contact</Link></li>
              <li>
              <Link to='/Login'>Login</Link></li>
            </ul>
          </div>


          <div className='box'>
            <h2>Get in Touch</h2>
            
            <div className='icon'>
              <i class='fa-solid fa-location-dot'></i>
              <label>Location:27 Division St, New York, NY 10002, USA</label>
            </div>
            <div className='icon'>
              <i class='fa fa-phone'></i>
              <label>Phone:+44 014799584</label>
            </div>
            <div className='icon'>
              <i class='fa fa-envelope'></i>
              <label>Email:oneblood@gmail.com</label>
            </div>
          </div>
        </div>
        <div className='legal container'>
          
          <label>
            Developed with <i class="fa-solid fa-heart"></i> By Team <span>CosThetaZ</span>
          </label>
        </div>
      </footer>
    </>
  )
}

export default Footer
