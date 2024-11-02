import Product from "./Product.tsx";

interface IProduct {
  title: string;
  price: string;
}

const ProductsHolder = ({ products }: { products: Array<IProduct> }) => {
  // const concreteProducts = products.concrete;
  return (
    <div>
      <div className="flex flex-col gap-4 flex-wrap">
        {products.map((value, index) => (
          <Product
            key={index}
            image="https://res.cloudinary.com/baresque/image/upload/f_auto,q_auto,w_2880/v1663147766/Digital-Print/Metallics-Texture-Timber/Polished-Concrete/seraphic-metallic-texture-polished-concrete.jpg"
            title={value.title}
            price={value.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsHolder;
