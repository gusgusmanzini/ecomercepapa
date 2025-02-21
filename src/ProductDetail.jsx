import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ProductDetail({ products }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  return (
    <div className="product-detail">
      <Link to="/" className="back-link">
        <ArrowLeft />
        Back to Products
      </Link>
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-detail-price">${product.price.toFixed(2)}</p>
          <p className="product-detail-category">Category: {product.category}</p>
          <p className="product-detail-description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
