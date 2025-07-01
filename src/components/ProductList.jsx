import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ productsData, setStateModal }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productsData.map((product) => (
          <ProductItem
            key={product.id}
            item={product}
            setStateModal={setStateModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList; 