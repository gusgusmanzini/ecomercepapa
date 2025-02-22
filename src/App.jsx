import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import products from "./data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "../src/index.css"

function ProductCard({ product }) {
  console.log("Imágenes del producto:", product.images); 

  return (
    <Link to={`/product/${product.id}`} className="product-card">
<Swiper spaceBetween={10} slidesPerView={1}>
  {product.images.map((img, index) => (
    <SwiperSlide key={index}>
      <img
        src={img}
        alt={`${product.name} ${index + 1}`}
        className="product-image"
      />
    </SwiperSlide>
  ))}
</Swiper>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </Link>
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

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2 className="text-center mt-10">Producto no encontrado</h2>;

  return (
    <div className="p-6 flex flex-col items-center text-center  space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <Swiper spaceBetween={10} slidesPerView={1}>
        {product.images && product.images.length > 0 ? (
          product.images.map((img, index) => (
            <SwiperSlide key={index} className="slide-container">
              <img src={img} alt={`${product.name} ${index + 1}`} className="product-image" />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <p>Imagen no disponible</p>
          </SwiperSlide>
        )}
      </Swiper>
      <p className="product-description">{product.description}</p>
      <Link to="/" className="text-blue-500 mt-4 inline-block font-semibold hover:underline">Volver</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;