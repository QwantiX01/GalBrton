import { mainPanesData } from "../assets/dataHolder";
import Pane from "./Pane";

interface PaneHolderProps {}

const PaneHolder = ({}: PaneHolderProps) => {
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
