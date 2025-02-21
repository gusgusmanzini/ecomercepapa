import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import ProductDetail from './ProductDetail';
import products from "./data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Swiper spaceBetween={10} slidesPerView={1}>
        {product.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`${product.name} ${index + 1}`} className="product-image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}

function HomePage() {
  const filterProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };

  return (
    <div>
      <header className="header">
        <h1>
          <ShoppingBag style={{ display: "inline-block", marginRight: "10px" }} />
          Nuestros Productos.
        </h1>
      </header>

      <div className="container">
        <div className="sections-container">
          <section className="section">
            <h2 className="section-title">Hormigón</h2>
            <div className="products-grid">
              {filterProductsByCategory("Hormigon").map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function App() {
  return(
    <Router>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
    </Router>
  );
}



export default App;
