import { SKILLS } from "../icons";

const Skills = () => {
  return (
    <div className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {SKILLS.map(({ Icon, name }) => (
            <div
              className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105"
              key={name}>
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="w-16">
                  <Icon />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
