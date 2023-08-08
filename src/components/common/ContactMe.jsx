import React from 'react'
import { Link } from 'react-router-dom'

export const ContactMe = () => {
  return (
    <Link to='/message' className="cursor-pointer px-6 py-2 bg-transparent dark:bg-transparent outline-none text-darkPrimary dark:text-primary font-semibold hover:bg-darkPrimary hover:dark:bg-primary hover:text-dark hover:dark:text-dark hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200" >Contact me</Link>
  )
}
