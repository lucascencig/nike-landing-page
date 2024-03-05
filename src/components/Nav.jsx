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
    <header className='padding-x py-8 fixed z-10 w-full bg-[#ffffff7c] backdrop-blur'>
      <nav className=' z-10 flex justify-between items-center max-container'>
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


        <div className='hidden max-lg:block fixed  top-8 right-8'>
          <img onClick={toggleNav} src={hamburger} alt='Hamburger' width={25} height={25} />
        </div>
        {
          navOpen ?

            (

              <div className='fixed top-0 left-0 bg-slate-700 w-full flex flex-col justify-center min-h-screen border-2 p-2'>

                <div className=' z-10 flex justify-between items-center max-container'>
                  <a href="/" className='absolute top-8 left-8'>
                    <img src={headerLogo} alt='Logo' width={130} height={29} />
                  </a>
                </div>
                <div className='hidden max-lg:block fixed  top-8 right-8'>
                  <img onClick={toggleNav} src={hamburger} alt='Hamburger' width={25} height={25} />

                </div>


                <ul className='z-10 w-full flex flex-col gap-10 justify-center items-center'>
                  {navLinks.map((item) => (
                    <li className='z-10 w-full hover:bg-coral-red h-10 flex justify-center items-center ' key={item.label}>
                      <a href={item.href} onClick={toggleNav} className='z-10 flex justify-center items-center font-montserrat leading-normal text-lg text-slate-200 font-bold '>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
            :
            null
        }


      </nav>
    </header>
  )
}

export default Nav