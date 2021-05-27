import React from 'react'

const Masthead = () => {
  return (
    <>
      {/* -- Masthead-- */}
      <header class='masthead'>
        <div class='container h-80'>
          <div class='row h-80 align-items-center justify-content-center text-center'>
            <div class='col-lg-10 align-self-end'>
              <h1 class='text-uppercase text-white font-weight-bold'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
                neque!
              </h1>
              <hr class='divider my-4' />
            </div>
            <div class='col-lg-8 align-self-baseline'>
              <p class='text-white-75 font-weight-light mb-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                laboriosam voluptate voluptas natus, repellendus consectetur eum
                tenetur aliquam earum nihil, maxime cupiditate doloribus
                veritatis! Eligendi et vero quia cum quae!
              </p>
              <a class='btn btn-primary btn-xl js-scroll-trigger' href='#about'>
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
