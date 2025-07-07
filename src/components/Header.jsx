import React from 'react';
import useHeader from '../hooks/useHeader';

const Header = ({ cartCount, setStateModal, products, wishlist }) => {
  const {
    search,
    setSearch,
    showResults,
    setShowResults,
    inputRef,
    results,
    handleResultClick,
    navigate,
  } = useHeader({ setStateModal, products });

  return (
    <header className="flex items-center w-full bg-white shadow-md px-6 py-3 sticky top-0 z-30">
      {/* Logo */}
      <div className="cursor-pointer flex items-center mr-auto" onClick={() => navigate('/')}> 
        {/* Nike SVG logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="h-8 w-auto"
          style={{ maxWidth: 48, maxHeight: 24 }}
        />
      </div>
      {/* Search + icons group */}
      <div className="flex items-center gap-4 ml-auto relative">
        <div className="flex items-center relative">
          <input
            ref={inputRef}
            className="border border-gray-200 rounded-l-full px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-black/20 transition text-base h-12"
            placeholder="Search"
            value={search}
            onChange={e => { setSearch(e.target.value); setShowResults(true); }}
            onFocus={() => setShowResults(true)}
            style={{ borderRight: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          />
          <button
            className="bg-gray-100 px-4 h-12 rounded-r-full border-l flex items-center border-gray-200"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            onClick={() => inputRef.current && inputRef.current.focus()}
          >
            <svg width="24" height="24" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-2-2"/></svg>
          </button>
          {/* Kết quả tìm kiếm */}
          {showResults && results.length > 0 && (
            <div className="absolute left-0 right-0 bg-white shadow-lg rounded-b-lg z-30 mt-1 max-h-72 overflow-y-auto">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleResultClick(product)}
                >
                  <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded" />
                  <span className="font-medium text-gray-800">{product.name}</span>
                  <span className="ml-auto text-sm text-gray-500">{product.price.toLocaleString()}₫</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center relative" onClick={() => navigate('/wishlist')}>
          <svg width="24" height="24" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.5 16 21 16 21H12Z"/></svg>
          {wishlist && wishlist.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 min-w-[18px] text-center">{wishlist.length}</span>
          )}
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center relative" onClick={() => navigate('/cart')}>
          <svg width="24" height="24" fill="none" stroke="gray" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 min-w-[18px] text-center">{cartCount}</span>}
        </button>
        {/* Click ngoài sẽ ẩn kết quả */}
        {showResults && (
          <div className="fixed inset-0 z-40" onClick={() => setShowResults(false)} />
        )}
      </div>
    </header>
  );
};

export default Header; 