import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Frontend/components/Header";
import Footer from "./Frontend/components/Footer";
import Home from "./Frontend/views/home/Home";
import Products from "./Frontend/views/products/Products";
import Services from "./Frontend/views/services/Services";
import ItemCard from "./Frontend/components/ItemCard";
import Promotions from "./Frontend/components/Promotions";
import ProductsCategory from "./Frontend/views/products/ProductsCategory";
// import image from "./Frontend/images/image-example.png";

// const promoMessages = [
//   "Place your order",
//   "No more searching store by store",
//   "Remember to share our website with your friends and family",
// ];

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        {/* <Promotions messages={promoMessages} /> */}
        {/* <ItemCard
          image={image}
          title="Handmade Necklace"
          price="29.99"
        /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:name" element={<ProductsCategory />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
