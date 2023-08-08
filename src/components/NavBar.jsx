import React, { useState, useRef, useEffect } from 'react'
import { RiMenu5Fill, RiCloseFill, RiFileDownloadFill } from 'react-icons/ri'
import { SettingNav } from "./common/SettingNav"
import { Link } from 'react-scroll'

export const NavBar = () => {
    const ref = useRef();
    const [nav, setNav] = useState(false)
    useOnClickOutside(ref, () => setNav(false))

    const links = [
        {
            id: 1,
            link: 'home',
            label: 'Home',
        },
        {
            id: 2,
            link: 'about',
            label: 'About Me',
        },
        {
            id: 3,
            link: 'works',
            label: 'Works',
        },
        {
            id: 5,
            link: 'testimonials',
            label: 'Testimonials',
        },
        {
            id: 6,
            link: 'contact',
            label: 'Contact',
        }
    ]

  return (
    <div className="">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <Link to='home' smooth={true} duration={500}>
              <h5 className="flex items-center text-3xl cursor-pointer text-dark dark:text-white font-signature">
                  RD<span className="text-darkPrimary dark:text-primary">Tuazon</span>
              </h5>
            </Link>
            <div className="flex items-center md:order-2">
                <a href='./resume/Resume_Raymond-Tuazon.pdf' download={true} target='_blank' className="px-2 py-2 font-semibold text-white transition-colors duration-200 border-2 outline-none md:px-6 md:py-1 bg-darkPrimary dark:bg-primary dark:text-dark hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-darkPrimary dark:border-primary"><span className='hidden md:block'>Hire me </span><span className='block md:hidden'><RiFileDownloadFill /></span></a>
                <SettingNav />
                <div onClick={() => setNav(!nav)} className="flex p-2 duration-200 cursor-pointer text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary md:hidden">    
                    {nav ? <RiCloseFill size={25} /> : <RiMenu5Fill size={25} />}
                </div>
            </div>
            <div ref={ref} className={`justify-between items-center w-full md:flex md:w-auto md:order-1 ${!nav?'hidden':''}`}>
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    {links.map(({id,link,label}) => (
                         <li key={id} className='block py-2 pl-3 pr-4 font-semibold text-center duration-200 cursor-pointer text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary md:p-0'>
                          <Link onClick={() => setNav(!nav)} to={link} smooth={true} duration={500}>
                            {label}
                          </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}


function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

