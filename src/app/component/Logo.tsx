import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
      <Image src={"/logo.png"} alt="Creative Studio LUNA" width={150} height={100}/>
    </Link>
  );
};

export default Logo;