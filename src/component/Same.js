import React from 'react';
import { NavLink } from 'react-router-dom';
// import homeimg from '../Images/Pasted image.png'

const same=(props)=>{
 return(
    <>
      <div classssName="mainSection">
      <div className="contentBox">
         <h1>{props.title}</h1>
         <p1>{props.text}</p1>
         <div className='btnBox'>
            <div className='btn'>
            <NavLink to="/about" className="readMore">
                {props.btn}</NavLink>
            </div>
         </div>
      </div>
      <div className='imgContainer'>
         <img src={props.imgsrc} alt='home'/>

      </div>
    </div>
    
    </>
 )
}
export default same;