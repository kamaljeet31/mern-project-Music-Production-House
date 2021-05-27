import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* - Navigation- */}
      <nav
        class='navbar navbar-expand-lg navbar-light bg-light  py-3 '
        // id='mainNav'
      >
        <div class='container'>
          <NavLink class='navbar-brand js-scroll-trigger ' to='/'>
            LOGO
          </NavLink>
          <div class='collapse navbar-collapse' id='navbarResponsive'>
            <ul class='navbar-nav ml-auto my-2 my-lg-0 d-flex'>
              <li class='nav-item'>
                <NavLink class='nav-link js-scroll-trigger' to='/about'>
                  About
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink class='nav-link js-scroll-trigger' to='/services'>
                  Services
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink class='nav-link js-scroll-trigger' to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>
              <li class='nav-item'>
                <NavLink class='nav-link js-scroll-trigger' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
