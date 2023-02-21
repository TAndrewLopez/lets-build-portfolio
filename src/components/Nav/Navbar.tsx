import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MobileOverlay from "./MobileOverlay";

const NAV_LINKS = [
  { path: "/#home", name: "home" },
  { path: "/#about", name: "about" },
  { path: "/#skills", name: "skills" },
  { path: "/#projects", name: "projects" },
  { path: "/#contact", name: "contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  // TODO: BASED ON THE PATH CHANGE SOME STYLES
  return (
    <div
      className={
        shadow ? "fixed z-50 w-full h-20 shadow-xl" : "fixed z-50 w-full h-20"
      }>
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
        <Link href="/#home" scroll={false}>
          <Image
            src="/assets/alt-logo-image.png"
            alt="nav logo"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            {NAV_LINKS.map((item) => (
              <Link href={item.path} key={item.name} scroll={false}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <div
        className={
          nav
            ? "md:hidden fixed top-0 bottom-0 left-0 w-full h-screen bg-black/70"
            : ""
        }>
        <MobileOverlay navLinks={NAV_LINKS} handleNav={handleNav} nav={nav} />
      </div>
    </div>
  );
};

export default Navbar;
