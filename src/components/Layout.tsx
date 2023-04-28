import React, { ReactComponentElement } from 'react'
import Nav from './Nav'
import Footer from './Footer'

function Layout({children}: any) {
  return (
    <>
    <Nav/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout