import React from 'react';

const ProductItem = ({ item, setStateModal }) => {
  const handleClick = () => {
    setStateModal(item);
  };

  return (
    <div
      className="bg-white rounded-md shadow-sm overflow-hidden flex flex-col cursor-pointer w-full max-w-sm mx-auto border border-transparent hover:border-gray-200 transition"
      onClick={handleClick}
    >
      <div className="h-64 bg-[#f5f5f5] flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain h-48 w-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold text-red-600 mb-1">Just In</span>
        <h3 className="text-base font-bold text-black mb-1 leading-tight line-clamp-2 min-h-[40px]">{item.name}</h3>
        <p className="text-xs text-gray-700 mb-1">Men's Shoes</p>
        <p className="text-xs text-gray-500 mb-1">1 Colour</p>
        <span className="text-base font-bold text-black mt-2">{item.price.toLocaleString()}₫</span>
      </div>
    </div>
  );
};

export default ProductItem; 