import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Pages/Product.css"; 
import Cart from "../Pages/Cart"; 

const Product = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const api = "https://fakestoreapi.com/products";
  const getData = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();
      setUsers(result);
      console.log(result);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  const handleUserClick = (user) => {
    navigate("/cart", { state: user });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
  <div className="product">
    {users.map((user) => (
      <div className="product-card" key={user.id} onClick={() => handleUserClick(user)}>
        <img className="product-image" src={user.image} alt=""/>
        <div className="product-title">{user.title}</div>
        <div className="product-price">From ${user.price}</div>
      </div>
    ))}
  </div>
 );
};

export default Product;
