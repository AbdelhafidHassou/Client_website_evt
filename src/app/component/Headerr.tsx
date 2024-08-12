import Logo from "./Logo";
import Nav from "./Nav";

import { RiWhatsappFill } from "react-icons/ri";

export const Header = () => {
  return (
    <>
      <nav className="fixed top-0 z-40 w-full bg-white shadow-md duration-300">
        <div className="max-w-screen-xl m-auto flex items-center justify-between mx-auto p-5 flex-wrap">
          <Logo />
          <Nav />
          <div className="hidden md:flex">
            <div className="mr-5 md:mr-0">
              <a href="tel:+212663804668">
                <RiWhatsappFill size={30} className="text-[#25d366] hover:text-[#128c7e] duration-300 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;