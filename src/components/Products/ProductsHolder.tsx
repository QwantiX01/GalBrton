import Filters from "./Filters.tsx";
import {useState} from "react";
import {filters, products} from "../../assets/dataHolder.tsx";
import Product from "./Product.tsx";

const ProductsHolder = () => {
    const [id, setId] = useState(0)

    const productionArray: { type: string, title: string, price: string }[] = [];
    const serviceArray: { type: string, title: string, price: string }[] = [];

    products.map(value => {
        switch (value.type) {
            case "production":
                productionArray.push(value)
                break;
            case "service":
                serviceArray.push(value)
                break;
        }
    })
    const filteredProducts = [products, productionArray, serviceArray]
    return (
        <div>
            <Filters filters={filters} setId={setId} id={id}/>
            <div className="flex gap-4 flex-wrap">
                {
                    filteredProducts[id].map((value, index) => <Product
                        key={index}
                        isService={value.type == "service"}
                        image={"https://th.bing.com/th/id/OIG1.e0WLJJJloplQ7wT9y6Nc?w=1024&h=1024&rs=1&pid=ImgDetMain"}
                        title={value.title} price={value.price}/>)
                }
            </div>
        </div>
    );
};

export default ProductsHolder;