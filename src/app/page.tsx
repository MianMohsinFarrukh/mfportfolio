import React from "react";
import Navbar from "./(header)/navbar/page";
import Footer from "./(footer)/footer/page";
import Hero from "./(hero)/hero/page";


export default function Home() {
  return (
    <div className="header">
      <div className="navbar">
        {/* <Navbar /> */}
        <Hero/>
        

      </div>
    </div>
  );
}
