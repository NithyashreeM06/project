import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Orders from './pages/Order';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import AdminDashboard from './components/AdminDashboard';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import ProductCard from './components/ProductCard';
import './App.css';
import './styles/AdminDashboard.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="container responsive-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;




