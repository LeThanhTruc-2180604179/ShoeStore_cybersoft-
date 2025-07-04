import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import CartPage from './pages/CartPage';
import Modal from './components/Modal';
import productsData from './data/products.json';
import WishlistPage from './pages/WishlistPage';

function App() {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });
  const [stateModal, setStateModal] = useState(null);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setStateModal(null);
  };

  const handleAddToWishlist = (product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev;
      return [...prev, { ...product }];
    });
    setStateModal(null);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} setStateModal={setStateModal} products={productsData} wishlist={wishlist} />
      {location.pathname === '/' && <Banner />}
      <div className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<ProductList products={productsData} onAddToCart={handleAddToCart} setStateModal={setStateModal} onAddToWishlist={handleAddToWishlist} wishlist={wishlist} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={handleRemoveFromCart} setCart={setCart} />} />
          <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} setStateModal={setStateModal} removeFromWishlist={handleRemoveFromWishlist} />} />
        </Routes>
      </div>
      <Modal content={stateModal} onClose={() => setStateModal(null)} onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />
    </div>
  );
}

export default App;
