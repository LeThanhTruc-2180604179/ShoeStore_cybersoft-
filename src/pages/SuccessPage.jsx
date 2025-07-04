import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-4 text-green-600">Thanh toán thành công!</h2>
      <p className="mb-6 text-lg">Cảm ơn bạn đã mua hàng tại ShoeStore.</p>
      <button onClick={() => navigate('/')} className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition">Trở về trang chủ</button>
    </div>
  );
};

export default SuccessPage; 