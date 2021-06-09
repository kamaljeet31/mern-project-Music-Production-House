import React from 'react'

const Masthead = () => {
  return (
    <>
      {/* -- Masthead-- */}
      <header className='masthead'>
        <div className='container h-80'>
          <div className='row h-80 align-items-center justify-content-center text-center'>
            <div className='col-lg-10 align-self-end'>
              <h1 className='text-uppercase text-white font-weight-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                neque!
              </h1>
              <hr className='divider my-4' />
            </div>
            <div className='col-lg-8 align-self-baseline'>
              <p className='text-white-75 font-weight-light mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                laboriosam voluptate voluptas natus, repellendus consectetur eum
                tenetur aliquam earum nihil, maxime cupiditate doloribus
                veritatis! Eligendi et vero quia cum quae!
              </p>
              <a
                className='btn btn-primary btn-xl js-scroll-trigger'
                href='#about'
              >
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Masthead
