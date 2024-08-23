import React from 'react'
import { LOGO_URL } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute z-10  p-4 '>
        <img
        className='w-2/12 fixed bg-gradient-to-b '         
        src={LOGO_URL} 
        alt="logo" />
    </div>
  )
}

export default Header