



export default function Navbar(){    
    return(
        <nav className="w-full h-12 bg-black text-white flex items-center">
            <div className="w-5/6 m-auto items-center flex justify-between">
                <span className="text-3xl text-red-600 font-Leckerli">Portfolio</span>
                <ul className="sm:flex hidden w-2/4 justify-between font-Vollkorn"> 
                    <li><a href="" className="hover:text-red-700">Home</a></li>
                    <li><a href=""className="hover:text-red-700">Projects</a></li>
                    <li><a href=""className="hover:text-red-700">Skill</a></li>
                    <li><a href=""className="hover:text-red-700">Contect Me</a></li>
                </ul>
            </div>
        </nav>
    )
}