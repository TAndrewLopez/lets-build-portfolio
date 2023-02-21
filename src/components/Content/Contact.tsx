import Image from "next/image";
import Link from "next/link";
import contactImage from "../../../public/assets/contact.jpg";
import ContactForm from "../Form/ContactForm";
import Socials from "../Navbar/Socials";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2>Get In Touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="w-full h-full col-span-3 p-4 shadow-xl rounded-xl lg:col-span-2 shadow-gray-400">
            <div className="h-full lg:p-4">
              <div>
                <Image
                  className="duration-300 ease-in rounded-xl hover:scale-105"
                  src={contactImage}
                  alt="contact image"
                />
              </div>
              <div>
                <h2 className="py-2">Name Here</h2>
                <p>Fullstack Web Developer</p>
                <p className="py-4">
                  I'm always willing to discuss potential opportunities to work
                  together. Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="pt-8 uppercase">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <Socials pad="6" scale="110" />
                </div>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <ContactForm />
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
              <HiOutlineChevronDoubleUp size={30} className="text-[#5651e5]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
