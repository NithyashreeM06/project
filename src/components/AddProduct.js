import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/slices/productSlice';
import '../styles/AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) {
      alert('Please fill all fields!');
      return;
    }
    dispatch(addProduct(product)); // Dispatch Redux action
    setProduct({ name: '', price: '', image: '' }); // Reset form
  };

  return (
    <div className="add-product-container">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
          required
        />
        <button type="submit" className="add-product-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;


