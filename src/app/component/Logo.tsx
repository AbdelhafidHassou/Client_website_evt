import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">ELEVATE</span>
    </Link>
  );
};

export default Logo;