import Image from "next/image";
import { useEffect, useState } from "react";
import { PROJECT_DATA } from "@/data/projects";
import { ProjectData } from "@/types/types";
import { RiRadioButtonFill } from "react-icons/ri";

const discourse = () => {
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const discourse = PROJECT_DATA.find(
      (project) => project.projectURL === "/discourse"
    );

    if (discourse) {
      setProject(discourse);
    }
  }, []);

  return (
    <div className="w-full">
      {project && (
        <>
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
            <Image
              className="absolute object-cover z-1"
              fill
              src={project.screenshot}
              alt="project image"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
              <h2 className="py-2">{project.title}</h2>
              <h3>{project.technologies.join(" | ")}</h3>
            </div>
          </div>
          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                Possibly list off, why I enjoyed doing this project. Why I chose
                this project. What obstacles you faced. What you learned. etc.
              </p>
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
              <button className="px-8 py-2 mt-4">Code</button>
            </div>
            <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
              <div className="p-2">
                <p className="pb-2 font-bold text-center">Technologies</p>
                <div>
                  {project.technologies.map((tech) => (
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
          </div>
        </>
      )}
    </div>
  );
};

export default discourse;
