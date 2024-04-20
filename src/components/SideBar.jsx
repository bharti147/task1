import React from 'react';
import '../styles/sideBar.css';
import mainLogo from '../assets/mainLogo.png'
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';
import icon6 from '../assets/icon6.png';
import icon7 from '../assets/icon7.png';
import icon8 from '../assets/icon8.png';
import icon9 from '../assets/icon9.png';
import icon10 from '../assets/icon10.png';
import icon11 from '../assets/icon11.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="main-icon">
    <img src={mainLogo} alt="Main Icon"/>

    </div>
    <div className="icon-list">
        <img className="icon" style={{backgroundColor:"#F2F1FE",borderRadius:"10px",padding:".75rem"}} src={icon1} alt="Icon 1"  />
        <img className="icon" src={icon2} alt="Icon 2" />
        <img className="icon" src={icon3} alt="Icon 3" />
        <img 
        style={{margin:".50rem"}} className="icon" src={icon4} alt="Icon 4" />
        <img className="icon" src={icon5} alt="Icon 5" />
        <img className="icon" src={icon6} alt="Icon 6" />
        <img className="icon" src={icon7} alt="Icon 7" />
        <img className="icon" src={icon8} alt="Icon 8" />
        <img  className="icon"src={icon9} alt="Icon 9" />
        <img className="icon" src={icon10} alt="Icon 10" />
        <img className="icon" src={icon11} alt="Icon 11" />
      </div>
    </div>
  );
}

export default Sidebar;
