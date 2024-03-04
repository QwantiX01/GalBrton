interface ProductProps {
    image: string;
    title: string;
    price: string;
    isService: boolean;
}

const Product = ({image, title, price, isService}: ProductProps) => {
    return (
        <div>
            <img className="h-44 w-44 rounded-xl object-cover mb-3" src={image} alt={title}/>
            <h1 className="font-medium">{title}</h1>
            <p className="font-medium text-[#CCCCCC]">{price} {!isService ? <span>₴/м<sup>3</sup></span> :
                <span>₴/год.</span>}  </p>
        </div>
    );
};

export default Product;