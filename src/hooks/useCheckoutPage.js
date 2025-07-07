import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useCheckoutPage({ setCart }) {
  const [form, setForm] = useState({ name: '', address: '', phone: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.phone) {
      setError('Vui lòng nhập đầy đủ thông tin.');
      return;
    }
    setCart([]);
    navigate('/success');
  };

  return {
    form,
    error,
    handleChange,
    handleSubmit,
  };
} 