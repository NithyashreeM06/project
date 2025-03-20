import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/Order.css';

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet. Start shopping!</p>
      ) : (
        <div className="orders-list">
          {orders.map((product, index) => (
            <div key={index} className="order-item">
              <img src={product.image} alt={product.name} />
              <div>
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

