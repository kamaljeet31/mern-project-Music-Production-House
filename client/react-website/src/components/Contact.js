import React from 'react'

const Contact = () => {
  return (
    <>
      {/* -- Contact-- */}
      <section class='page-section primary-bg-' id='contact'>
        <div class='container'>
          <div class='row justify-content-center'>
            <div class='col-lg-12 text-center'>
              <h2 class='mt-0'>Let's Get In Touch!</h2>
              <hr class='divider my-4' />
              <p class='text-muted mb-5'>
                Ready to start your next project with us? Give us a call or send
                us an email and we will get back to you as soon as possible!
              </p>
            </div>
            <div className='col-lg-8 text-center contact-form justify-content-center'>
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
            <div class='col-lg-4 ml-auto text-center mb-5 my-5 mb-lg-0'>
              <i class='fas fa-phone fa-3x  mb-10 text-muted'></i>
              <div>+1 (555) 123-4567</div>
              <br />
              <br />
              <br />
              <i class='fas fa-envelope fa-3x mb-3 text-muted'></i>
              {/* -- Make sure to change the email address in BOTH the anchor text and the link target below!-- */}
              <a class='d-block' href='mailto:contact@yourwebsite.com'>
                contact@yourwebsite.com
              </a>
            </div>
          </div>
          <br />
          <br />

          <div class='row'></div>
        </div>
      </section>
    </>
  )
}

export default Contact
