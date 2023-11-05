import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  // Check if products is undefined or empty
  if (!products || !products.data || products.data.length === 0) {
    return (
      <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">No products available</div>
      </div>
    );
  }

  // Limit the products to the first 8 items
  const limitedProducts = products.data.slice(0, 8);

  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {limitedProducts.map((item) => (
          <Product 
            key={item.id} 
            id={item.id} 
            data={item.attributes} 
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

