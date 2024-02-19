import React from "react";

interface FilterProps {
  filters: { id: number, title: string }[];
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>
}

const Filters = ({filters, id, setId}: FilterProps) => {
  return (
    <div className="flex gap-4 border-solid border-b-[1px] border-b-gray-700 my-6">
      {
        filters.map((filter, index) =>
          (
            <div key={index} onClick={() => setId(filter.id)}>
              <p
                className={"inline font-medium cursor-pointer text-xl leading-8 underline decoration-2 underline-offset-8 decoration-solid decoration-white"}
                style={id === filter.id ? {fontWeight: "bold"} : {fontWeight: "normal"}}
              >
                {id === filter.id ? "• " + filter.title : filter.title}
              </p>
            </div>
          )
        )
      }
    </div>
  );
};

export default Filters;