import React from 'react'
import Info from './Info'
import Navbar from './Navbar'
import Weather from './Weather'

const NewsHome = () => {
  return (
    <>
    <Navbar />
    <Weather />
    <Info />
    </>
  )
}

export default NewsHome