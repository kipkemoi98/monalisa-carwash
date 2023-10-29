import React from 'react';
import logo from '../Images/image3.jpg';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search'; 
import PersonIconIcon from '@mui/icons-material/Person'; 
import CallIcon from '@mui/icons-material/Call'; 
import '../Css/ListStyle.css'

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="list">
              <NavLink to="/" className="listItem" activeclassName="active">
                Home
              </NavLink>
              <NavLink to="/about" className="listItem" activeclassName="active">
                About
              </NavLink>
              <NavLink to="/Services" className="listItem" activeclassName="active">
                Services
              </NavLink>
              <NavLink to="/Contacts" className="listItem" activeclassName="active">
                Contacts
              </NavLink>
              <NavLink to="/Policy" className="listItem" activeclassName="active">
                Policy
              </NavLink>
            </div>
          </nav>
          <div className="icons">
            <SearchIcon className="icon" />
            <PersonIconIcon className="icon" />
            <CallIcon className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default List;
