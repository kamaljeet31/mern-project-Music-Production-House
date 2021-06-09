import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      {/* - Navigation- */}
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light  py-3 '
        // id='mainNav'
      >
        <div className='container'>
          <NavLink className='navbar-brand js-scroll-trigger ' to='/'>
            LOGO
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto my-2 my-lg-0 d-flex'>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/services'>
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/contact'>
                  Contact
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/signup'>
                  Signup
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link js-scroll-trigger' to='/logout'>
                  Logout
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
