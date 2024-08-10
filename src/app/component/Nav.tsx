"use client"
import {Menu, X} from "lucide-react"
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
        <Link href="/#agence" className="hover:text-[#213E60]">Agence</Link>
        <Link href="/#services" className="hover:text-[#213E60]">Services</Link>
        <Link href="/projets" className="hover:text-[#213E60]">Projets</Link>
        <Link href="/atelier" className="hover:text-[#213E60]">Atelier</Link>
        <Link href="/contact" className="hover:text-[#213E60]">Contact</Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar}>
          {isOpen ? <X /> : <Menu/>}
        </button>
      </div>
    </nav>
    {isOpen && (
      <div className="flex flex-col items-center basis-full">
        <Link href="/#agence" className="hover:border-[#213E60] pt-11 border-b pb-2 duration-300">Agence</Link>
        <Link href="/#services" className="hover:border-[#213E60] pt-11 border-b pb-2 duration-300">Services</Link>
        <Link href="/projets" className="hover:border-[#213E60] pt-11 border-b pb-2 duration-300">Projets</Link>
        <Link href="/atelier" className="hover:border-[#213E60] pt-11 border-b pb-2 duration-300">Atelier</Link>
        <Link href="/contact" className="hover:border-[#213E60] pt-11 border-b pb-2 duration-300">Contact</Link>
        <div className="mt-10 text-center">
          <h1 className="font-bold">Follow us</h1>
          <div className="flex justify-between gap-3 pt-3">
            <GrFacebookOption size={20}/>
            <GrInstagram size={20}/>
            <GrLinkedin size={20}/>
            <a href="tel:+212708053420">
              <SiWhatsapp size={20}/>
            </a>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default Nav