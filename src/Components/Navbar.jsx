import { useState } from "react"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"
import cart from "../assets/cart.png"
import "../Components/Navbar.css";
import "../index.css"

const Navbar = () => {
  const [menu,setMenu] = useState("home")
  return (
    <div className="navbar">
        <div><img className="h-15" src={logo} alt="logo"/></div>
        <ul className="nav-menu">
          <li onClick={()=>{setMenu("home")}}><Link to="/">Home{menu==="home" ? <hr style={{ border: "1px solid black"}}/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("men")}}><Link to="/men">Men{menu==="men" ? <hr style={{ border: "1px solid black"}}/>:<></>}</Link></li>
          <li onClick={()=>{setMenu("women")}}><Link to="/women">Women{menu==="women" ? <hr style={{ border: "1px solid black"}}/>:<></>}</Link></li>
          <input className="search" type="text" placeholder="Search"></input>
        </ul>
        <div className="nav-cart">
            <button className="login">Login</button>
            <Link to="/cart"><img src={cart} alt="cart"/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar