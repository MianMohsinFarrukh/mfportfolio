import Image from "next/image";
import React from "react";
import Navbar from "./(header)/navbar/page";
import Link from "next/link";
import Hero from "./(hero)/hero/page";
import Footer from "./(footer)/footer/page";


export default function Home() {
  return (
    <div className="header">
      <div className="navbar">
        <Navbar />
        <Hero />
        <Footer />

      </div>
    </div>
  );
}
