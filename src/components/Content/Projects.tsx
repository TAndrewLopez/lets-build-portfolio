import ProjectItem from "../Project/ProjectItem";
import { PROJECT_DATA } from "@/data/projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECT_DATA.map(
            ({ screenshot, projectURL, title, technologies }) => (
              <ProjectItem
                title={title}
                screenshot={screenshot}
                projectURL={projectURL}
                key={title}
                technologies={technologies}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
