import './App.css';
import Navbar from './components/Navbar';
import Bracelet from './pages/Bracelet';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Puja from './pages/Puja';
import Terms from './pages/Terms';
import Policy from './pages/Policy';
import Refund from './pages/Refund';
import Ganesh from './pages/Ganesh';

import { Routes, Route } from 'react-router-dom';
import AstrologyLogin from './pages/AstrologyLogin';
import AstrologyComp from './pages/AstrologyComp';
import CardsDetailpge from './pages/CardsDetailpge';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bracelet" element={<Bracelet />} />
        <Route path="/Puja" element={<Puja />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Ganesh" element={<Ganesh />} />

        <Route path="/cardsdetailpge" element={<CardsDetailpge />} />
        <Route path="/AstrologyLogin" element={<AstrologyLogin />} />
        <Route path="/AstrologyComp" element={<AstrologyComp />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;