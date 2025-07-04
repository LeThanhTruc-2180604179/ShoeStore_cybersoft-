import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onAddToCart, setStateModal, onAddToWishlist, wishlist }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div id={`product-${product.id}`} key={product.id}>
            <ProductItem
              item={product}
              onAddToCart={onAddToCart}
              setStateModal={setStateModal}
              onAddToWishlist={onAddToWishlist}
              wishlist={wishlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 