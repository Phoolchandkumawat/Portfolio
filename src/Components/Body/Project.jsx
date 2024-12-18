import React, { useState } from 'react'
import { moniter, projectImages2, projectImages3, projectImages4, projectImages5 } from '../../img'

function Project() {

    const [mouser, setMouser] = useState(false)


  return (
    <div className='w-full h-screen bg-black text-white'>
        <div className="w-5/6 m-auto sm:flex h-full">
        <div className="left w-1/2 h-4/5 my-auto flex">
            <div className="line w-5 h-full">
                <div className='w-[2px] h-full bg-gray-900'></div>
            </div>
            <div className="content w-[calc(100%-20px)] grid relative">
                <div className="project flex gap-10 relative -left-[29px] mt-5">
                    <div className="point w-5 h-5 bg-gray-900 rounded-full absolute top-[30%] left-0"></div>
                    <div className="textpro cursor-pointer ml-16" onMouseEnter={()=>setMouser(projectImages2)} onMouseLeave={()=>setMouser(false)}>
                        <h2 className=''>Complete E-Store With Baas As Backend</h2>
                        <p className='flex gap-5'>
                            <span>React</span>
                            <span>Appwrite</span>
                            <span>Tailwind</span>
                            <span>Redux Toolkit</span>
                        </p>
                        
                    </div>
                </div>
                <div className="project flex gap-10 relative -left-[29px] mt-5" onMouseEnter={()=>setMouser(projectImages4)} onMouseLeave={()=>setMouser(false)}>
                    <div className="point w-5 h-5 bg-gray-900 rounded-full absolute top-[30%] left-0"></div>
                    <div className="textpro cursor-pointer ml-16">
                        <h2 className=''>A Open Word Chat App</h2>
                        <p className='flex gap-5'>
                            <span>React</span>
                            <span>Redux Toolkit</span>
                            <span>Appwrite</span>
                            <span>Tailwind</span>
                        </p>
                    </div>
                </div>
                <div className="project flex gap-10 relative -left-[29px] mt-5" onMouseEnter={()=>setMouser(projectImages5)} onMouseLeave={()=>setMouser(false)}>
                    <div className="point w-5 h-5 bg-gray-900 rounded-full absolute top-[30%] left-0"></div>
                    <div className="textpro cursor-pointer ml-16">
                        <h2 className=''>Zelt Website Clone</h2>
                        <p className='flex gap-5'>
                            <span>Html</span>
                            <span>Css</span>
                            <span>Java Script</span>
                        </p>
                    </div>
                </div>
                <div className="project flex gap-10 relative -left-[29px] mt-5" onMouseEnter={()=>setMouser(projectImages3)} onMouseLeave={()=>setMouser(false)}>
                    <div className="point w-5 h-5 bg-gray-900 rounded-full absolute top-[30%] left-0"></div>
                    <div className="textpro cursor-pointer ml-16">
                        <h2 className=''>Food Website Clone{"(Eat-Curius)"}</h2>
                        <p className='flex gap-5'>
                            <span>React</span>
                            <span>Tailwind</span>
                            <span>Framor Motion</span>
                            <span>Swiper Js</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="right w-1/2 h-4/5 my-auto relative sm:grid hidden">
            <img src={mouser== false ? '':mouser} loading="lazy" alt="" className={`${mouser == false ? "hidden" : "flex"} absolute w-[93%] h-3/5 xl:h-3/5 md:h-[23vw] lg:h-[22vw]  ml-[4%] top-6 left-0 z-10`} />
            <img src={moniter} alt="" loading="lazy" className='relative z-[999]' />


        </div>
        </div>
    </div>
  )
}

export default Project