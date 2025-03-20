import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
  totalAmount: { type: Number, required: true },
  isPaid: { type: Boolean, default: false },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
