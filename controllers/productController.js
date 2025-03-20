import Product from '../models/productModel.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const addProduct = async (req, res) => {
  const { name, price, image } = req.body;
  const newProduct = new Product({ name, price, image });
  await newProduct.save();
  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Product deleted' });
};
