import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLocation } from "react-router-dom";
import "../Pages/cart.css";

const Cart = () => {
  const location = useLocation();
  const product = location.state;
  const [users, setUsers] = useState([]);

  if (!product) return <p>No product selected</p>;

  const api = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();
      const filtered = result.filter(
        (item) => item.category === product.category
      );
      setUsers(filtered);
      console.log(filtered);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [product.category]);

  return (
    <div>
      <div className="main-cart">
        <div>
          <img className="small-img" src={product.image} alt="" />
          <img className="small-img" src={product.image} alt="" />
          <img className="small-img" src={product.image} alt="" />
        </div>
        <div>
          <img className="large-img" src={product.image} alt="" />
        </div>
      </div>

      <div className="detail">
        <div>
          <button className="add">Add to cart</button>
          <button className="buy">Buy Now</button>
        </div>

        <div className="detail-info">
          <p>{product.category}</p>
          <p>{product.title}</p>
          <p style={{ color: "rgb(19,190,69)", marginTop: "15px" }}>
            <b>Special price</b>
          </p>
          <p className="price">${product.price}</p>
          <p className="rating">
            Rating : {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <p className="description">{product.description}</p>
          <p className="available">Available offers</p>
          <p>
            <i className="fa-solid fa-tag" style={{ color: "#13be45" }}></i>{" "}
            Bank Offer: 5% cashback on Flipkart Axis Bank Credit Card up to
            ₹4,000 per statement quarter
          </p>
          <p>
            <i className="fa-solid fa-tag" style={{ color: "#13be45" }}></i>{" "}
            Bank Offer: 5% cashback on Axis Bank Flipkart Debit Card up to ₹750
          </p>
          <p>
            <i className="fa-solid fa-tag" style={{ color: "#13be45" }}></i>{" "}
            ₹120 Off On All Banks Credit and Debit Card Transactions
          </p>
          <p>
            <i className="fa-solid fa-tag" style={{ color: "#13be45" }}></i>{" "}
            Special Price: Extra ₹4000 off
          </p>
          <p>
            <i className="fa-solid fa-tag" style={{ color: "#13be45" }}></i>{" "}
            Special Price: Extra 14% off
          </p>
        </div>
      </div>
      <div className="product">
        {users.map((user) => (
          <div className="product-card" key={user.id}>
            <img className="product-image" src={user.image} alt="" />
            <h3 className="product-title">{user.title}</h3>
            <p className="product-price">From ${user.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
