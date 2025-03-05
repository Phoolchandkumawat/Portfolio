import {useGSAP} from '@gsap/react'
import { gsap } from 'gsap';


export default function Navbar(){    
    useGSAP(function(){
        gsap.from('.change',{
            duration: 1,
            y: -50,
            opacity:0,
            ease: "sine.out",
            stagger: {
                amount: 0.2
            }
        })
    });


    return(
        <nav className="w-full h-12 bg-black text-white flex items-center">
            <div className="w-5/6 m-auto items-center flex justify-between change relative">
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