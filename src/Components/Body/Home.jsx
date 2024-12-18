

export default function Home (){
    return(
        <div className="w-full h-[calc(100dvh-48px)] bg-black text-white overflow-hidden relative">
            <div className="bg absolute flex top-0 left-0 w-full h-full z-10">
                <div className="w-1/2 relative">
                    <div className=" absolute top-[90%] -left-[150px] place-content-center place-items-center border-green-600 border-[2px] rounded-full w-60 h-60">
                        <div className="border-green-600 border-[2px] rounded-full w-56 h-56"></div>
                    </div>
                    <div className=" absolute top-[18%] -left-[140px] border-red-600 place-content-center place-items-center border-[2px] rounded-full w-60 h-60">
                        <div className="border-red-600 border-[2px] rounded-full w-56 h-56"></div>
                    </div>
                </div>
                <div className="relative w-1/2 xl:flex hidden lg:flex">
                    <img src="../../../public/html.png" alt="" className="w-20 absolute top-[72%] rotate-12 left-[30%] " />
                    <img src="../../../public/css.png" alt=""  className="w-20 absolute top-[20%] rotate-12 left-[70%]" />
                    <img src="../../../public/javascript.png" alt=""  className="w-20 absolute top-[72%] rotate-12 left-[70%]" />
                    <img src="../../../public/bootstrap.png" alt=""  className="w-20 absolute top-[45%] rotate-12 left-[10%]" />
                    <img src="../../../public/react.png" alt=""  className="w-20 absolute top-[20%] rotate-12 left-[30%]" />
                </div>
            </div>
            <div className="w-5/6 h-full m-auto flex z-50 relative">
                <div className="sm:w-1/2 h-full items-center justify-center flex gap-4 w-full z-50">
                    <div className="text w-full h-2/5">
                        <h3 className="text-[16px]">Hello I am</h3>
                        <h3 className="text-[18px] my-2 text-red-500 bg-gray-800 w-max px-5 py-1 rounded-3xl">Phoolchand Kumawat</h3>
                        <h3 className="text-3xl grid my-5">
                            <span>Front-End</span>
                            <span className="ml-20">Developer</span>
                        </h3>
                        <p className="sm:w-4/6 w-5/6">
                        passionate about creating responsive and user-friendly web applications. Let’s build something amazing together!
                        </p>
                    </div>
                </div>
                <div className="sm:w-1/2 sm:h-full sm:flex sm:items-center sm:justify-center sm:relative absolute left-0 top-0 w-full h-full sm:top-0 sm:left-0">
                    <div className="w-full h-full place-content-center place-items-center">
                        <div className="">
                            <img src="../../../public/two.png" alt=""  className="object-contain"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="social flex absolute items-center justify-center bottom-5 rounded-3xl left-[10%] z-50 px-2 bg-gray-800  h-10">
            <div className="rounded-full w-9 h-9 p-1 overflow-hidden flex items-center justify-center">
                <a href="mailto:phoolchandkumawat2003@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="../../../public/email.png" alt="" title="Email" className="cursor-pointer hover:scale-105 " />
                </a>
            </div>
            <div className="rounded-full w-9 h-9 p-1 overflow-hidden items-center justify-center flex">
                    <a href="https://www.linkedin.com/in/phoolchand-kumawat-23a1a12b8/" target="_blank">
                        <img src="../../../public/linkdn.png" alt="" title="Linkdn" className="cursor-pointer"/>
                    </a>
            </div>
            <div className="rounded-full w-9 h-9 p-1 overflow-hidden items-center justify-center flex">
                    <a href="https://github.com/Phoolchandkumawat" target="_blank">
                        <img src="../../../public/github.png" alt="" title="Linkdn" className="cursor-pointer bg-white"/>
                    </a>
            </div>
            </div>

        </div>
    )
}