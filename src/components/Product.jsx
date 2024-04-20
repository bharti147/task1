import React from 'react'
import '../styles/product.css'
import tshirt1 from '../assets/tshirt1.png'
import tshirt2 from '../assets/tshirt2.png'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import details from '../assets/details.png'

function Product() {
  return (
    <div className='product'>
      <img src={tshirt2}/>
      <div className='part1'>
        {/* <span>Mustard Yellow</span>
        <span>Multiplier : 5</span> */}
        <img src={details}/>
      </div>
      <div className='part2'>
        <h5>Item Name</h5>
        <h3>Mens white check Shirt<br/> regular fit</h3>
        <h5>Design Number</h5>
        <h4>DN098234839</h4>
      </div>
      <div className='part3'>
        <span>XL</span>
        <span>Instock: 100</span>
      </div>
      <div className='part4'>
        <span>₹ 799.67</span>
        <span style={{textDecoration:"line-through", color:" #A6A8AC"} }>₹ 1299.67</span>
      </div>
      <div className='part5'>
        <button><img src={product1}/></button>
        <div className='part5-subpart'>
          <h5>XL</h5>
          <span>+5 More</span>
          <img src={product2}/>
        </div>
      </div>
    </div>
  )
}

export default Product
