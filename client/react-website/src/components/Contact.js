import React from 'react'

const Contact = () => {
  return (
    <>
      {/* -- Contact-- */}
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-12 text-center'>
            <h2 className='mt-5'>Let's Get In Touch!</h2>
            <hr className='divider my-4' />
            <p className='text-muted mb-5'>
              Ready to start your next project with us? Give us a call or send
              us an email and we will get back to you as soon as possible!
            </p>
            <div className='row justify-content-center'>
              <div className='col-lg-4 ml-auto text-center mb-5 my-2 mb-lg-0'>
                <i className='fas fa-phone fa-3x  mb-10 text-muted'></i>
                <div className='my-3'>+1 (555) 123-4567</div>
              </div>

              <div className='col-lg-4 ml-auto text-center mb-5 my-2 mb-lg-0'>
                <i className='fas fa-fax fa-3x  mb-10 text-muted'></i>
                <div className='my-3'>+1 (555) 123-4567</div>
              </div>

              <div className='col-lg-4 ml-auto text-center mb-5 my-2 mb-lg-0'>
                <i className='fas fa-envelope fa-3x mb-3 text-muted'></i>
                {/* -- Make sure to change the email address in BOTH the anchor text and the link target below!-- */}
                <a className='d-block' href='mailto:contact@yourwebsite.com'>
                  contact@yourwebsite.com
                </a>
              </div>
            </div>
          </div>
          <div className='col-lg-10 text-center contact-form justify-content-center my-5'>
            <form method='POST'>
              <h4>ENTER YOUR DETAILS</h4>
              <div className='row'>
                <div className='input50'>
                  <input
                    type='text'
                    placeholder='First Name'
                    // onChange={handleInputs}
                    name='name'
                    // value={userData.name}
                  />
                  <input
                    type='text'
                    placeholder='Email'
                    // onChange={handleInputs}
                    name='email'
                    // value={userData.email}
                  />
                  <input
                    type='text'
                    placeholder='Phone'
                    // onChange={handleInputs}
                    name='phone'
                    // value={userData.phone}
                  />
                </div>
              </div>
              <div className='row'>
                <div className='input100'>
                  <textarea
                    placeholder='Message'
                    // onChange={handleInputs}
                    name='message'
                    // value={userData.message}
                  ></textarea>
                </div>
              </div>
              <div className='form-group'>
                <input
                  className='btn btn-primary'
                  type='submit'
                  value='Send Message'
                  // onClick={contactForm}
                />
              </div>
            </form>
          </div>
        </div>
        <br />
        <br />

        <div className='row'></div>
      </div>
    </>
  )
}

export default Contact
