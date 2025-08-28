import React, { useState, useEffect } from "react";
import women from "../assets/women.jpg";

const WomenCollaction = () => {
  const [products, setProducts] = useState([]);

  const api = "https://fakestoreapi.com/products/category/women's clothing";

  const getData = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();
      setProducts(result);
      console.log(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleProductClick = (product) => {
    console.log("Product clicked:", product);
  };

  return (
    <div>
      <img className="banner" src={women} alt="banner" />
      <div className="product">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product)}
          >
            <img className="product-image" src={product.image} alt="" />
            <div className="product-title">{product.title}</div>
            <div className="product-price">From ${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollaction;
