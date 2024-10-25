import { useState } from "react";
import leftArrow from "../assets/arrow-alt-circle-left.svg";
import rightArrow from "../assets/arrow-alt-circle-right.svg";
export interface ISlide {
  title: string;
  image: string;
  description: string;
}

interface ISlider {
  slides: Array<ISlide>;
}

function ContentSlider({ slides }: ISlider) {
  const [id, setId] = useState(0);
  const image = slides[id].image;
  const title = slides[id].title;
  const description = slides[id].description;

  function NextSlide() {
    setId(id + 1 > slides.length - 1 ? 0 : id + 1);
  }

  function PrevSlide() {
    setId(id - 1 < 0 ? slides.length - 1 : id - 1);
  }

  return (
    <div className="mt-8">
      <div>
        <div className="flex gap-6">
          <div className="flex-[3] w-full flex relative items-center">
            <button className="absolute left-4" onClick={PrevSlide}>
              <img
                className="w-6 h-6 bg-white rounded-full"
                src={leftArrow}
                alt=""
              />
            </button>
            <img
              className="w-full aspect-video rounded-2xl"
              src={image}
              alt=""
            />
            <button className="absolute right-4" onClick={NextSlide}>
              <img
                className="w-6 h-6 bg-white rounded-full"
                src={rightArrow}
                alt=""
              />
            </button>
          </div>
          <div className="flex-[2] flex-col justify-between">
            <h1 className="font-bold text-6xl mb-6 ">{title}</h1>
            <p className="text-lg border-white border-2 border-solid rounded-2xl  p-8">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
