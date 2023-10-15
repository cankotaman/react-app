import "./ProductItem.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <span>{productPrice}₺</span>
        <br />
        <button>Add to Card</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
