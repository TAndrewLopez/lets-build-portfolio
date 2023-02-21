import Image from "next/image";

const About = () => {
  return (
    <div className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I'm a Fullstack Web Developer who's passion for technology drives
            innovative solutions to everyday problems. Whether I'm working at a
            start-up or larger corporation, my ability to quickly adapt has
            become an intrinsic skill for the world of technology.
          </p>
          <p className="py-2 text-gray-600">
            I could attribute my interest for tech to when I purchased the first
            iPhone in 2007. It led me to discovering something called
            "jailbreaking", which installed 3rd party applications on the iPhone
            before it had an app store. Back then, I was only utilizing these
            tools to help cater my user experience. Today, I find myself
            building modern web solutions with a strong focus on delivering the
            best user experience without sacrificing valued features.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <Image
            alt="about-image"
            src="/assets/workspace.jpg"
            width="300"
            height="300"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
