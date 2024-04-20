import React from 'react';
import Product from './Product';
import Bar3 from './Bar3';
import Bar4 from './Bar4';
import '../styles/productPage.css'; 

function ProductPage() {
  return (
    <div className='productPage'>
      <div className='productSection1'>
        <Bar3/>
        <div className='product-wrapper'>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          
        </div>
      </div>
      <Bar4/>
    </div>
  );
}

export default ProductPage;
