import React, { useState, useEffect } from "react";
import banner from "../assets/banner.jpg";
import "../Pages/MenCollaction.css";

const MenCollaction = () => {
  const [users, setUsers] = useState([]);
  const api = "https://fakestoreapi.com/products";

  const getData = async () => {
    try {
      const res = await fetch(api);
      const result = await res.json();

      // ✅ Filter only men's clothing
      const menOnly = result.filter(
        (item) => item.category === "men's clothing"
      );

      setUsers(menOnly);
      console.log(menOnly);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleUserClick = (user) => {
    console.log("Product clicked:", user);
  };

  return (
    <div>
      <img className="banner" src={banner} alt="banner" />
      <div className="product">
        {users.map((user) => (
          <div
            className="product-card"
            key={user.id}
            onClick={() => handleUserClick(user)}
          >
            <img className="product-image" src={user.image} alt="" />
            <div className="product-title">{user.title}</div>
            <div className="product-price">From ${user.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCollaction;
