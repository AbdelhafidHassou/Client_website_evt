import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import Image from 'next/image';

function Footer() {
    return (
        <>
            <footer className="bg-white py-8">
                <div className="max-w-screen-xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between mb-8">
                        <div className="flex items-center mb-6 sm:mb-0">
                            <Image src="/logo.png" alt="Creative Studio LUNA" width={180} height={100} />
                        </div>
                        <ul className="flex gap-4 text-gray-600">
                            <li>
                                <a href="https://www.linkedin.com/company/act-agency-ma/" className="text-gray-600 hover:text-[#213E60] transition duration-300" aria-label="LinkedIn">
                                    <GrLinkedin size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200" />
                    <p className="text-sm text-gray-500 text-center">
                        © 2024 Luna Creative Studio. All Rights Reserved. | Created by <a href="https://www.linkedin.com/in/abdelhafidhassou" target="_blank" rel="noopener noreferrer" className="text-[#213E60] hover:underline">DIFAZ</a>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer