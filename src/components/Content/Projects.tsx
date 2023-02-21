import ProjectItem from "../Project/ProjectItem";
import { PROJECT_DATA } from "public/assets/projects";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECT_DATA.map(({ bgImage, projectURL, title }) => (
            <ProjectItem
              title={title}
              bgImage={bgImage}
              projectURL={projectURL}
              key={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
