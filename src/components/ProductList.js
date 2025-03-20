import React from 'react';
import '../styles/ProductList.css';

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div className="product-list">
      <h3>Added Products</h3>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              {/* ✅ Display product image */}
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button className="delete-btn" onClick={() => deleteProduct(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;


