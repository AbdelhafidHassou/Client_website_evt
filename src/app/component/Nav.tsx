"use client"
import { Menu, X } from "lucide-react"
import React, { useState } from 'react'
import Link from 'next/link'
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    console.log("toggleNavbar");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex w-1/3 justify-end items-center'>
        <div className='hidden w-full justify-between md:flex text-base'>
          <Link href="/#agence" className="relative group">
            <span className="hover:text-black">Agence</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/#services" className="relative group">
            <span className="hover:text-black">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/projets" className="relative group">
            <span className="hover:text-black">Projets</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/atelier" className="relative group">
            <span className="hover:text-black">Atelier</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="hover:text-black">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex flex-col items-center basis-full">
          <Link href="/#agence" className="relative group text-base font-medium text-black py-2">
            <span className="hover:text-black">Agence</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/#services" className="relative group text-base font-medium text-black py-2">
            <span className="hover:text-black">Services</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/projets" className="relative group text-base font-medium text-black py-2">
            <span className="hover:text-black">Projets</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/atelier" className="relative group text-base font-medium text-black py-2">
            <span className="hover:text-black">Atelier</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/contact" className="relative group text-base font-medium text-black py-2">
            <span className="hover:text-black">Contact</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <div className="mt-10 text-center">
            <h1 className="font-bold text-lg">Follow us</h1>
            <div className="flex justify-between gap-4 pt-3 text-black">
              <a href="https://www.linkedin.com/company/act-agency-ma/"><GrLinkedin size={24} /></a>
              <a href="tel:+212663804668"><SiWhatsapp size={24} /></a>
            </div>
          </div>
        </div>
      )}

    </>
  )
}

export default Nav