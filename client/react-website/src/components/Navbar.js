import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../App'

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext)

  const RenderMenu = () => {
    if (state) {
      return (
        <>
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
            <NavLink className='nav-link js-scroll-trigger' to='/logout'>
              Logout
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <>
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
        </>
      )
    }
  }
  return (
    <>
      {/* - Navigation- */}
      <nav
        className='navbar navbar-expand-lg navbar-light bg-light  py-3 '
        // id='mainNav'
      >
        <div className='container'>
          <NavLink className='navbar-brand js-scroll-trigger ' to='/'>
            <i className='fas fa-guitar fa-2x'></i>
          </NavLink>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto my-2 my-lg-0 d-flex'>
              <RenderMenu />
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
