import { Link } from "react-router-dom";
interface LinkProps {
  link: string;
  children: string;
  isOutline: boolean;
}

const OutlineLink = ({
  link = "#",
  children,
  isOutline = false,
}: LinkProps) => {
  return (
    <>
      <Link
        className={`text-lg font-medium  ${
          isOutline ? "bg-white text-black px-4 py-2 rounded-xl font-black" : ""
        }`}
        to={link}
      >
        {children}
      </Link>
    </>
  );
};

export default OutlineLink;
