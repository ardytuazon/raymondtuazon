import React, {useState } from 'react'
import { RiBehanceFill } from 'react-icons/ri'
import Projects from '../assets/js/projects'
import { motion } from "framer-motion"

export const Works = () => {
  const [tab, setTab] = useState('all')
  const [items, setItems] = useState(Projects)

  const filterItem = (cat) => {
    const newItems = Projects.filter((elem) => {
      return elem.category === cat
    })
    setItems(newItems)
    setTab(cat)
  }


  return (
    <div name='works' className='py-24 px-4 lg:px-6 bg-white dark:bg-semiDark max-w-screen-xl mx-auto'>
      <div className='flex flex-row items-center mb-8'>
        <div className='grow'>
          <h4 className='text-darkPrimary dark:text-primary  text-xl font-semibold uppercase tracking-widest mb-2'>My Works</h4>
          <h1 className='text-dark dark:text-white font-signature text-4xl md:text-5xl max-w-md md:max-w-2xl mb-3'>Creative Design</h1>
        </div>
        <div>
          <a href="https://www.behance.net/raymondtuazon" target="_blank" rel="noreferrer" className="flex items-center p-3 md:px-6 md:py-1 bg-darkPrimary dark:bg-primary outline-none text-dark font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200"><span className='hidden md:inline-block'>More on </span><RiBehanceFill className='ml-0 md:ml-2' size={20} /></a>
        </div>
      </div>
      <div className='mb-8 grid grid-cols-3 md:flex'>
        <button onClick={() => filterItem('website')} className={`m-1 px-4 md:px-6 py-1 outline-none font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200 ${tab === 'website' ? 'bg-transparent text-darkPrimary dark:text-primary' : 'bg-darkPrimary dark:bg-primary'}`}>Websites</button>
        <button onClick={() => filterItem('graphics')} className={`m-1 px-4 md:px-6 py-1 outline-none font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200 ${tab === 'graphics' ? 'bg-transparent text-darkPrimary dark:text-primary' : 'bg-darkPrimary dark:bg-primary'}`}>Graphics</button>
        <button onClick={() => { setItems(Projects); setTab('all') }} className={`m-1 px-4 md:px-6 py-1 outline-none font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200 ${tab === 'all' ? 'bg-transparent text-darkPrimary dark:text-primary' : 'bg-darkPrimary dark:bg-primary'}`}>All</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        { items.map((e, i) => {
          const {id, srcPicture, name, link, category, tools} = e;
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{once:false, amount:0.3}}
              transition={{ duration: 0.15, delay: i * 0.09 }}
              key={id} 
              className='group relative overflow-hidden duration-300'>
              <img src={srcPicture} className='w-full group-hover:scale-110 group-hover:rotate-3 duration-300' alt={`${name} Image`} />
              <div className='w-full absolute opacity-0 group-hover:opacity-100 group-hover:bottom-0 bottom-[-80px] duration-300'>
                <div className='bg-gray-200 dark:bg-dark py-3 px-4 flex flex-row items-center'>
                  <div className='grow'>
                    {category}
                    <h5 className='text-darkPrimary dark:text-primary text-lg te font-signature'>{name}</h5>
                    {
                      tools.map((tool,i) => {
                        return (
                          <p key={i} className='text-dark dark:text-white'>{tool}</p>
                        )
                      })
                    }
                  </div>
                  <a href={link} target='_blank' rel="noreferrer" className="px-4 md:px-6 md:py-1 bg-darkPrimary dark:bg-primary outline-none text-dark font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200">Demo</a>
                </div>
              </div>
            </motion.div>
          )
        }) }
      </div>
      
    </div>
  )
}
