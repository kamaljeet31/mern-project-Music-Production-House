import React from 'react'

const Services = () => {
  return (
    <>
      {/* -- Services-- */}
      <section className='page-section' id='services'>
        <div className='container'>
          <h2 className='text-center mt-0'>At Your Service</h2>
          <hr className='divider my-4' />
          <div className='row'>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-compact-disc text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Sturdy Chords</h3>
                <p className='text-muted mb-0'>
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-headphones-alt text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Listen </h3>
                <p className='text-muted mb-0'>
                  All dependencies are kept current to keep things fresh.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-microphone text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Ready to Glow?</h3>
                <p className='text-muted mb-0'>
                  You can use this design as is, or you can make changes!
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 text-center'>
              <div className='mt-5'>
                <i className='fas fa-4x fa-drum text-primary mb-4'></i>
                <h3 className='h4 mb-2'>Beat to the Heart</h3>
                <p className='text-muted mb-0'>
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
