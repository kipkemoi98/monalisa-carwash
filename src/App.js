import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contacts from './component/Contacts';
import Services from './component/Services';
import Policy from './component/Policy';
import Error from './component/Error';
import List from './component/List';
import Footer from './component/Footer';


const App = () => {
  return (
    <>
      <List />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
