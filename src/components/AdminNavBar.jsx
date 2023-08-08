import React from 'react'
import { SettingNav } from "./common/SettingNav"
import { Link } from 'react-router-dom'

export const AdminNavBar = () => {
    // const links = [
    //     {
    //         id: 1,
    //         link: '/',
    //         label: '<span className='s'>Back To </span>Home',
    //     },
    // ]

  return (
    <div className="">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to='/'>
              <h5 className="text-3xl flex items-center text-dark dark:text-white font-signature">
                  RD<span className="text-darkPrimary dark:text-primary">Tuazon</span>
              </h5>
            </Link>
            <div className="flex items-center gap-4">
                {/* <a href='./resume/Resume_Raymond-Tuazon.pdf' download={true} target='_blank' className="px-2 py-2 md:px-6 md:py-1 bg-darkPrimary dark:bg-primary outline-none text-white dark:text-dark font-semibold hover:bg-transparent hover:dark:bg-transparent hover:text-darkPrimary hover:dark:text-primary hover:border-solid border-2 border-darkPrimary dark:border-primary transition-colors duration-200"><span className='hidden md:block'>Hire me </span><span className='block md:hidden'><RiFileDownloadFill /></span></a> */}
                <ul className="flex flex-col font-medium">
                    <li key='1' className='cursor-pointer block py-2 pr-4 pl-3 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary duration-200 font-semibold md:p-0  text-center'>
                      <Link to='/'>
                        <span className='hidden md:inline-block'>Back To</span> Home
                      </Link>
                    </li>
                </ul>
                <SettingNav />
            </div>
        </div>
    </div>
  )
}


function useOnClickOutside(ref, handler) {
  React.useEffect(
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

