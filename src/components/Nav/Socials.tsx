import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    Icon: <FaLinkedin size={20} color="#5651e5" />,
    path: "https://www.linkedin.com/in/tandrewlopez/",
  },
  {
    Icon: <FaGithub size={20} color="#5651e5" />,
    path: "https://github.com/TAndrewLopez?tab=repositories",
  },
  { Icon: <AiOutlineMail size={20} color="#5651e5" /> },
  { Icon: <BsFillPersonLinesFill size={20} color="#5651e5" /> },
];

interface SocialsProps {
  scale: string;
  pad: string;
}

const Socials: React.FC<SocialsProps> = ({ pad, scale }) => {
  return (
    <>
      {SOCIAL_LINKS.map((item, i) => (
        <div
          className={`p-${pad} duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-${scale}`}
          key={i}>
          <a>{item.Icon}</a>
        </div>
      ))}
    </>
  );
};

export default Socials;
