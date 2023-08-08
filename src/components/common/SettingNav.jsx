import React, { useState, useRef, useEffect } from 'react'
import { RiSettings2Fill, RiCloseFill, RiMoonFill, RiSunFill, RiMessageFill, RiMessage2Fill, RiLoginBoxFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export const SettingNav = () => {
  const ref = useRef();
  const [theme, setTheme] = useState(
    () => localStorage.theme === 'dark'
  )
  const ThemeMode = () => {
    setTheme(!theme)
    useOnClickOutside()
  }

  const [setting, setSetting] = useState(false)
  useOnClickOutside(ref, () => setSetting(false))

  useEffect(() => {
    const html = window.document.documentElement;

    const prevTheme = theme ? 'light' : "dark"
    html.classList.remove(prevTheme)

    const nextTheme = theme ? 'dark' : "light"
    html.classList.add(nextTheme)

    localStorage.setItem("theme", nextTheme)

  }, [theme])

  return (
    <div className="relative">
      <div onClick={() => setSetting(!setting)} className="cursor-pointer text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary duration-200 p-2 ml-2">
        {setting ? <RiCloseFill size={25} /> : <RiSettings2Fill size={25} />}
      </div>
      <div ref={ref} className={`absolute right-0 w-48 mt-2 bg-white dark:bg-semiDark shadow ${!setting ? 'hidden' : ''}`}>
        <ul className="font-medium py-1.5 divide-y-2 divide-darkenWhite dark:divide-neutral-600 px-4">
            <li>
              <p className="cursor-pointer flex justify-between items-center py-2 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary" >Admin Login <RiLoginBoxFill size={20}/></p>
            </li>
            <li>
              <Link onClick={() => setSetting(!setting)} to='/testimonial' className="cursor-pointer flex justify-between items-center py-2 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary" >Send Feedback <RiMessageFill className='' size={20} /></Link>
            </li>
            <li>
              <Link onClick={() => setSetting(!setting)} to='/message' className="cursor-pointer flex justify-between items-center py-2 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary" >Send Message <RiMessage2Fill className='' size={20} /></Link>
            </li>
            <li onClick={ThemeMode} className="cursor-pointer">
              { theme ?
              <p onClick={() => setSetting(!setting)} className="flex items-center py-1.5 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary"><span className="grow">Light Mode</span> <RiSunFill size={25} /></p>
              :
              <p onClick={() => setSetting(!setting)} className="flex py-1.5 text-dark dark:text-white hover:text-darkPrimary hover:dark:text-primary"><span className="grow">Dark Mode</span> <RiMoonFill size={20} /></p>
              }
            </li>
        </ul>
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