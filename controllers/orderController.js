import Order from '../models/orderModel.js';

// ✅ Create a new order
export const createOrder = async (req, res) => {
  try {
    const { products, totalAmount } = req.body;
    const order = new Order({
      user: req.user._id,
      products,
      totalAmount,
    });

    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all orders (Admin only)
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
