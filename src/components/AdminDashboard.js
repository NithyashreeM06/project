import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // ✅ Load saved products from local storage on page load
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(savedProducts);
  }, []);

  // ✅ Function to add a new product
  const addProduct = (product) => {
    if (!product.image.startsWith('http')) {
      alert('Please enter a valid image URL.');
      return;
    }
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    navigate('/'); // ✅ Redirect to Home after adding
  };
  // ✅ Function to delete a product
  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} deleteProduct={deleteProduct} />
    </div>
  );
};


export default AdminDashboard;





