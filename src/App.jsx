import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import MenCollaction from "./Pages/MenCollaction"
import Cart from "./Pages/Cart"
import WomenCollaction from "./Pages/WomenCollacrion"
import Footer from "./Pages/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MenCollaction />} />
        <Route path="/women" element={<WomenCollaction />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
