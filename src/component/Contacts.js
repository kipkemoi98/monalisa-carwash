import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/ContactStyle.css";


const Contacts=()=>{
 return(
    <>
    <h1>Contact Us</h1>
    <form className="contact">
      <div>
         <label htmlFor="name">Name</label>
         <input type="text" placeholder="Enter yor name"></input>

      </div>
      <div>
         <label htmlFor="name">Email</label>
         <input type="email" placeholder="Enter yor email"></input>

      </div>
      <div>
         <label htmlFor="name">Phone</label>
         <input type="phone" placeholder="Enter yor phone"></input>

      </div>
      <div>
         <label htmlFor="password">Password</label>
         <input type="text" placeholder="Enter yor password"></input>

      </div>
      <div className='btnBox'>
            <div className='btn'>
            <NavLink to="/" className="readMore">
                Submit details</NavLink>
            </div>
         </div>

    </form>
    </>
 )
}
export default Contacts;