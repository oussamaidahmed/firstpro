import Image from "next/image";
import logo from "../../public/images/rpLogoWhite.png";
import FullScreenNavBar from '@/components/FullScreenNavBar'


export default function Header() {
  return (
    <div className="fixed h-[100px] z-50 w-full flex justify-between items-center lg:p-[40px] p-[50px] bg-black ">
      <Image
        src={logo}
        alt="Vercel Logo"
        width={60}
        height={60}
        className="mr-4 "
      />

      <div>
        <FullScreenNavBar />
      </div>
    </div>
  );
}
