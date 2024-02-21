import Banner from "../components/Banner.tsx";
import ProductsHolder from "../components/Products/ProductsHolder.tsx";
import "axios";
import axios from "axios";

const Products = () => {
    const r = axios.get("http://localhost:1323/products")
    console.log(r)

    return (
        <>
            <main className="mx-44 mt-9">
                <Banner
                    title={"Concrete Product Catalog"}
                    description={"We offer a range of colors, textures, and finishes to suit any project. Browse our catalog to find the perfect concrete for your needs."}
                    link={<></>}
                    image={"linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)),url('https://images.aeonmedia.co/images/41fc49d6-850e-4a1c-a93c-bb9cf28eadb9/sized-Bs0u10e0--16317824351_22827fb1b6_o.jpg?width=3840&quality=75&format=auto')"}
                />
                <ProductsHolder/>
            </main>
        </>
    );
};

export default Products;