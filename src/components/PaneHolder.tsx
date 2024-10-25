import { mainPanesData } from "../assets/dataHolder";
import Pane from "./Pane";

const PaneHolder = () => {
  return (
    <>
      <div className="flex gap-3 justify-between my-8">
        {mainPanesData.map((value, index) => (
          <Pane key={index} {...value} />
        ))}
      </div>
    </>
  );
};

export default PaneHolder;
