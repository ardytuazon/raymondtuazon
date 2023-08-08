import React, { useState } from 'react'
import WebDesignerIcon from '../assets/img/webdesigner.png'
import FrontendIcon from '../assets/img/frontend.png'
import GraphicIcon from '../assets/img/graphic.png'
import { WebDesigner, FrontEnd, GraphicDesigner } from './common/Skills'
import { motion } from "framer-motion"

export const AboutMe = () => {

  const [toggleTab, setToggleTab] = useState(1)
  
  const toogleActive = (index) => {
    setToggleTab(index)
  }

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     if(toggleTab === 3) {
  //       setToggleTab(1)
  //     } else {
  //       setToggleTab(toggleTab + 1)
  //     }
  //   }, 10000)
  //   return() => {
  //     clearInterval(slider)
  //   }
  // }, [toggleTab])

  const scaleAnimation ={
    offScreen: {opacity: 0, scale: 0.8},
    onScreen: {
      opacity: 1, scale: 1,
      transition: {duration: 0.15},
      viewport: {once:false, amount:0.3},
    },
  }

  const hoverAnimation ={
    scale: 1.06
  }

  return (
    <div name='about' className='w-full px-4 pb-20 md:h-screen pt-28 md:py-20 lg:px-6 bg-darkenWhite dark:bg-dark'>
      <div className='flex flex-col justify-center h-full mx-auto space-x-0 lg:flex-row max-w-screen lg:max-w-screen-xl lg:space-x-12'>
        <div className='tab-nav flex flex-row lg:flex-col justify-center mb-4 lg:mb-0 lg:max-w-[550px] space-x-2 md:space-x-4 lg:space-x-0'>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            whileHover={hoverAnimation}
            variants={scaleAnimation}
            transition={{duration: 0.1}}
            // onClick={() => toogleActive(1)} className={`group hover:scale-105  duration-200 cursor-pointer flex flex-col md:flex-row items-center bg-white dark:bg-semiDark p-3 md:p-7 w-1/3 md:w-full max-w-md xl:max-w-xl mb-2 mx-auto ${toggleTab === 1? 'scale-100 lg:scale-105':''}`}>
            onClick={() => toogleActive(1)} className={`group duration-200 cursor-pointer flex flex-col md:flex-row items-center bg-white dark:bg-semiDark p-3 md:p-7 w-1/3 md:w-full max-w-md xl:max-w-xl mb-3 mx-auto`}>
            <img src={WebDesignerIcon} className={`w-12 lg:w-20 brightness-[0.1] dark:brightness-100 dark:group-hover:grayscale-0  ${toggleTab === 1 ? 'grayscale-0' : 'grayscale' }`} alt='Icon' />
            <div className='ml-4 text-center lg:ml-8 md:text-left'>
              <h2 className={`dark:group-hover:text-primary group-hover:text-darkPrimary font-signature  text-lg lg:text-2xl tracking-widest ${toggleTab === 1? 'text-darkPrimary dark:text-primary':'text-dark dark:text-darkenWhite'}`}>Web Designer</h2>
              {/* <p className='hidden dark:text-darkenWhite lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo</p> */}
            </div>
          </motion.div>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            whileHover={hoverAnimation}
            variants={scaleAnimation}
            onClick={() => toogleActive(2)} className={`group duration-200 cursor-pointer flex flex-col md:flex-row items-center bg-white dark:bg-semiDark p-3 md:p-7 w-1/3 md:w-full max-w-md xl:max-w-xl mb-3 mx-auto`}>
            <img src={FrontendIcon} className={`w-12 lg:w-20 brightness-[0.1] dark:brightness-100 dark:group-hover:grayscale-0  ${toggleTab === 2 ? 'grayscale-0' : 'grayscale' }`} alt='Icon' />
            <div className='ml-4 text-center lg:ml-8 md:text-left'>
              <h2 className={`dark:group-hover:text-primary group-hover:text-darkPrimary font-signature  text-lg lg:text-2xl tracking-widest ${toggleTab === 2? 'text-darkPrimary dark:text-primary':'text-dark dark:text-darkenWhite'}`}>Frontend Developer</h2>
              {/* <p className='hidden dark:text-darkenWhite lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo</p> */}
            </div>
          </motion.div>
          <motion.div
            initial={"offScreen"}
            whileInView={"onScreen"}
            whileHover={hoverAnimation}
            variants={scaleAnimation}
            onClick={() => toogleActive(3)} className={`group duration-200 cursor-pointer flex flex-col md:flex-row items-center bg-white dark:bg-semiDark p-3 md:p-7 w-1/3 md:w-full max-w-md xl:max-w-xl mb-3 mx-auto`}>
            <img src={GraphicIcon} className={`w-12 lg:w-20 brightness-[0.1] dark:brightness-100 dark:group-hover:grayscale-0  ${toggleTab === 3 ? 'grayscale-0' : 'grayscale' }`} alt='Icon' />
            <div className='ml-4 text-center lg:ml-8 md:text-left'>
              <h2 className={`dark:group-hover:text-primary group-hover:text-darkPrimary font-signature  text-lg lg:text-2xl tracking-widest ${toggleTab === 3? 'text-darkPrimary dark:text-primary':'text-dark dark:text-darkenWhite'}`}>Graphic Designer</h2>
              {/* <p className='hidden dark:text-darkenWhite lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, illo</p> */}
            </div>
          </motion.div>
        </div>
        
        <div className='flex flex-col tab-content md:justify-center grow'>
          <div className='flex flex-col max-w-2xl mr-auto'>
            <div className={ toggleTab === 1 ? 'block' : 'hidden'}>
              <WebDesigner start={ toggleTab === 1 ? '1' : ''}/>
            </div>
            <div className={ toggleTab === 2 ? 'block' : 'hidden'}>
              <FrontEnd start={ toggleTab === 2 ? '1' : ''} />
            </div>
            <div className={ toggleTab === 3 ? 'block' : 'hidden'}>
              <GraphicDesigner start={ toggleTab === 3 ? '1' : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
