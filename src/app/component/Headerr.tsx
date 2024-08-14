"use client"
import Logo from "./Logo";
import Nav from "./Nav";

import { SiWhatsapp } from "react-icons/si";

export const Header = () => {
  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-white shadow-md duration-300 menu">
        <div className="max-w-screen-xl m-auto flex items-center justify-between mx-auto p-5 flex-wrap">
          <Logo />
          <Nav />
          <div className="hidden md:flex">
            <div className="mr-5 md:mr-0">
              <button onClick={() => window.location.href = 'https://wa.me/message/XSCAJDMUVQ4CG1'}>
                <SiWhatsapp size={22} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;