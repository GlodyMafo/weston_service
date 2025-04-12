import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Nav from './componenents/nav/Nav';
import Home from './componenents/home/Home';
import Footer from './componenents/footer/Footer';
import About from './componenents/about/About';
import Contact from './componenents/contact/Contact';
import Services from './componenents/service/Service';
import Galery from './componenents/Galery';

function App() {
  return (
    <BrowserRouter>
      <Nav/>

      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/About" element={<About/>} />
      <Route path="/Services" element={<Services/>} /> 
      <Route path="/galery" element={<Galery/>} /> 
      <Route path="/Contact" element={<Contact/>} />

      </Routes>
      <Footer/>


    </BrowserRouter>
  );
}

export default App;
