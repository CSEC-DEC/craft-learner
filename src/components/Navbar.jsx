import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full h-[5.5em] bg-white border-b flex justify-between px-16 items-center'>
        <div className='text-deep-purple font-bold text-3xl'>
            CRAFT LEARNERS
        </div>

       <Link to='/login'> <div className='flex'>
            <a href="#" className='bg-button-color py-2 px-4 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md '>
                <p className='text-white text-xl'>GET STARTED</p>
            </a>
        </div></Link>
    </div>
  )
}

export default Navbar