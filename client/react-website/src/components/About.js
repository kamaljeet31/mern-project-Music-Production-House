import React from 'react'

const About = () => {
  return (
    <>
      <section className='page-section bg-primary' id='about'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <h2 className='text-white mt-0'>We've got what you need!</h2>
              <hr className='divider light my-4' />
              <p className='text-white-50 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, natus eos consequatur saepe ratione ipsum.
              </p>
              <a
                className='btn btn-light btn-xl js-scroll-trigger'
                href='#services'
              >
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
