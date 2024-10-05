import About from "@/app/(mypages)/about/page";
import React from "react";
import Services from "@/app/(mypages)/services/page"
import Contact from "@/app/(mypages)/contact/page";
import Link from "next/link";

export default function Navbar() {
    return (
        <div><header className="text-gray-600 body-font bg-indigo-500">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">MY PORTFOLIO</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/about" >Look</Link>
                    <a className="mr-5 hover:text-gray-900" href="/">Home</a>
                    <a className="mr-5 hover:text-gray-900" href="/about">About</a>
                    <a className="mr-5 hover:text-gray-900" href="/services">Services</a>
                    <a className="mr-5 hover:text-gray-900" href="/contact">Contact</a>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header></div>
    );
}
