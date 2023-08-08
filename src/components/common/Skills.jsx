import React from 'react'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { WebDesignRating, FrontEndRating, GraphicRating } from '../../assets/js/ratings'

const fadeToLeftAnimation ={
  offScreen: {opacity: 0, x: 100},
  onScreen: {
    opacity: 1,
    x: 0,
  },
  // viewport: {once:true, amount:0.3},
}



export const WebDesigner = (val) => {
  const [ratings] = React.useState(WebDesignRating)
  const item = Boolean(val.start)
  return (
    <div className='overflow-hidden'>
      <motion.h4
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4}}
        className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>About  Me
      </motion.h4>
      <motion.h1
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.1}}
        className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mb-3'>
          Hi! I'm Raymond Tuazon<br />
          {item}
          <span className='text-darkPrimary dark:text-primary'>
          <Typewriter
            options={{
              autoStart: item,
              loop: true,
              delay: 80,
              pauseFor: 10000,
              strings: [
                "Web Designer"
              ]
          }} />
          </span>
      </motion.h1>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.2}}
        className='text-lg text-semiDark dark:text-darkenWhite max-w-lg mb-3'>
          I love the way I can use my intellect and creativity skills and seeing people interact with it.
      </motion.p>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.25}}
        className='text-lg text-dark dark:text-white mb-5'>Here are the few technologies I've been working with recently.</motion.p>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.35}}
        className='flex flex-wrap'>
        { ratings.map((item) => {
          const { id, name, icons, rating } = item
          return (
            <div key={id} className='flex items-center mr-3 mb-2 w-10 duration-500 hover:w-48 overflow-x-hidden'>
              <img src={icons} className='w-10 brightness-[0.1] dark:brightness-100 dark:grayscale hover:dark:grayscale-0 cursor-pointer' alt='Skills icon' />
              <div className='ml-3 w-full'>
                <h5 className='text-md text-dark dark:text-primary mb-3 whitespace-nowrap'>{name}</h5>
                <div className="rating relative flex items-center mb-3">
                  <span className="absolute start-0 w-full p-0.5 bg-semiDark dark:bg-white"></span>
                  <span className={`absolute start-0 p-0.5 bg-darkPrimary dark:bg-primary ${rating}`}></span>
                </div>
              </div>
            </div>
          )
        }
        )}
      </motion.div>
    </div>
  )
}

export const FrontEnd = (val) => {
  const [ratings] = React.useState(FrontEndRating)
  const item = Boolean(val.start)
  return (
    <div className='overflow-hidden'>
      <motion.h4
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4}}
        className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>About  Me
      </motion.h4>
      <motion.h1
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.1}}
        className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mb-3'>
          Hi! I'm Raymond Tuazon<br />
          <span className='text-darkPrimary dark:text-primary'>
          <Typewriter
            options={{
              autoStart: item,
              loop: true,
              delay: 80,
              pauseFor: 10000,
              strings: [
                "Frontend Developer"
              ]
          }} />
          </span>
      </motion.h1>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.2}}
        className='text-lg text-semiDark dark:text-darkenWhite max-w-lg mb-3'>
          I'm a web developer with a passion in building websites. I love combining the worlds of logic and creative design to make cool user-friendly websites.
      </motion.p>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.25}}
        className='text-lg text-dark dark:text-darkenWhite mb-5'>Here are the few technologies I've been working with recently.</motion.p>
      <div className='block lg:flex'>
        <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.35}}
        className='flex flex-wrap'>
        { ratings.map((item) => {
          const { id, name, icons, rating } = item
          return (
            <div key={id} className='flex items-center mr-3 mb-2 w-10 duration-500 hover:w-48 overflow-x-hidden'>
              <img src={icons} className='w-10 brightness-[0.1] dark:brightness-100 dark:grayscale hover:dark:grayscale-0 cursor-pointer' alt='Skills icon' />
              <div className='ml-3 w-full'>
                <h5 className='text-md text-dark dark:text-primary mb-3 whitespace-nowrap'>{name}</h5>
                <div className="rating relative flex items-center mb-3">
                  <span className="absolute w-full p-0.5 bg-semiDark dark:bg-white"></span>
                  <span className={`absolute p-0.5 bg-darkPrimary dark:bg-primary ${rating}`}></span>
                </div>
              </div>
            </div>
          )
        }
        )}
        </motion.div>
      </div>
    </div>
  )
}

export const GraphicDesigner = (val) => {
  const [ratings] = React.useState(GraphicRating)
  const item = Boolean(val.start)
  return (
    <div className='overflow-hidden'>
      <motion.h4
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4}}
        className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>About  Me
      </motion.h4>
      <motion.h1
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.1}}
        className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mb-3'>
          Hi! I'm Raymond Tuazon<br />
          <span className='text-darkPrimary dark:text-primary'>
          <Typewriter
            options={{
              autoStart: item,
              loop: true,
              delay: 80,
              pauseFor: 10000,
              strings: [
                "Graphic Designer"
              ]
          }} />
          </span>
      </motion.h1>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.2}}
        className='text-lg text-semiDark dark:text-darkenWhite max-w-lg mb-3'>
          I am a creative and passionate in designing things and love to explore and learn new things.
      </motion.p>
      <motion.p
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.25}}
        className='text-lg text-dark dark:text-darkenWhite mb-5'>Here are the few technologies I've been working with recently.</motion.p>
      <motion.div
        initial={"offScreen"}
        whileInView={"onScreen"}
        variants={fadeToLeftAnimation}
        transition={{duration:0.4, delay: 0.35}}
        className='flex flex-wrap'>
        { ratings.map((item) => {
          const { id, name, icons, rating } = item
          return (
            <div key={id} className='flex items-center mr-3 mb-2 w-10 duration-500 hover:w-48 overflow-x-hidden'>
              <img src={icons} className='w-10 brightness-[0.1] dark:brightness-100 dark:grayscale hover:dark:grayscale-0 cursor-pointer' alt='Skills icon' />
              <div className='ml-3 w-full'>
                <h5 className='text-md text-dark dark:text-primary mb-3 whitespace-nowrap'>{name}</h5>
                <div className="rating relative flex items-center mb-3">
                  <span className="absolute w-full p-0.5 bg-semiDark dark:bg-white"></span>
                  <span className={`absolute p-0.5 bg-darkPrimary dark:bg-primary ${rating}`}></span>
                </div>
              </div>
            </div>
          )
          }
        )}
      </motion.div>
    </div>
  )
}
