import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";

function Footer() {
  return (
    <>
    <footer className="bg-white w-auto m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-black">ELEVATE</h1>
                </div>
                <ul className="flex items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 gap-3">
                    <li>
                        <a href="https://web.facebook.com/" className="hover:underline me-4 md:me-6 hover:text-[#213E60] duration-300"><GrFacebookOption size={20}/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" className="hover:underline me-4 md:me-6 hover:text-[#213E60] duration-300"><GrInstagram size={20}/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" className="hover:underline me-4 md:me-6 hover:text-[#213E60] duration-300"><GrLinkedin size={20}/></a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2024 ELEVATE. All Rights Reserved.
                Created by <a href="https://www.linkedin.com/in/abdelhafidhassou" target="_blank" rel="noopener noreferrer">DIFAZ</a>
            </p>
        </div>
    </footer>
    </>
  )
}

export default Footer