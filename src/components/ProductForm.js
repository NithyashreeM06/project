import React, { useState } from 'react';
import '../styles/ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!product.name || !product.price || !product.image) {
      alert('Please fill all fields!');
      return;
    }

    // ✅ Validate that the image URL is correct
    if (!product.image.startsWith('http') && !product.image.startsWith('/assets/')) {
      alert('Please enter a valid image URL or a valid path from assets.');
      return;
    }

    addProduct(product);
    setProduct({ name: '', price: '', image: '' }); // ✅ Clear the form after adding
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={product.name} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={product.price} 
        onChange={handleChange} 
        required 
      />
      <input 
        type="text" 
        name="image" 
        placeholder="Image URL (http://example.com/image.jpg or /assets/image.jpg)" 
        value={product.image} 
        onChange={handleChange} 
        required 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

