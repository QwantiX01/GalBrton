import OutlineLink from "../OutlineLink.tsx";
import { useState } from "react";

interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Product = ({ image, title, price }: ProductProps) => {
  const [zoom, setZoom] = useState("");
  return (
    <div className="flex gap-4 h-24 items-center w-full p-4 px-5 rounded-xl bg-shark-950">
      <div
        onMouseEnter={() => setZoom("scale-[300%]")}
        onMouseLeave={() => setZoom("")}
        className="absolute h-16 aspect-square z-50"
      ></div>
      <img
        className={
          "h-full aspect-square rounded-xl object-cover transition-all " + zoom
        }
        src={image}
        alt={title}
      />
      <div>
        <h1 className="font-medium">{title}</h1>
        <p className="font-medium text-[#CCCCCC]">{price}</p>
      </div>
      <div className="ml-auto hover:scale-110 transition">
        <OutlineLink link={""} isOutline={true} enable={false}>
          Придбати
        </OutlineLink>
      </div>
    </div>
  );
};

export default Product;
