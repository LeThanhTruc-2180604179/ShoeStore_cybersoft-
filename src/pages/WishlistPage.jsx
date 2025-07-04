import React from 'react';

const WishlistPage = ({ wishlist, setStateModal, removeFromWishlist }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Danh sách Yêu thích</h2>
      {wishlist.length === 0 ? (
        <div className="text-gray-500 text-center py-12">Chưa có sản phẩm nào trong wishlist.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col relative group hover:shadow-xl transition">
              <button
                className="absolute top-3 right-3 bg-gray-100 hover:bg-red-100 rounded-full p-2 z-10"
                onClick={() => removeFromWishlist(product.id)}
                title="Xóa khỏi wishlist"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4 rounded-lg bg-gray-50" />
              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{product.name}</h3>
                <div className="text-gray-500 text-sm mb-2 line-clamp-1">{product.category}</div>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-base text-gray-900">{product.price.toLocaleString()}₫</span>
                  <button
                    className="ml-2 bg-black text-white rounded-full p-2 hover:bg-gray-800 transition"
                    onClick={() => setStateModal(product)}
                    title="Xem chi tiết"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0h-7.5m7.5 0v10.5A2.25 2.25 0 0113.5 21h-3a2.25 2.25 0 01-2.25-2.25V9m7.5 0h-7.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage; 