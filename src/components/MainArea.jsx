import React from 'react'
import '../styles/mainArea.css'
import Bar1 from './Bar1'
import Bar2 from './Bar2'
import ProductPage from './ProductPage'

function MainArea() {
  return (
    <div className='mainArea'>
      <Bar1/>
      <Bar2/>
      <ProductPage/>
    

    </div>
  )
}

export default MainArea
