import React from 'react'
import { NavLink } from 'react-router-dom'
function Signup() {
  return (
    <>
      <div class='signup-form'>
        <form method='post'>
          <h2>Sign Up</h2>
          <hr className='divider my-4' />

          <p class='text-center'>
            Please fill in this form to create an account!
          </p>
          <hr />
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <span class='fa fa-user'></span>
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                name='username'
                placeholder='Username'
                required='required'
              />
            </div>
          </div>
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <i class='fa fa-paper-plane'></i>
                </span>
              </div>
              <input
                type='email'
                class='form-control'
                name='email'
                placeholder='Email Address'
                required='required'
              />
            </div>
          </div>
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <i class='fa fa-phone'></i>
                </span>
              </div>
              <input
                type='number'
                class='form-control'
                name='mobile'
                placeholder='Phone Number'
                required='required'
              />
            </div>
          </div>
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <i class='fa fa-briefcase'></i>
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                name='work'
                placeholder='Your Profession'
                required='required'
              />
            </div>
          </div>
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <i class='fa fa-lock'></i>
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                name='password'
                placeholder='Password'
                required='required'
              />
            </div>
          </div>
          <div class='form-group'>
            <div class='input-group'>
              <div class='input-group-prepend'>
                <span class='input-group-text'>
                  <i class='fa fa-lock'></i>
                  <i class='fa fa-check'></i>
                </span>
              </div>
              <input
                type='text'
                class='form-control'
                name='cpassword'
                placeholder='Confirm Password'
                required='required'
              />
            </div>
          </div>
        </form>

        <div class='form-group'>
          <label class='form-check-label ml-5'>
            <input type='checkbox' required='required' /> I accept the
            <span> </span>
            <NavLink to='/login'>Terms of Use</NavLink> <span> </span> &amp;{' '}
            <span> </span>
            <NavLink to='/login'>Privacy Policy</NavLink>
          </label>
        </div>
        <div class='form-group'>
          <button type='submit' class='btn btn-primary login-btn btn-block'>
            Sign Up
          </button>
        </div>

        <div class='text-center'>
          Already have an account? <NavLink to='/login'>Login here</NavLink>
        </div>
      </div>
    </>
  )
}

export default Signup
