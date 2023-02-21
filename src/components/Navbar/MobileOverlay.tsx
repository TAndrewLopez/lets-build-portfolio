import { NAV_LINKS } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import Socials from "./Socials";

interface MobileOverlayProps {
  navLinks: Array<NAV_LINKS>;
  handleNav: () => void;
  nav: boolean;
}

const MobileOverlay: React.FC<MobileOverlayProps> = ({
  navLinks,
  handleNav,
  nav,
}) => {
  return (
    <div
      className={
        nav
          ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          : "fixed left-[-150%] top-0 ease-in duration-500 p-10"
      }>
      {/* NAV HEADER */}
      <div>
        <div className="flex items-center justify-between w-full">
          <Image
            src="/assets/logo-image.png"
            alt="nav logo"
            width="87"
            height="35"
          />
          <div
            className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            onClick={handleNav}>
            <AiOutlineClose />
          </div>
        </div>
        <div className="my-4 border-b border-gray-300">
          <p className="w-[85%] md:[90%] py-4">
            Let's build something legendary together.
          </p>
        </div>
      </div>
      <div>
        {/* NAV LINKS */}
        <ul className="flex flex-col py-4 uppercase">
          {navLinks.map((item) => (
            <Link href={item.path} key={item.name}>
              <li className="py-4 text-sm">{item.name}</li>
            </Link>
          ))}
        </ul>
        <div className="pt-20">
          <p className="uppercase tracking-widest text-[#5651e5]">
            Let's Connect
          </p>
          {/* SOCIALS */}
          <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
            <Socials pad="3" scale="105" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOverlay;
