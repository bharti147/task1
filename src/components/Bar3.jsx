import React from 'react'
import '../styles/bar3.css'
import bar3a from '../assets/bar3a.png'
import bar3b from '../assets/bar3b.png'
import bar3c from '../assets/bar3c.png'
import bar3d from '../assets/bar3d.png'


function Bar3() {
  return (
    <div className='bar3'>
      <div className='bar3-part1'>
        <div className='searchBar'>
        <div className='search'>
        <img src={bar3a} className=''/>
        <p>Search Products</p>
        </div>

        <img src={bar3b}/>
        </div>
        <div className='others'>
          <input type='text' placeholder='Add Remarks'/>
          <div><p>Show by:</p>&nbsp;<span style={{fontWeight:"700"}}> Sizes</span></div>
      <button className='btn'>+</button>
        </div>
      </div>
      <div className='bar3-part2'>
        <div className='scanBar'>
          <img src={bar3c}/>
          &nbsp;
          <p>Scan Product by...</p>
        </div>
        <div className='designBar'>
          <select>
            <option>Design No</option>
          </select>
          <img src={bar3d}/>
        </div>
      </div>
    </div>
  )
}

export default Bar3
