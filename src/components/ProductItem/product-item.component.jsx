import "./product-item.style.scss";

const ProductItem = (productDetail) => {
  console.log(productDetail);
  const { imgUrl, name, description } = productDetail;
  return (
    <div className="product-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      />
      <div className="product-detail">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
