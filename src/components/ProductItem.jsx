import React from 'react';
import useProductItem from '../hooks/useProductItem';

const ProductItem = (props) => {
  const {
    isWishlisted,
    handleWishlistClick,
    handleCartClick,
    handleCardClick,
  } = useProductItem(props);

  return (
    <div
      className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col cursor-pointer w-full max-w-sm mx-auto border border-gray-100 hover:shadow-lg transition relative"
      onClick={handleCardClick}
    >
      <button
        className="absolute top-2 right-2 p-2 border border-black text-black rounded-full flex items-center justify-center bg-white hover:bg-gray-100 transition z-10"
        onClick={handleWishlistClick}
        title={isWishlisted ? 'Đã yêu thích' : 'Thêm vào wishlist'}
      >
        {isWishlisted ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.54 0-2.94.805-3.75 2.018C11.94 4.555 10.54 3.75 9 3.75c-2.761 0-5 2.015-5 4.5 0 7.22 8 11.25 8 11.25s8-4.03 8-11.25z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.54 0-2.94.805-3.75 2.018C11.94 4.555 10.54 3.75 9 3.75c-2.761 0-5 2.015-5 4.5 0 7.22 8 11.25 8 11.25s8-4.03 8-11.25z" />
          </svg>
        )}
      </button>
      <div className="bg-[#f5f5f5] flex items-center justify-center" style={{height: '220px'}}>
        <img
          src={props.item.image}
          alt={props.item.name}
          className="object-contain h-44 w-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold text-red-600 mb-1">Just In</span>
        <h3 className="text-base font-bold text-black mb-1 leading-tight line-clamp-2 min-h-[40px]">{props.item.name}</h3>
        <p className="text-xs text-gray-700 mb-1">Men's Shoes</p>
        <p className="text-xs text-gray-500 mb-1">1 Colour</p>
        <div className="flex items-center gap-2 mt-2 justify-between">
          <span className="text-base font-bold text-black">{props.item.price.toLocaleString()}₫</span>
          <button
            className="p-2 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition"
            onClick={handleCartClick}
            title="Add to Bag"
            style={{minWidth: '36px', minHeight: '36px'}}
          >
            <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem; 