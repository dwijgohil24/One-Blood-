import React, { useState } from "react"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
//import 
import { Link, NavLink } from "react-router-dom"


const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 180)
  })
  return (
    <>
      <header className='header'>
        
        <div className='container flex'>
        
          <div className='logo'>
            <img src='assets/logo.png' width="200px" height="50px"  alt='' />
          </div> 
          <div className='nav'>
            <ul className={sidebar ? "nav-links-sidebar" : "nav-links"} onClick={() => setSidebar(false)}>
              <li>
              <i class="fa-solid fa-house"></i> <Link to='/'>Home</Link>
              </li>
              <li>
              <i class="fa-solid fa-circle-exclamation"></i> <NavLink to='/pages'>About Us</NavLink>
              </li>
              <li>
              <i class="fa-solid fa-phone"></i> <NavLink to='/contact'>Contact</NavLink>
              </li>
              <li>
              <i class="fa-solid fa-user"></i> <Link to='/Login'>Login/Sign-Up</Link>
              </li>
            </ul>
          </div>
          <button className='navbar-items-icon' onClick={() => setSidebar(!sidebar)}>
            {sidebar ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
