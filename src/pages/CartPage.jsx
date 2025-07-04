import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrashIcon = () => (
  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m2 0v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);
const HeartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
);

const CartPage = ({ cart, removeFromCart, setCart, onAddToWishlist, wishlist }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChangeQty = (id, delta) => {
    setCart((prev) => prev.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      {/* Bag (left) */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Bag</h2>
        {cart.length === 0 ? (
          <p>Your bag is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex gap-4 items-start border-b pb-4 mb-4">
              <div className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-28 h-28 object-cover rounded mb-2" />
                <div className="flex gap-2 mt-1">
                  <button className="text-black bg-white p-2 rounded-full hover:bg-gray-100 transition" onClick={() => removeFromCart(item.id)} title="Remove">
                    <TrashIcon />
                  </button>
                  <button className="border border-black text-black bg-white px-2 py-1 rounded-full hover:border-2 transition" onClick={() => handleChangeQty(item.id, -1)}>-</button>
                  <span className="px-2 flex items-center">{item.quantity}</span>
                  <button className="border border-black text-black bg-white px-2 py-1 rounded-full hover:border-2 transition" onClick={() => handleChangeQty(item.id, 1)}>+</button>
                  <button
                    className={`p-2 rounded-full transition border-2 ${wishlist.find(w => w.id === item.id) ? 'border-pink-500' : 'border-black'} bg-white`}
                    title="Wishlist"
                    onClick={() => onAddToWishlist(item)}
                  >
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke={wishlist.find(w => w.id === item.id) ? '#ec4899' : 'black'}
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between min-h-[112px]">
                <div>
                  <div className="font-bold text-lg mb-1">{item.name}</div>
                  <div className="text-sm text-gray-600 mb-1">Men's Shoes</div>
                  <div className="text-xs text-gray-500 mb-1">{item.description?.split('\n')[0] || ''}</div>
                  <div className="text-xs text-gray-500 mb-1">Size <u>42.5</u></div>
                </div>
                <div className="font-bold text-base text-right">{(item.price * item.quantity).toLocaleString()}₫</div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* Summary (right) */}
      <div className="w-full md:w-80 bg-white rounded-lg shadow p-6 h-fit">
        <h3 className="text-xl font-bold mb-4">Summary</h3>
        <div className="flex justify-between mb-2 text-sm">
          <span>Subtotal <span title="Tổng tiền các sản phẩm">ⓘ</span></span>
          <span>{total.toLocaleString()}₫</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Estimated Delivery &amp; Handling</span>
          <span>Free</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>{total.toLocaleString()}₫</span>
        </div>
        <button className="w-full py-3 mb-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => navigate('/checkout')} disabled={cart.length === 0}>Guest Checkout</button>
        <button className="w-full py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => navigate('/checkout')} disabled={cart.length === 0}>Member Checkout</button>
      </div>
    </div>
  );
};

export default CartPage; 