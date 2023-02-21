import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectItemProps {
  title: string;
  bgImage: StaticImageData;
  projectURL: string;
  technologies: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  bgImage,
  title,
  projectURL,
  technologies,
}) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        src={bgImage}
        alt="project-image"
        className="rounded-xl group-hover:opacity-10"
        priority
      />
      <div className="absolute hidden -translate-x-1/2 -translate-y-1/2 group-hover:block top-1/2 left-1/2">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <p className="pt-2 pb-4 text-center text-white">{technologies}</p>
        <Link href={projectURL}>
          <p className="py-3 text-lg font-bold text-center text-gray-700 bg-white rounded-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
