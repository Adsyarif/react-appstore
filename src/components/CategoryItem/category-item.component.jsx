import "./category-item.styles.scss";
import ProductItem from "../ProductItem/product-item.component";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-body-container">
      <h2>{title}</h2>
      <div className="products-container">
        {imageUrl.map((productDetail) => {
          return (
            <ProductItem key={productDetail.id} productDetail={productDetail} />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryItem;
