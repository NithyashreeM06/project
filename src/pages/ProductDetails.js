import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToOrders } from '../redux/ordersSlice';
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const product = location.state?.product;

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleBuyNow = () => {
    dispatch(addToOrders(product)); // Add product to orders list
    alert('Product added to your orders!'); // Confirmation message
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="details-content">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p>{product.description || "No description available."}</p>
        <button onClick={handleBuyNow} className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;




