import React from 'react'
import download from '../assest/download.jfif'
import { Link } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'
import {GiShoppingCart} from 'react-icons/gi'

const Header = () => {
  return (
    <header  className="bg-yellow-300 fixed shadhow-md w-full h-20 px-2 md:px-4">
        {/* desktop */}

     <div className=' flex justify-between'>
      <Link to={""}>
        <div className="h-20">
       <img src={download} className='h-full cursor-grab'/>
       </div>
      </Link>
           <div className='flex items-center gap-10 md:gap-5'>
            <nav className='flex gap-10 md:gap-5'>
              <Link to={""}> HOME </Link>
              <Link to={"menu"}> MENU </Link>
              <Link to={"about"}> ABOUT </Link>
              <Link to={"contact"}> CONTACT </Link>
            </nav>
            <div className='text-3xl text-color-300 relative'> 
           < GiShoppingCart/>
           <div className='absolute -top-3 -right-3 width-6 height-6'>0</div>
           </div>
           <div className='text-3xl text-color-300'> 
           < FaUserAlt/>
           </div>
           </div>
           </div>

          
        {/* mobile */}
    </header>
  )
}

export default Header
