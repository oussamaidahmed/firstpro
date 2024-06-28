import Image from "next/image";
import logo from "../../public/images/rpLogoWhite.png";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
  return (
    <div className="flex justify-between items-center lg:p-[40px] p-[50px] bg-black ">
      <Image
        src={logo}
        alt="Vercel Logo"
        width={60}
        height={60}
        className="mr-4 "
      />

      <BiMenuAltRight size={60} color="white" />
    </div>
  );
}
