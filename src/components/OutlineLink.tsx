import { Link } from "react-router-dom";

interface LinkProps {
  link: string;
  children: string;
  isOutline: boolean;
  enable: boolean;
}

const OutlineLink = ({
  link = "#",
  children,
  isOutline = false,
  enable = true,
}: LinkProps) => {
  const styles = `text-lg font-medium  ${
    isOutline ? "bg-alto-200 text-black px-4 py-2 rounded-lg font-black" : ""
  }`;
  return enable ? (
    <>
      <Link className={styles} to={link}>
        {children}
      </Link>
    </>
  ) : (
    <div className={styles} style={{ backgroundColor: "gray" }}>
      {children}
    </div>
  );
};

export default OutlineLink;
