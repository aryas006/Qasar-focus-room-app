import React from 'react'
import NavbarMain from "../Navbar"
import '../homepage/homepage.css'
import { Button } from "@material-tailwind/react";
import pages from './Page.png'

export const Homepage = () => {
  return (
    <>
      <div className="nav-main absolute top-10 left-[10rem] md:left-[40rem] ">
        <NavbarMain />
      </div>
      <div className='container-main'>
        <section className='hero h-screen flex flex-col'>
          <div className="title">
            <h1 className="title-main">Work at the speed
              of thought</h1>
            <p className='m-10 text-center max-w-lg'> In the quiet dance of dawn, productivity awakens, casting shadows of accomplishment across the canvas of a new day.</p>
            <Button className=''>Get Started</Button>
          </div>
         
        </section>
        <section >
          <h1 className='text-9xl w-screen text-white text-center m-10'>Features</h1>
          <img src={pages} alt="" className='m-20 h-1/5'/>
        </section>
      </div>
    </>
  )
}