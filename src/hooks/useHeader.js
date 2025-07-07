import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useHeader({ setStateModal, products }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const inputRef = useRef(null);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (search.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setResults(filtered);
  }, [search, products]);

  const handleResultClick = (product) => {
    setStateModal(product);
    setSearch('');
    setResults([]);
  };

  return {
    search,
    setSearch,
    showResults,
    setShowResults,
    inputRef,
    results,
    handleResultClick,
    navigate,
  };
} 