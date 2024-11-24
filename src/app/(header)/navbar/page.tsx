import React from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import Navbars from "@/app/(header)/navbar/navigationbar/page";


export default function Navbar() {
    return (
        <div>

            {/* HEADER  */}

            <header className="text-gray-900 text-xl body-font bg-indigo-500">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>

                        {/* WEBSITE NAME */}

                        <span className="ml-3 text-xl"><Link className="mr-5 hover:text-gray-100" href="/">MY PORTFOLIO</Link></span>
                    </div>

                    {/* NAVBAR */}



                    <Navbars />








                    {/* <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <ul className="flex">
                            <li><Link className="mr-5 hover:text-gray-100 " href="/">Home</Link></li>
                            <li><Link className="mr-5 hover:text-gray-100" href="/about">About</Link></li>
                            <li><Link className="mr-5 hover:text-gray-100" href="/services">Services</Link></li>
                            <li><Link className="mr-5 hover:text-gray-100" href="/project">Project</Link></li>
                            <li><Link className="mr-5 hover:text-gray-100" href="/contact">Contact</Link></li>
                        </ul>
                    </nav> */}


                    {/* NAVBAR BUTTON RIGHT SIDE */}
                    <Link className="" href="https://github.com/MianMohsinFarrukh" target="blank"><button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">github
                        <FaGithub className="ml-2"></FaGithub>
                    </button></Link>


                </div>
            </header>
        </div>
    );
}
