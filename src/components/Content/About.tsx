import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As a highly motivated and adaptable software developer, I thrive on
            tackling new challenges and venturing into uncharted territory. I've
            honed my skills working for several start-up companies, where I've
            had to navigate ambiguous situations with little direction. I'm
            comfortable existing in the gray area and enjoy pioneering the way
            for others.
          </p>
          <p className="py-2 text-gray-600">
            My passion for learning and expanding my knowledge is what drives
            me. Whenever something catches my interest, I dive deep into
            research and explore the finer details of a given topic. I'm
            inspired by what can be achieved and find it fascinating to
            understand how things work at the highest level.
          </p>
          <p className="py-2 text-gray-600">
            With technical expertise in React.js, JavaScript, TypeScript, and
            more, I possess the necessary skills to develop innovative and
            scalable solutions. Additionally, my soft skills, including
            leadership, collaboration, and critical thinking, make me an
            effective team player and problem solver.
          </p>
          <p className="py-2 text-gray-600">
            I'm excited to take on new challenges and contribute my skills to a
            dynamic and innovative organization.
          </p>
          <Link href="/#projects" scroll={false}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
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
