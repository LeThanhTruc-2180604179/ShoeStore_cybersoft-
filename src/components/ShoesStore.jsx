import React, { useState } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import Banner from './Banner';
import productsData from '../data/products.json';

const ShoesStore = () => {
  const [productDetail, setProductDetail] = useState(null);

  const setStateModal = (product) => {
    setProductDetail(product);
  };

  const closeModal = () => {
    setProductDetail(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] w-full">
      <Banner />
      <div className="w-full flex justify-center">
        <main className="w-full max-w-7xl">
          <ProductList 
            productsData={productsData} 
            setStateModal={setStateModal}
          />
        </main>
      </div>
      <Modal 
        content={productDetail} 
        onClose={closeModal}
      />
    </div>
  );
};

export default ShoesStore; 