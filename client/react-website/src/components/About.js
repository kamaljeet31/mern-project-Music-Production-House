import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const About = () => {
  const history = useHistory()

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      const data = await res.json()
      console.log(`this is ${data}`)
      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error)
      history.push('/login')
    }
  }
  useEffect(() => {
    callAboutPage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <section className='page-section bg-primary' id='about'>
        <div className='container'>
          <form method='GET'></form>
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
