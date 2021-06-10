import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
function Signup() {
  const history = useHistory()
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    cpassword: '',
  })

  let name, value
  const handleInputs = (e) => {
    console.log(e)
    name = e.target.name
    value = e.target.value

    setUser({ ...user, [name]: value })
  }

  const PostData = async (e) => {
    e.preventDefault()

    const { name, email, phone, work, password, cpassword } = user

    const res = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    })
    const data = await res.json()

    if (data.status === 422 || !data) {
      window.alert('invalid Registration')
      console.log('invalid Registration')
    } else {
      window.alert('Registration Successful')
      console.log('Registration Successful')

      history.push('/login')
    }
  }
  return (
    <>
      <div className='signup-form'>
        <form method='POST'>
          <h2>Sign Up</h2>
          <hr className='divider my-4' />

          <p className='text-center'>
            Please fill in this form to create an account!
          </p>
          <hr />
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <span className='fa fa-user'></span>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder='Username'
                required='required'
                autoComplete='off'
                value={user.name}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-paper-plane'></i>
                </span>
              </div>
              <input
                className='form-control'
                name='email'
                placeholder='Email Address'
                required='required'
                autoComplete='off'
                value={user.email}
                onChange={handleInputs}
                type='email'
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-phone'></i>
                </span>
              </div>
              <input
                type='number'
                className='form-control'
                name='phone'
                placeholder='Phone Number'
                required='required'
                autoComplete='off'
                value={user.phone}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-briefcase'></i>
                </span>
              </div>
              <input
                type='text'
                className='form-control'
                name='work'
                placeholder='Your Profession'
                required='required'
                autoComplete='off'
                value={user.work}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
                </span>
              </div>
              <input
                type='password'
                className='form-control'
                name='password'
                placeholder='Password'
                required='required'
                autoComplete='off'
                value={user.password}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <div className='input-group-prepend'>
                <span className='input-group-text'>
                  <i className='fa fa-lock'></i>
                  {/* <i className='fa fa-check'></i> */}
                </span>
              </div>
              <input
                type='password'
                className='form-control'
                name='cpassword'
                placeholder='Confirm Password'
                required='required'
                autoComplete='off'
                value={user.cpassword}
                onChange={handleInputs}
              />
            </div>
          </div>
        </form>

        <div className='form-group'>
          <label className='form-check-label ml-5'>
            <input type='checkbox' required='required' /> I accept the
            <span> </span>
            <NavLink to='/login'>Terms of Use</NavLink> <span> </span> &amp;
            <span> </span>
            <NavLink to='/login'>Privacy Policy</NavLink>
          </label>
        </div>
        <div className='form-group'>
          <button
            type='submit'
            name='signup'
            className='btn btn-primary login-btn btn-block'
            onClick={PostData}
          >
            Sign Up
          </button>
        </div>

        <div className='text-center'>
          Already have an account? <NavLink to='/login'>Login here</NavLink>
        </div>
      </div>
    </>
  )
}

export default Signup
