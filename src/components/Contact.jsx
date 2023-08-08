import React from 'react'
import { RiPhoneLine, RiMailLine, RiDownload2Fill } from 'react-icons/ri'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { InView } from 'react-intersection-observer';
import {ContactMe } from './common/ContactMe'

export const Contact = () => {

  const fadeToRightAnimation ={
    offScreen: {opacity: 0, x: -100},
    onScreen: {
      opacity: 1,
      x: 0,
      viewport: {once:false, amount:0.3},
    },
  }

  const fadeToLeftAnimation ={
    offScreen: {opacity: 0, x: 100},
    onScreen: {
      opacity: 1,
      x: 0,
      viewport: {once:false, amount:0.3},
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

  const infos = [
    {
      id: 1,
      label: 'Call Me',
      data: '+63-926-790-0736',
      link: 'tel:+63-926-790-0736',
      icon: 'RiPhoneLine',
    },
    {
      id: 2,
      label: 'Email Me',
      data: 'raymonddavidtuazon@gmail.com',
      link: 'mailto:raymonddavidtuazon@gmail.com',
      icon: 'RiMailLine',
    }
  ]

  const components = {
    RiPhoneLine,
    RiMailLine,
  }

  const autoPlay = (item) => {
    if(item === true) {
      return true
    }else{
      return false
    }
  }

  return (
    <div name='contact' className='overflow-hidden pt-20 pb-4 px-4 lg:px-6 bg-white dark:bg-semiDark max-w-screen-xl mx-auto'>
      <div className='flex flex-col lg:flex-row lg:space-x-16 mb-20'>
        <div className='w-full lg:w-1/2 mb-12 lg:mb-0'>
           <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                <motion.h1
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  variants={fadeToRightAnimation}
                  transition={{duration:0.4}}
                  className='text-dark dark:text-white text-center md:text-start font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mb-8'>
                    <Typewriter
                      options={{
                        autoStart: autoPlay(inView),
                        loop: true,
                        delay: 80,
                        pauseFor: 5000,
                        strings: [
                          "Please check<br />My <span class='text-darkPrimary dark:text-primary'>Awesome CV</span><br />Download <a  href='./resume/Resume_Raymond-Tuazon.pdf' download target='_blank' class='text-darkPrimary dark:text-primary underline underline-offset-4 duration-100'>Here</a>!",
                          "Let's Work Together<br />and I will Help You<br />By My <span class='text-darkPrimary dark:text-primary'>Best!</span>",
                          "Feel Free To<br /><span class='text-darkPrimary dark:text-primary'>Email</span> or<br />Drop a <span class='text-darkPrimary dark:text-primary'>Call</span>.",
                        ]
                    }} />
                </motion.h1>
              </div>
            )}
          </InView>
          <div className='flex justify-center md:justify-start'>
            {/* <motion.a
              href='./resume/Resume_Raymond-Tuazon.pdf' download={true} target='_blank'
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={fadeToRightAnimation}
              transition={{duration:0.4, delay: 0.05}}
              className="flex flex-row items-center px-6 py-1 bg-darkPrimary dark:bg-primary outline-none text-dark font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200">
                Download my CV <RiDownload2Fill className='ml-2' size={20} />
            </motion.a> */}
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={fadeToRightAnimation}
              viewport={{once:false, amount:0.3}}
              transition={{duration:0.4, delay: 0.05}}
              >
                <ContactMe />
            </motion.div>

          </div>
        </div>
        <div className='grow'>
          <motion.h4
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToLeftAnimation}
            transition={{duration:0.4}}
            className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-8'>
              Contact Information
          </motion.h4>
          {
            infos.map((info, i) => {
              const { id, label, link, data, icon } = info
              const Icon = components[`${icon}`]
              return (
                <motion.a
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  variants={fadeToLeftAnimation}
                  transition={{duration:0.4, delay:  i * 0.09}}
                  href={link} key={id} className='flex flex-row items-center group mb-5'>
                  <div>
                    <Icon size={45} className='text-darkPrimary dark:text-primary' />
                  </div>
                  <div className='ml-3'>
                    <p className='text-dark dark:text-white max-w-sm'>{label}</p>
                    <p className='text-dark dark:text-white dark:group-hover:text-primary font-signature text-xl break-words'>{data}</p>
                  </div>
                </motion.a>
              )
            })
          }
        </div>
      </div>
      <div className='flex flex-col md:flex-row items-center md:space-x-12 border-t-2 pt-4 border-neutral-600'>
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
