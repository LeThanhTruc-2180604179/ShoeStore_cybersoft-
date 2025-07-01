import React from 'react';

const Banner = () => {
  return (
    <div className="w-full">
      <img
        src="https://www.acfc.com.vn/acfc_wp/wp-content/uploads/2025/04/11f2ea0d-b1c9-479c-bdb6-56dafc099c61-1024x533.png"
        alt="Banner VINI JR. MERCURIAL VAPOR"
        className="w-full h-[220px] md:h-[340px] object-cover object-center block"
        draggable={false}
      />
      <div className="w-full flex flex-col items-center justify-center bg-white py-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-black mb-2 text-center" style={{fontFamily: 'Oswald, Impact, Arial Black, sans-serif'}}>VINI JR. MERCURIAL VAPOR</h1>
        <p className="text-sm md:text-base text-gray-700 mb-4 text-center">Now boarding for the fastest, most fun way to play.</p>
        <button className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition">Shop Mercurial</button>
      </div>
    </div>
  );
};

export default Banner; 