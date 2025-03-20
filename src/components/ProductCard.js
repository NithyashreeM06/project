import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`, { state: { product } }); // Pass product data
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-title">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button onClick={handleViewDetails} className="view-details-btn">
        View Details
      </button>
    </div>
  );
};

export default ProductCard;




