import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import "../src/styles/ProductDetail.css";

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container">Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">
        <ArrowLeft className='arrowleft' />
        Volver a los productos
      </Link>
      <div className="product-detail-content">
        <h1 className=''>{product.name}</h1>
        <div className="product-detail-image">
        <img src={product.images[0]} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1 className=''>{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-category">Category: {product.category}</p>
          <p className="product-detail-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
