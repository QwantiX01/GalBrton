import { ReactElement } from "react";

interface BannerProps {
  title: string;
  description: string;
  link: ReactElement;
  image: string;
}

const Banner = ({
  title = "",
  description = "adgfgafdafdg",
  link,
  image,
}: BannerProps) => {
  return (
    <>
      <div
        className="rounded-xl aspect-[2/1] w-full bg-cover saturate-200 bg-center flex flex-col gap-8 justify-end items-start px-14 py-10"
        style={{ backgroundImage: image }}
      >
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="max-w-6xl">{description}</p>
        </div>
        {link}
      </div>
    </>
  );
};

export default Banner;
