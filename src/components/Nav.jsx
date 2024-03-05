import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'


const Nav = () => {

  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = () => {
    setNavOpen(!navOpen)
  }


  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt='Logo' width={130} height={29} />
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>


        <div className='hidden max-lg:block fixed  top-3 right-5'>
          <img onClick={toggleNav} src={hamburger} alt='Hamburger' width={25} height={25} />
        </div>
        {
          navOpen &&

          (
            <div className='w-full flex flex-col justify-center min-h-screen border-2 border-red-500 p-2'>
              <ul className='w-full flex flex-col gap-10 justify-center items-center'>
                {navLinks.map((item) => (
                  <li className='w-full' key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>)
        }


      </nav>
    </header>
  )
}

export default Nav