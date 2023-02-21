import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_LINKS = [
  { Icon: <FaLinkedin /> },
  { Icon: <FaGithub /> },
  { Icon: <AiOutlineMail /> },
  { Icon: <BsFillPersonLinesFill /> },
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
          {item.Icon}
        </div>
      ))}
    </>
  );
};

export default Socials;
