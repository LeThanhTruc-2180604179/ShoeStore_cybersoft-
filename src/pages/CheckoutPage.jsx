import React from 'react';
import useCheckoutPage from '../hooks/useCheckoutPage';

const CheckoutPage = (props) => {
  const {
    form,
    error,
    handleChange,
    handleSubmit,
  } = useCheckoutPage(props);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-6">Thanh toán</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Họ và tên" className="border p-2 rounded" />
        <input name="address" value={form.address} onChange={handleChange} placeholder="Địa chỉ" className="border p-2 rounded" />
        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Số điện thoại" className="border p-2 rounded" />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button type="submit" className="bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition">Xác nhận thanh toán</button>
      </form>
    </div>
  );
};

export default CheckoutPage; 