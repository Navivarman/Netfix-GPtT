import React, { useRef, useState } from 'react'
import Header from './Header'
import { CheckValidate } from '../utils/validate';

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true );
  const [errorMessage,setErrorMessage] = useState(null)

  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleCheck = () =>{
    const message =  CheckValidate(email.current.value,password.current.value,name.current.value)
    setErrorMessage(message)
  }
  const toggleButton = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div className=''>
        <Header/>
        <div className='absolute '>
        <img 
        src={"https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"} 
        alt="bg-img" />
        </div>

        <form  onSubmit={(e)=>e.preventDefault()} className=' absolute right-0 left-0 p-8 my-36 mx-auto bg-black w-3/12 bg-opacity-85 rounded-lg'>
            <h1 className='text-white font-bold text-2xl py-3'>{isSignIn ? "Sign Up":"Sign In" }</h1>
            { isSignIn && <input className='p-2 my-2 w-full bg-gray-900 rounded-md outline-none text-gray-400' type="text" placeholder='Full Name' ref={name} />}
            <input className='p-2 my-2 w-full bg-gray-900 outline-none rounded-md text-gray-400 ' type="e-mail" placeholder='E-mail' ref={email} />
            <input className='p-2 my-2 w-full bg-gray-900 outline-none rounded-md text-gray-400' type="password" placeholder='Password' ref={password} />
            <button className=' p-2 my-2 w-full bg-red-700 rounded-xl text-white' onClick={() => handleCheck()}>{isSignIn ? "Sign Up":"Sign In" }</button>
            <p className='p-2 my-2 text-red-600 font-bold'>{errorMessage}</p>
            <p className='text-white font-medium text-sm py-3 cursor-pointer' onClick={ () =>toggleButton()}> {isSignIn ? "Already registered? Sign In Now.": "New to Netflix? Sign Up" }</p>
        </form>
    </div>
  )
}

export default Login