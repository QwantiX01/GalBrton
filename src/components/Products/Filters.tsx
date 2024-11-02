import Checkbox from "../Forms/Checkbox.tsx";
import OutlineButton from "../OutlineButton.tsx";
import { MutableRefObject, useRef } from "react";

const Filters = ({
  filters,
  setFilters,
}: {
  filters: Array<Array<{ title: string; price: string }>>;
  setFilters: (filters: Array<{ title: string; price: string }>) => void;
}) => {
  const concreteFilter = useRef(null);
  const otherFilter = useRef(null);
  const servicesFilter = useRef(null);

  function clearCheckBoxes(refs: Array<MutableRefObject<null>>) {
    refs.forEach((ref) => {
      ref.current.checked = false;
    });
  }

  function setFilter(refs: Array<MutableRefObject<null>>) {
    let filtered: Array<{ title: string; price: string }> = [];
    refs.forEach((ref) => {
      if (ref.current !== null)
        if (ref.current.checked)
          switch (ref.current.id) {
            case "filter-concrete":
              filters[0].forEach((x) => filtered.push(x));
              break;
            case "filter-other":
              filters[1].forEach((x) => filtered.push(x));
              break;
            case "filter-services":
              filters[2].forEach((x) => filtered.push(x));
              break;
            default:
              break;
          }

      setFilters(filtered);
    });
  }

  return (
    <div className="w-80 h-min bg-shark-950 rounded-xl p-8">
      <h1 className="text-2xl font-medium">Фільтри</h1>
      <p className="border-alto-900 border opacity-25 my-4"></p>
      <fieldset className="mb-4">
        <div className="flex flex-col gap-1 text-lg">
          <Checkbox id={"filter-concrete"} ref={concreteFilter}>
            Бетон
          </Checkbox>
          <Checkbox id={"filter-other"} ref={otherFilter}>
            Інше
          </Checkbox>
          <Checkbox id={"filter-services"} ref={servicesFilter}>
            Послуги
          </Checkbox>
        </div>
      </fieldset>

      <div className="flex gap-1 text-lg justify-between">
        <OutlineButton
          action={() =>
            clearCheckBoxes([concreteFilter, otherFilter, servicesFilter])
          }
          isOutline={false}
          disabled={false}
        >
          Очистити
        </OutlineButton>
        <OutlineButton
          action={() =>
            setFilter([concreteFilter, otherFilter, servicesFilter])
          }
          isOutline={true}
          disabled={false}
        >
          Підтвердити
        </OutlineButton>
      </div>
    </div>
  );
};

export default Filters;
