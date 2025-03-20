import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import HeroBanner from '../components/HeroBanner';
import '../styles/Home.css';

// Import images for static products
import iphone from '../assets/iphone.jpg';
import galaxys23 from '../assets/galaxy.jpg';
import macbookpro from '../assets/macbook.jpg';
import sonyheadphones from '../assets/HP.jpg';
import applewatch from '../assets/watch.jpg';
import airpods from '../assets/AP1.jpg';
import ap1 from '../assets/img 1.jpg';
import ap2 from '../assets/img 2.jpg';
import ap3 from '../assets/img 3.jpg';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  // ✅ Load products and orders from localStorage on page load
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setProducts(savedProducts);
    setOrders(savedOrders);
  }, []);

  // ✅ Function to add a product to orders
  const addToOrders = (product) => {
    const updatedOrders = [...orders, product];
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  // ✅ Static Featured Products
  const featuredProducts = [
    { id: 1, name: 'iPhone 15', price: 999, image: iphone },
    { id: 2, name: 'Samsung Galaxy S23', price: 899, image: galaxys23 },
    { id: 3, name: 'AirPods', price: 199, image: airpods },
    { id: 4, name: 'Headset', price: 456, image: ap1 }
  ];

  // ✅ Static All Products
  const allProducts = [
    { id: 5, name: 'MacBook Pro', price: 1299, image: macbookpro },
    { id: 6, name: 'Sony WH-1000XM4', price: 349, image: sonyheadphones },
    { id: 7, name: 'Apple Watch Series 8', price: 399, image: applewatch },
    { id: 8, name: 'Realmi node 9', price: 457, image: ap2}
  ];

  return (
    <div className="home">
      <HeroBanner />

      {/* ✅ Featured Products (Static) */}
      <h2>Featured Products</h2>
      <div className="product-grid">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToOrders={addToOrders} />
        ))}
      </div>

      {/* ✅ Dynamically Added Products */}
      <h2>Newly Added Products</h2>
      <div className="product-grid">
        {products.length === 0 ? (
          <p>No new products available</p>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index} product={product} addToOrders={addToOrders} />
          ))
        )}
      </div>

      {/* ✅ All Products (Static) */}
      <h2>All Products</h2>
      <div className="product-grid">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToOrders={addToOrders} />
        ))}
      </div>
    </div>
  );
};

export default Home;
