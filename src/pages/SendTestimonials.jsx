import React from 'react'
// import Messages from '../assets/js/testimonials'
import { RiDeleteBin2Fill, RiUploadCloud2Line } from 'react-icons/ri'
import { motion } from "framer-motion"

export const SendTestimonials = () => {
  // const [feedbacks] = React.useState(Messages);
  const inputRef = React.useRef();
  const wrapperRef = React.useRef(null);

  const [image, setImage] = React.useState('')
  const [isUploaded, setIsUpload] = React.useState(false)

  function handleImageChange(e) {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()

      reader.onload = function (e) {
        setImage(e.target.result)
        setIsUpload(true)
      }
      reader.readAsDataURL(e.target.files[0])
   }
  }

  const reset = () => {
    inputRef.current.value = '';
    setImage('');
    setIsUpload(false)
  };

  const onDragEnter = () => {
    wrapperRef.current.classList.add('opacity-50')
  }

  const onDragLeave = () => {
    wrapperRef.current.classList.remove('opacity-50')
  }

  const onDrop = () => {
    wrapperRef.current.classList.remove('opacity-50')
  }

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
                  Please Rate<br /><span className='text-darkPrimary dark:text-primary'>My Work</span>.
              </motion.h1>
              <motion.p
                initial={"offScreen"}
                whileInView={"onScreen"}
                variants={fadeToRightAnimation}
                transition={{duration:0.4, delay: 0.5}}
                className='text-semiDark dark:text-darkenWhite text-lg max-w-sm mx-auto lg:mx-0 mb-12'>
                  Please provide your experience working with me. Any feedback will highly appreciate. This will be posted on my website.<br />Thank you! 
              </motion.p>        
            </div>
          </div>
          <motion.form
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={fadeToLeftAnimation}
            transition={{duration:0.4, delay: 0.3}}
            action="https://getform.io/f/85427858-3ebf-48b6-a22a-ff87e9841815"
            method="POST"
            encType="multipart/form-data"
            className="w-full lg:w-1/2 ml-auto bg-darkenWhite dark:bg-dark shadow-md p-4 lg:p-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-full px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Position</label>
                  <input
                    name="position"
                    type="text"
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-3">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Company</label>
                  <input
                    name="company"
                    type="text"
                    required
                    className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="w-full md:w-full px-3 mb-5">
                  <label className="block text-dark dark:text-darkenWhite font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="3" className="focus:bg-white dark:focus:bg-semiDark appearance-none block w-full bg-transparent text-semiDark dark:text-darkenWhite font-medium border-2 border-darkPrimary dark:border-primary py-3 px-3 leading-tight focus:outline-none" />
              </div>
              <div className="relative w-full px-3 mb-3 space-y-4 flex flex-col sm:flex-row justify-between">
                <div className='w-100 h-100 sm:w-[250px] h-[250px] border-[3px] border-dashed border-darkPrimary dark:border-primary'>
                {
                !isUploaded ? (
                  <label
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    htmlFor="itemfile" className="flex flex-col h-full items-center justify-center group relative hover:bg-white dark:hover:bg-semiDark bg-transparent cursor-pointer text-center p-6">
                    <RiUploadCloud2Line className='text-4xl text-darkPrimary dark:text-primary'/>

                    <h2 className="mt-4 text-xl font-medium text-dark dark:text-darkenWhite tracking-wide">Display Picture</h2>

                    <p className="mt-2 text-dark dark:text-darkenWhite">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                    
                  </label>
                  ) : (
                  <div className='overflow-hidden group relative grid h-full place-items-center'>
                    <img
                      src={image}
                      className='h-full w-full object-cover md:mb-0'
                      alt="Upload img" />
                    <div onClick={reset} className='cursor-pointer hidden group-hover:flex duration-100 absolute bg-red-600 text-white items-center py-2 px-4'>Delete <RiDeleteBin2Fill size={20} className='ml-2' /></div>
                  </div>
                  )
                }
                </div>
                <input id="itemfile" type="file" className="absolute cursor-pointer opacity-0" name="file" onChange={handleImageChange} ref={inputRef} />
                <div className='grid content-end'>
                  <button className='px-6 py-2 bg-darkPrimary dark:bg-primary text-dark font-semibold'>Send Testimonial</button>
                </div>
              </div>
            </div>
        </motion.form>
        </div>
      </div>
      <div className=' px-4 lg:px-6 mt-12 md:mt-0 md:absolute md:inset-x-0 md:bottom-0 mx-auto max-w-screen lg:max-w-screen-xl pb-4 flex flex-col md:flex-row items-center md:space-x-12 border-t-2 pt-4 border-neutral-600'>
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
