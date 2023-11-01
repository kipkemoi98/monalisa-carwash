import React from 'react';
// import { NavLink } from 'react-router-dom';
import homeimg from '../Images/Pasted image.png'
import '../Css/HomeAbout.css'
import Same from './Same';
const Home=()=>{
 return(
    <>
   <Same
   title="About Monalisa Carwash"
   text="The Monalisa Carwash is a premium car wash service known for its thorough and high-quality cleanig, which includes exterior washing, interior detailing, and often offes additional services like waxing and polishing to give to give vehicle a pristine and polished look."
   imgsrc={homeimg}
   btn="Read more"
   />
    
    </>
 )
}
export default Home;