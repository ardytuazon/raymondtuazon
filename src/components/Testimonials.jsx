import React, {useState, useEffect} from 'react'
import Messages from '../assets/js/testimonials'
import DarkBg from '../assets/img/dark-bg.png'
import LightBg from '../assets/img/light-bg2.png'
import HeroBg from '../assets/img/hero-bg.png'
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi'
import { motion, AnimatePresence  } from "framer-motion"
import { Link } from 'react-router-dom'

export const Testimonials = () => {
  const [feedbacks] = useState(Messages)  
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = feedbacks.length - 1
    if(index < 0) {
      setIndex(lastIndex)
    }
    if(index > lastIndex) {
      setIndex(0)
    }
  }, [index, feedbacks])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 50000)
    return() => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <div name='testimonials' className='md:h-screen px-4 p-20 mb-12 lg:px-6 bg-darkenWhite dark:bg-dark flex items-center'>
      <div className='w-full'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='text-center mb-12'>
            <h4 className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>Feedbacks</h4>
            <h1 className='text-dark dark:text-white font-signature text-4xl md:text-5xl'>References &amp; Clients</h1>
          </div>
          <div className='relative w-100 h-[600px] md:h-[560px] lg:h-[460px] overflow-hidden'>
            {
              feedbacks.map((item, indexFeedbacks) => {
                const {id, name, message, position, company, profile} = item;
                let stylePosition = 'translate-x-full opacity-0';
                if(indexFeedbacks === index) {
                  stylePosition = 'opacity-100 translate-x-0'
                }
                if(indexFeedbacks === index - 1 ||  (index === 0 && indexFeedbacks === feedbacks.length - 1)) {
                  stylePosition = 'translate-x-[-100%] opacity-0'
                }
                return (
                  <AnimatePresence key={id}>
                    <div className={`flex flex-col lg:flex-row items-center absolute left-0 top-0 w-100 h-100 mx-auto ${stylePosition} transition duration-500 ease-in-out w-full`}>
                      <div className='max-w-md'>
                        <motion.div
                          initial={{
                            opacity: 0.5,
                            rotateY: -180
                          }}
                          whileInView={{
                            opacity: 1,
                            rotateY: 180,
                            transition: { duration: 0.5 }
                          }}
                          transition={{duration:0.6}}
                          // viewport={{once:false, amount:0.4}}
                          key={index}
                          className='overflow-hidden x-auto relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
                          <img
                          src={DarkBg}
                          alt="Testimonial Image"
                          className='absolute hero-dark p-2' />
                          <img
                          src={LightBg}
                          alt="Testimonial Image"
                          className='absolute hero-light dark:hidden p-2 w-full' />
                          <div
                            className='bg-darkenWhite dark:bg-dark h-[50%] w-full absolute left-50 top-[25%] rotate-[18deg]'>
                          </div>
                          <img
                          src={HeroBg}
                          alt="Testimonial Image"
                          className='absolute p-6'/>
                        </motion.div>
                      </div>
                      <div className='w-full relative bg-white dark:bg-semiDark px-6 sm:px-8 md:px-12 pt-16 md:pt-8 pb-8 lg:pl-20 ml-0 lg:ml-[-50px] mt-[-100px] lg:mt-0 lg:z-0'>
                        <motion.div
                              initial={{
                              opacity: 0,
                              scale: 0.7
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                              transition: { duration: 0.3,delay: 0.6 }
                            }}
                            transition={{duration:0.6}}
                            className='absolute overflow-hidden bg-darkenWhite dark:bg-dark h-[150px] w-[150px] md:h-[170px] md:w-[170px] right-4 sm:right-[25%] lg:left-[-120px] top-[-100px] lg:top-[30px] z-1 border-[5px] border-darkPrimary  dark:border-primary'>
                              <img
                                src={profile}
                                alt={`${name} profile picture`}
                                className='absolute h-full w-full object-cover' />
                          </motion.div>
                        <h5 className='whitespace-nowrap text-darkPrimary dark:text-primary text-lg te font-signature'>{name}</h5>
                        <p className='whitespace-nowrap text-semiDark dark:text-zinc-300 mb-5 italic'>{position}<br />{company}</p>
                        <p className=' scrollbar-thin scrollbar-thumb-darkPrimary scrollbar-track-darkenWhite dark:scrollbar-thumb-primary dark:scrollbar-track-dark max-h-[215px] overflow-y-auto text-semiDark dark:text-darkenWhite'>
                          {message}
                        </p>
                      </div>
                    </div>
                  </AnimatePresence>
                )
              })
            }
            <div className='absolute top-0 lg:top-[unset] bottom-[unset] lg:bottom-0 right-0 flex flex-col md:flex-row items-end md:items-center'>
              <Link to='/testimonial' className='m-1 mr-3 cursor-pointer text-darkPrimary dark:text-primary'>Send feeedback?</Link>
              <div className=' flex flex-row justify-self-end'>
                <div onClick={() => setIndex(index - 1)} className='cursor-pointer text-semiDark dark:text-darkenWhite hover:text-darkPrimary dark:hover:text-primary p-1 mr-2'>
                  <HiChevronDoubleLeft size={30}/>
                </div>
                <div onClick={() => setIndex(index + 1)} className='cursor-pointer text-semiDark dark:text-darkenWhite hover:text-darkPrimary dark:hover:text-primary p-1'>
                  <HiChevronDoubleRight size={30}/>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}
