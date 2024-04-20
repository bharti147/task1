import React from 'react'
import '../styles/bar4.css'
import Frame from '../assets/Frame.png'
import right from '../assets/right.png'
import left from '../assets/left.png'
import discount from '../assets/discount.png'
function Bar4() {
  return (
    <div className='bar4'>
      <div className='bar4-box'>
        <img src={Frame} alt="users"/>
        <section>
            <h2>Customer</h2>
            <h1>SRG India Pvt Ltd</h1>
        </section>
      </div>
      <div className='bar4-box'>
        <img src={right} alt="users"/>
        <section>
            <h2>Delivery Location</h2>
            <h1>Gurugram-017838</h1>
        </section>
      </div>
      <div className='bar4-box'>
        <img src={left} alt="users"/>
        <section>
            <h2>Dispatch Location</h2>
            <h1>Gurugram-017838</h1>
        </section>
      </div>
     
       
  <button className='button'>Show More</button>
 
 
  <div className='summaryBox'>
  <hr style={{color:"#EEEFEF"}}/>
    <h2>SUMMARY</h2>
    <div className='summary-boxes main'>
        <h4> #SO_DRAFT_00000017_2024</h4>
    </div>
    <div className='summary-boxes'>
        <p>Total Quantity</p>
        <span>21</span>
    </div>
    <div className='summary-boxes'>
    <p>Total Items</p>
        <span>7</span>
    </div>
    <div className='summary-boxes'>
    <p>Order Quantity</p>
        <span>21</span>
    </div>
    <div className='total'>
    <p>Total Bag Price</p>
    <span>₹ 23031.808</span>
     </div>
    
  </div>
  <div className='summaryBox'>
  <hr style={{color:"grey"}}/>
    <h2>Price Breakup</h2>
    
    <div className='summary-boxes'>
        <p>IGST</p>
        <span>₹ 230.80</span>
    </div>
    <div className='summary-boxes'>
    <p>CGST</p>
        <span>₹ 230.80</span>
    </div>
    <div className='summary-boxes'>
    <p>SGST</p>
        <span>₹ 230.80</span>
    </div>
    <div className='summary-boxes'>
    <p>CESS</p>
        <span>₹ 0.00</span>
    </div>
    <div className='total discountBox'>
    <div className='discount1'>
    <img  src={discount}/>
    &nbsp;

    <p> Discount</p>
    </div>
    <span>₹ 690.00</span>
     </div>
    <div className='total'>
    <p>Total Amount</p>
    <span>₹ 23031.808</span>
     </div>
    
  </div>
     
    </div>
  )
}

export default Bar4
