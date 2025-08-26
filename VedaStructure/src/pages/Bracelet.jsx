
 import Braceletbanner from "../components/Braceletbanner";
// import About from "../components/About"; 
// import AllRudraksha from "../components/AllRudraksha";
// import OurServices from "../components/OurServices";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GemstoneLayout from "../components/GemstoneLayout";
import BraceletCard from "../components/BraceletCard";
import BookSession from "../components/BookSession";


function Bracelet() {

   useEffect(() => {
    AOS.init({
  duration: 1200,   
  easing: 'ease-in-out',
  once: true
    });
  }, []);
  return (
      <div className="bg-gradient-to-b from-yellow-50 to-orange-50">
      {/* <Navbar />   */}
         <Braceletbanner />
         <BraceletCard />
         <GemstoneLayout />
         <BookSession />
      
        <AppDownloadSection />
        <Footer/>
    </div>
  );
}

export default Bracelet;
