import React from 'react'
// import Avatar from '../../img/avatar.jpg'
import {tailwind, Html, Css, js, Reactavatar, Bootstrap, Male, redux, reactrouter} from '../../img/index'

function Skills() {

  return (
    <div className="w-full sm:h-screen md:h-max h-max sm:pb-0 pb-10 bg-black flex items-center justify-center overflow-hidden relative">
        <div className="w-[400px] hidden md:flex">
            <img src={Male} alt=""className='w-full'/>
        </div>
        <div className="md:w-[calc(100%-400px)] w-5/6 m-auto h-full">
            <h3 className='text-red-500 text-3xl mx-5 my-10 font-Leckerli underline'>Skills</h3>
            <div className="skills grid  w-full gap-10 h-1/2">
                <div className=" row grid sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-10 mr-0 md:mr-20">
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={Html} alt="" title='HTML' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>HTML</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={Css} alt="" title='Css' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>CSS</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={js} alt="" title='javaScript' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>JavaScript</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={Reactavatar} alt="" title='React' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>React</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={Bootstrap} alt="" title='Bootstrap' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>Bootstrap</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={tailwind} alt="" title='Tailwind' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>Tailwind</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={redux} alt="" title='redux' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>Redux</h5>
                    </div>
                    <div className="cols h-44 bg-gray-900 rounded-md flex flex-col items-center justify-center cursor-pointer">
                        <img src={reactrouter} alt="" title='React Router' className='h-1/2 flex items-center justify-center' />
                        <h5 className='text-white text-center pt-2'>React Router Dom</h5>
                    </div>
                </div>
                {/* <div className="row grid sm:grid-cols-4 gap-10 mr-20">
                   

                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Skills