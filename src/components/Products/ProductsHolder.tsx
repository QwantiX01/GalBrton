import Filters from "./Filters.tsx";
import {useState} from "react";
import {filters} from "../../assets/dataHolder.tsx";
import Product from "./Product.tsx";

const ProductsHolder = () => {
  const [id, setId] = useState(0)
  return (
    <div>
      <Filters filters={filters} setId={setId} id={id}/>
      {id}
      <Product image={"https://e-cis.info/upload/iblock/9e6/tqv6x9gvdffihi00kfq1xslpzqmumra5.jpg"} title={"Бетон"}
               price={"123"}/>
    </div>
  );
};

export default ProductsHolder;