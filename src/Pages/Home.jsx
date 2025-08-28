import "../Pages/Home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import young from "../assets/young.png"
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <div className="best">
        <div>
          <h1 className="deal">Best Deals ! Best Prices !</h1>
          <h1 className="new">New👋 Collection For Everyone</h1>
          <button className="shop-now-btn">
            Latest Collection <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div>
          <img src={young} alt="image" />
        </div>
      </div>
      <Product />
    </div>
  );
};

export default Home;
