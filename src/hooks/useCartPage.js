import { useNavigate } from 'react-router-dom';

export default function useCartPage({ cart, setCart, removeFromCart, onAddToWishlist, wishlist }) {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChangeQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  return {
    cart,
    total,
    handleChangeQty,
    removeFromCart,
    onAddToWishlist,
    wishlist,
    navigate,
  };
} 