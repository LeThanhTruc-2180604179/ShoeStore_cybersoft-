import React from 'react';

const Modal = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700 font-bold focus:outline-none"
          onClick={onClose}
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-xl p-4 md:w-1/2">
            <img src={content.image} alt={content.name} className="object-contain h-56 w-full" />
          </div>
          <div className="flex-1 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{content.name}</h2>
            <p className="text-lg font-semibold text-orange-600 mb-2">{content.price.toLocaleString()}₫</p>
            <p className="text-gray-500 mb-2">Số lượng: {content.quantity}</p>
            <div className="mb-2">
              <span className="font-semibold">Mô tả:</span>
              <p className="text-gray-700 text-sm whitespace-pre-line">{content.description}</p>
            </div>
            <div className="mb-4">
              <span className="font-semibold">Mô tả ngắn:</span>
              <p className="text-gray-700 text-sm whitespace-pre-line">{content.shortDescription}</p>
            </div>
            <div className="flex gap-3 mt-auto">
              <button className="flex-1 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">Thêm vào giỏ</button>
              <button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition">Yêu thích</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal; 