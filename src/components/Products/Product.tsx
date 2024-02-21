interface ProductProps {
  image: string;
  title: string;
  price: string;
}

const Product = ({image, title, price}: ProductProps) => {
  return (
    <div>
      <img className="h-44 w-44 rounded-xl object-cover mb-3" src={image} alt={title}/>
      <h1 className="font-medium">{title}</h1>
      <p className="font-medium">{price}₴/м<sup>3</sup></p>
    </div>
  );
};

export default Product;