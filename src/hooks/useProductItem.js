export default function useProductItem({ item, onAddToCart, onAddToWishlist, wishlist, setStateModal }) {
  const isWishlisted = wishlist?.some((w) => w.id === item.id);

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    onAddToWishlist(item);
  };

  const handleCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(item);
  };

  const handleCardClick = () => {
    if (setStateModal) setStateModal(item);
  };

  return {
    isWishlisted,
    handleWishlistClick,
    handleCartClick,
    handleCardClick,
  };
} 