
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-icon">
        {product.icon}
      </div>

      <h3>{product.name}</h3>

      <p className="category">
        {product.category}
      </p>

      <p>{product.description}</p>

      <h3 className="price">
        ₹{product.price}
      </h3>

      <button className="add-button">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
