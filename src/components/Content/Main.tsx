import Socials from "../Nav/Socials";

const MainContent: React.FC = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-600 uppercase">
            Let's build something together.
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Andrew</span>
          </h1>
          <h2 className="py-2 text-gray-700">Fullstack Web Developer</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I help cultivate bonds between products and users.
          </p>
          <div className="flex items-center justify-between max-w-[300px] m-auto py-4">
            <Socials pad="6" scale="110" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
