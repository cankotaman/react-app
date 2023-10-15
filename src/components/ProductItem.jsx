import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src="http://www.nuanscelikkapi.com/img/NKS-1Z.jpg" alt="" />
      </div>
      <div className="product-info">
        <h2>Smart Lock</h2>
        <span>$100</span>
      </div>
    </div>
  );
}

export default ProductItem;
