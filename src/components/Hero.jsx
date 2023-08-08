import React from 'react'
import DarkBg from '../assets/img/dark-bg.png'
import LightBg from '../assets/img/light-bg.png'
import HeroImage from '../assets/img/hero-laptop.png'
import HeroBg from '../assets/img/hero-bg.png'
import { RiDownload2Fill, RiSettings2Fill } from 'react-icons/ri'
import Typewriter from 'typewriter-effect';
import { motion } from "framer-motion"
import { Link } from 'react-scroll'
import { InView } from 'react-intersection-observer';
import {ContactMe } from './common/ContactMe'

export const Hero = () => {

  const fadeToRightAnimation ={
    offScreen: {opacity: 0, x: -100},
    onScreen: {
      opacity: 1,
      x: 0,
    },
  }

  const fadeToLeftAnimation ={
    offScreen: {opacity: 0, rotateY: -180},
    onScreen: {
      opacity: 1,
      rotateY: 0, transition: { duration: 0.5, delay: 1 }
    },
  }

  const zoomAnimation ={
    offScreen: {opacity: 0, scale: 0.8},
    onScreen: {opacity: 1, scale: 1},
  }

  const autoPlay = (item) => {
    if(item === true) {
      return true
    }else{
      return false
    }
  }

  return (
    <div name='home' className='md:h-screen w-full py-28 px-4 lg:px-6 overflow-hidden'>
      <div className='flex flex-col lg:flex-row-reverse items-center h-full mx-auto max-w-screen-xl'>
        <div className='flex w-fulls flex-col justify-center relative'>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToLeftAnimation}
            viewport= {{once:false}}
            className='overflow-hidden x-auto relative h-[320px] w-[320px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] group'>
            <img
            src={DarkBg}
            alt="Raymond Tuazon"
            className='absolute hero-dark p-2' />
            <img
            src={LightBg}
            alt="Raymond Tuazon"
            className='absolute hero-light dark:hidden p-2' />
            <div
              className='bg-white dark:bg-semiDark h-[50%] w-full absolute left-0 top-[25%] rotating'>
            </div>
            <img
            src={HeroBg}
            alt="Raymond Tuazon"
            className='absolute p-6'/>
            <img
            src={HeroImage}
            alt="Raymond Tuazon"
            className='absolute bottom-0 right-0 w-60 md:w-80 lg:w-[400px]'/>
            <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                <h5 className='text-xs md:text-sm text-stone-200 text-code absolute
                  w-[115px] md:w-[150px] lg:w-[200px]
                  left-[188px] md:left-[275px] lg:left-[380px]
                  top-[125px] md:top-[190px] lg:top-[270px]
                '>
                  <Typewriter
                      options={{
                        autoStart: autoPlay(inView),
                        loop: true,
                        delay: 120,
                        pauseFor: 5000,
                        strings: [
                          "Thank you for visiting my portfolio.",
                          "Try dark and light mode on setting.",
                        ]
                      }} />
                </h5>
              </div>
            )}
          </InView>
          </motion.div>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-start'>
          <motion.h4
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToRightAnimation}
            transition={{duration:0.4}}
            className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>
              Welcome to my website
          </motion.h4>
          <InView>
            {({ inView, ref, entry }) => (
              <div ref={ref}>
                <motion.h1
                  initial={"offScreen"}
                  whileInView={"onScreen"}
                  variants={fadeToRightAnimation}
                  transition={{duration:0.4, delay: 0.3}}
                  className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mx-auto mb-3'>
                  <Typewriter
                  options={{
                    autoStart: autoPlay(inView),
                    loop: true,
                    delay: 80,
                    pauseFor: 5000,
                    strings: [
                      "Need Creative Design?<br />I can help you!",
                      "Need a Cool Website?<br />Send me an email.",
                      "Need a Web Developer?<br />Please contact me.",
                    ]
                  }} />
                </motion.h1>
            </div>
            )}
          </InView>
          <motion.p
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToRightAnimation}
            transition={{duration:0.4, delay: 0.5}}
            className='text-dark dark:text-white text-lg max-w-sm mx-auto lg:mx-0 mb-12'>
              I'm a web developer specializing in designing and building branding websites. Check out my cool <Link to='works' smooth={true} duration={500} className='cursor-pointer text-darkprimary dark:text-primary' >works</Link>.
              I love exploring and learning new things.
          </motion.p>
          <div className='flex items-center justify-center lg:justify-start'>
            <motion.a
              href='./resume/Resume_Raymond-Tuazon.pdf' download={true} target='_blank'
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={zoomAnimation}
              viewport={{once:false, amount:0.3}}
              transition={{ duration: 0.2, delay: 0.6 }}
              className="flex items-center mr-3 px-6 py-2 bg-darkPrimary dark:bg-primary outline-none text-dark font-semibold">Download CV <RiDownload2Fill className='ml-2' size={20} />
            </motion.a>
            <motion.div
              initial={"offScreen"}
              whileInView={"onScreen"}
              variants={zoomAnimation}
              viewport={{once:false, amount:0.3}}
              transition={{ duration: 0.2, delay: 0.7 }}
              >
                <ContactMe />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
