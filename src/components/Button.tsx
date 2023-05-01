interface ButtonProps {
  label: string;
  space?: boolean;
  onClick: () => void;
}

const Button = ({ label, space, onClick }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-2 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e4] to-[#709dff] hover:bg-gradient-to-l text-white
      ${space ? "mr-8" : ""}
      `}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
