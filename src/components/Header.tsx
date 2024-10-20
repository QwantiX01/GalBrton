import { headerLinks } from "../assets/dataHolder";
import OutlineLink from "./OutlineLink";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <>
      <header className="flex justify-between w-full border-b-slate-800 border-b px-10">
        {" "}
        <p className="font-bold text-3xl my-5 ">Galbeton</p>
        <div className="flex items-center gap-9">
          {headerLinks.map(({ content, link, outline = false }, index) => (
            <OutlineLink key={index} link={link} isOutline={outline}>
              {content}
            </OutlineLink>
          ))}
        </div>
      </header>
    </>
  );
};

export default Header;
