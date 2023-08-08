import React from 'react'
// import Messages from '../assets/js/testimonials'
import {  } from 'react-icons/ri'
import { motion } from "framer-motion"

export const SendMessage = () => {

  const fadeToRightAnimation ={
    offScreen: {opacity: 0, x: -100},
    onScreen: {
      opacity: 1,
      x: 0,
    },
  }
  const fadeToLeftAnimation ={
    offScreen: {opacity: 0, x: 100},
    onScreen: {
      opacity: 1,
      x: 0,
    },
  }

  const fadeToTopAnimation ={
    offScreen: {opacity: 0, y: 20},
    onScreen: {
      opacity: 1,
      y: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  return (
    <div className='md:h-screen pt-20 pb-4 px-4 lg:px-6 relative'>
      <div className='flex flx-row items-center h-[95%]'>
        <div className='flex flex-col lg:flex-row mx-auto max-w-screen lg:max-w-screen-xl'>
          <div className='flex items-center w-full lg:w-1/2'>
            <div className=''>
              <motion.h1
                initial={"offScreen"}
                whileInView={"onScreen"}
                variants={fadeToRightAnimation}
                transition={{duration:0.4, delay: 0.3}}
                className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mx-auto mb-3'>
                  Please <br /><span className='text-darkPrimary dark:text-primary'>Contact</span> Me.
              </motion.h1>
              <motion.p
                initial={"offScreen"}
                whileInView={"onScreen"}
                variants={fadeToRightAnimation}
                transition={{duration:0.4, delay: 0.5}}
                className='text-semiDark dark:text-darkenWhite text-lg max-w-sm mx-auto lg:mx-0 mb-12'>
                  I enjoy designing and building cool websites. If you are a looking a web developer to hire, you can get in touch with me here.
                  <br />Thank you! 
              </motion.p>        
            </div>
          </div>
          <motion.form
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToLeftAnimation}
            transition={{duration:0.4, delay: 0.3}}
            action="https://getform.io/f/9f391abd-2b11-4906-91e8-3fda4c619ec5"
            method="POST"
            encType="multipart/form-data"
            className="w-full lg:w-1/2 ml-auto bg-darkenWhite dark:bg-dark shadow-md p-4 lg:p-6">
            <div className="flex flex-wrap">
              <div className="w-full px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Contact Number</label>
                  <input
                    name="contact"
                    type="number"
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full px-3 mb-5">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="3" className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className='w-full px-3 mb-5 grid justify-items-end'>
                  <button className='px-6 py-2 bg-darkPrimary dark:bg-primary text-dark font-semibold'>Send Message</button>
                </div>
            </div>
        </motion.form>
        </div>
      </div>
      <div className='px-4 lg:px-6 mt-12 md:mt-0 md:absolute md:inset-x-0 md:bottom-0 mx-auto max-w-screen lg:max-w-screen-xl pb-4 flex flex-col md:flex-row items-center md:space-x-12 border-t-2 pt-4 border-neutral-600'>
          <motion.h3
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToTopAnimation}
            transition={{duration:0.4}}
            className='text-dark dark:text-white font-signature text-2xl'><span className='text-darkPrimary dark:text-primary'>RD</span>Tuazon</motion.h3>
          <motion.p
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToTopAnimation}
            transition={{duration:0.4, delay: 0.1}}
            className='text-dark dark:text-darkenWhite'>	&copy;Copyright 2022. All Rights Reserved.</motion.p>
      </div>
    </div>
  )
}
