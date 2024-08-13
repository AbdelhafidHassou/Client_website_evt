"use client";
import { Menu, X } from "lucide-react";
import React, { useState } from 'react';
import Link from 'next/link';
import { GrLinkedin } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='flex w-1/3 justify-end items-center'>
        <div className='hidden w-full justify-between md:flex text-base gap-4'>
          <Link href="/#agence" className="relative group">
            <span className="hover:text-black">L'AGENCE</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/#services" className="relative group">
            <span className="hover:text-black">SERVICES</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/projets" className="relative group">
            <span className="hover:text-black">PROJETS</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/atelier" className="relative group">
            <span className="hover:text-black">L'ATELIER</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="hover:text-black">CONTACT</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-xs bg-white p-5 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50 md:hidden`}
      >
        <button className="absolute top-5 right-5" onClick={toggleNavbar}>
          <X />
        </button>
        <div className="flex flex-col items-center mt-10">
          <Link href="/#agence" className="text-black text-base font-medium uppercase py-2" onClick={toggleNavbar}>
            L'AGENCE
          </Link>
          <Link href="/#services" className="text-black text-base font-medium uppercase py-2" onClick={toggleNavbar}>
            SERVICES
          </Link>
          <Link href="/projets" className="text-black text-base font-medium uppercase py-2" onClick={toggleNavbar}>
            PROJETS
          </Link>
          <Link href="/atelier" className="text-black text-base font-medium uppercase py-2" onClick={toggleNavbar}>
            L'ATELIER
          </Link>
          <Link href="/contact" className="text-black text-base font-medium uppercase py-2" onClick={toggleNavbar}>
            CONTACT
          </Link>
          <div className="mt-10 text-center">
            <h1 className="font-bold text-lg uppercase">Get in touch</h1>
            <div className="flex justify-between gap-4 pt-3 text-black">
              <a href="https://www.linkedin.com/company/act-agency-ma/"><GrLinkedin size={24} /></a>
              <button onClick={() => window.location.href = 'https://wa.me/message/XSCAJDMUVQ4CG1'}>
                <SiWhatsapp size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
