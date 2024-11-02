import Banner from "../components/Banner.tsx";
import ProductsHolder from "../components/Products/ProductsHolder.tsx";
import data from "../assets/data.json";
import Filters from "../components/Products/Filters.tsx";
import { useState } from "react";

const Products = () => {
  const [productList, setProductList] = useState(
    Array<{ title: string; price: string }>,
  );
  const concreteProducts = data.products.concrete;
  const otherProducts = data.products.otherMaterials;
  const servicesList = data.products.services;

  return (
    <>
      <Banner
        title="Каталог продукції"
        description="Ми пропонуємо широкий асортимент будівельних матеріалів, включаючи бетон різних марок, пісок, щебінь, а також послуги доставки та міксери для забезпечення будь-яких потреб вашого проекту. Перегляньте наш каталог, щоб знайти оптимальні рішення для ваших будівельних завдань."
        link={<></>}
        image="linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.7)),url('https://images.aeonmedia.co/images/41fc49d6-850e-4a1c-a93c-bb9cf28eadb9/sized-Bs0u10e0--16317824351_22827fb1b6_o.jpg?width=3840&quality=75&format=auto')"
      />
      <section className="mt-8 flex gap-8">
        <Filters
          filters={[concreteProducts, otherProducts, servicesList]}
          setFilters={setProductList}
        />
        <div className="flex-auto mb-12">
          <ProductsHolder products={productList} />
        </div>
      </section>
    </>
  );
};

export default Products;
