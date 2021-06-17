import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Footer from './Footer'
import Callaction from './Callaction'

const Home = () => {
  const [userName, setUserName] = useState('')
  const [show, setShow] = useState(false)
  const userHomePage = async () => {
    try {
      const res = await fetch('/getData', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      console.log(data)
      setUserName(data.name)
      setShow(true)

      if (!res.status === 200) {
        const error = new Error(res.error)
        throw error
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    userHomePage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <header className='masthead'>
        <div className='container h-80'>
          <div className='row h-80 align-items-center justify-content-center text-center'>
            <div className='col-lg-10 align-self-end'>
              <p className='pt-5 text-uppercase text-white font-weight-bold'>
                WELCOME
              </p>
              <h1 className='text-uppercase text-white font-weight-bold'>
                {userName}
              </h1>
              <h2 className='text-uppercase text-white font-weight-bold'>
                {show ? 'Happy To See You Back' : 'We Are Music Producers'}
              </h2>
              <hr className='divider my-4' />
            </div>
            <div className='col-lg-8 align-self-baseline'>
              <p className='text-white-75 font-weight-light mb-5'>
                This Online Radio We amet consectetur adipisicing elit. Iusto,
                laboriosam voluptate voluptas natus, repellendus consectetur eum
                tenetur aliquam earum nihil, maxime cupiditate doloribus
                veritatis! Eligendi et vero quia cum quae!
              </p>
              <NavLink
                to='/about'
                className='btn btn-primary btn-xl js-scroll-trigger'
              >
                Find Out More
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      <Footer />
    </>
  )
}

export default Home
