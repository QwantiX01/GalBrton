import Filters from "./Filters.tsx";
import {useState} from "react";
import {filters} from "../../assets/dataHolder.tsx";

const ProductsHolder = () => {
  const [id, setId] = useState(0)
  return (
    <div>
      <Filters filters={filters} setId={setId} id={id}/>
      {id}
    </div>
  );
};

export default ProductsHolder;