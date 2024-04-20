import React from 'react'
import '../styles/bar2.css'
import bar2a from '../assets/bar2a.png'

function Bar2() {
  return (
    <div className='bar2'>
    <div className='bar2-part1'>
      <div className='homeBar'>
      <img src={bar2a}/>
      
    <p>Home</p>
    
    <span>/</span>
    
    <select style={{borderRadius:"5px",borderColor:"grey"}} readOnly>
    <option>Sales Order</option></select>
    
    <span>/</span>
    
    <p style={{fontWeight:"700"}}>Product Catalogue</p>
      </div>
        

    </div>
    <div className='bar2-part2'>
     <button>PLACE ORDER</button>
      </div>
      
    
  
  </div>
  )
}

export default Bar2
