import React from 'react'
import '../styles/bar1.css'
import search from'../assets/search.png'
import bar1a from '../assets/bar1a.png'
import bar1b from '../assets/bar1b.png'
import bar1c from '../assets/bar1c.png'
import bar1d from '../assets/bar1d.png'
import bar1e from '../assets/bar1e.png'
import bar1f from '../assets/bar1f.png'
import bar1g from '../assets/bar1g.png'
import bar1h from '../assets/bar1h.png'
import bar1i from '../assets/bar1i.png'
import line from '../assets/line.png'

function Bar1() {
  return (
    <div className='bar1'>
      <div className='bar1-part1'>
        <div className='searchBar'>
        <img src={search}/>
        &nbsp;
      <p>Search POs, ASNs, & pages etc</p>
        </div>
          

        <div className='keys'>
          <img src={bar1a}/>
          &nbsp;|&nbsp;
          <img src={bar1b}/>
        </div>
      </div>
      <div className='bar1-part2'>
        <img src={bar1c}/>
        <img src={bar1d}/>
        <img src={bar1e}/>
        <img src={bar1f}/>
        <img src={bar1g}/>
        <img src={line}/>
        <img src={bar1h}/>
        <div className='profile'>
       <h4>Vmart-Procurement Team <img src={bar1i}/></h4>
       <h5>Ashish Kumar Singla</h5>
        </div>
        
      
      </div>
    </div>
  )
}

export default Bar1
