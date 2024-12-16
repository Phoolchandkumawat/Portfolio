import React from 'react'
import Logo from '../Logo'

function Contect() {
  return (
   <div className="w-full h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
        <div className="h-full w-3/4 m-auto relative z-50" >
          <div className="mt-10 w-full h-max">
            <h4 className='text-center text-3xl'>Let's Work Together Contact Me</h4>
            <p className='text-center mt-5'>Contect me for any work or collabration, And waiting for you text. </p>
            <div className='w-full sm:flex grid gap-3 mt-20 place-content-center pb-10'>
              <input type="text" className='text-black md:w-3/6 sm:w-4/6 w-[60vw] rounded-md p-3 h-10 outline-none' />
              <button className='md:w-1/6 w-[60vw] h-[40px] sm:h-[40px] sm:w-2/6 bg-red-800 rounded-md text-white outline-none border-none font-semibold'>Contact Me</button>
            </div>
          </div>
          <div className='w-full h-[400px] place-items-center place-content-end text-white'>
            <span className='text-3xl'> Phoolchand Kumawat</span>
            <ul className='flex w-4/6 mt-16 justify-between '>
              <li><a href="">Home</a></li>
              <li><a href="">Project</a></li>
              <li><a href="">Skills</a></li>
              <li><a href="">Contact Me</a></li>
            </ul>

            <div className="social"></div>
          </div>
        </div>

        <div className="w-full h-full absolute top-0 left-0 z-0">
          <div className='w-20 h-20 bg-red-600 rounded-full relative top-2/3 left-2/5'></div>
          <div className='w-20 h-20 bg-green-600 rounded-full relative top-2/4 left-1/2'></div>
          <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-1/4'></div>
          <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-3/4'></div>
          <div className='w-20 h-20 bg-blue-600 rounded-full relative top-1/4 left-3/4 ml-52'></div>
        </div>
   </div>
  )
}

export default Contect