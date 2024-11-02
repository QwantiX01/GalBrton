import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

export interface ISlide {
  title: string;
  image: string;
  description: string;
}

interface ISlider {
  slides: Array<ISlide>;
}

function ContentSlider({ slides }: ISlider) {
  console.log("Render!");
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
            <button
              key={Math.random()}
              className="absolute left-4 animate-bounce-left"
              onClick={PrevSlide}
            >
              <CircleChevronLeft className="text-black" strokeWidth={3} />
            </button>
            <img
              className="w-full aspect-video rounded-2xl"
              src={image}
              alt=""
            />
            <button
              key={Math.random()}
              className="absolute right-4 animate-bounce-right"
              onClick={NextSlide}
            >
              <CircleChevronRight className="text-black " strokeWidth={3} />
            </button>
          </div>

          <div className="flex-[2] flex-col justify-between ">
            <h1
              key={Math.random()}
              className="font-bold text-6xl mb-6 animate-fade-m"
            >
              {title}
            </h1>
            <p
              key={Math.random()}
              className="text-lg bg-shark-950 text-alto-200 rounded-2xl animate-fade-in p-8"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentSlider;
