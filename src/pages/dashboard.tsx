import Image from "next/image";
import { useEffect, useState } from "react";
import { PROJECT_DATA } from "@/data/projects";
import { ProjectData } from "@/types/types";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const dashboard = () => {
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const currProject = PROJECT_DATA.find(
      (project) => project.projectURL === "/dashboard"
    );
    if (currProject) setProject(currProject);
  }, []);

  return (
    <div className="w-full">
      {project && (
        <>
          {/* BANNER */}
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
            <Image
              className="absolute object-cover z-1"
              fill
              src={project.banner}
              alt="project image"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
              <h2 className="py-2">{project.title}</h2>
              <h3>{project.technologies.join(" | ")}</h3>
            </div>
          </div>
          {/* OVERVIEW */}
          <div className="max-w-[1240px] mx-auto p-2 grid lg:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>{project.title}</p>
              <h2 className="py-2">Overview</h2>
              <p className="py-2">{project.intro}</p>
              <ul>
                {project.keyFeatures.map((feature) => (
                  <li className="flex items-center py-2" key={feature}>
                    <RiRadioButtonFill className="mr-1.5" /> {feature}
                  </li>
                ))}
              </ul>
              {project.liveSite && (
                <button
                  className="px-8 py-2 mt-4 mr-8"
                  onClick={() => window.open(project.liveSite, "_blank")}>
                  Demo
                </button>
              )}
              {project.github && (
                <button
                  className="px-8 py-2 mt-4"
                  onClick={() => window.open(project.github, "_blank")}>
                  Code
                </button>
              )}
            </div>
            {/* TECHNOLOGY LIST */}
            <div className="col-span-4 h-fitp-4 shadow-xl lg:col-span-1 shadow-gray-400 rounded-xl">
              <div className="p-2">
                <p className="pb-2 font-bold text-center">Technologies</p>
                <div className="grid grid-cols-3 lg:grid-cols-1">
                  {project.technologies.map((tech, i) => (
                    <p
                      className="flex items-center py-2 text-gray-600"
                      key={tech}>
                      <RiRadioButtonFill className="mr-1.5" />
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#projects" scroll={false}>
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default dashboard;
