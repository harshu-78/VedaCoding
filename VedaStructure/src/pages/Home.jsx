

import Banner from "../components/Banner";
import About from "../components/About"; 
import AllRudraksha from "../components/AllRudraksha";
import OurServices from "../components/OurServices";
import AppDownloadSection from "../components/AppDownloadSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

   useEffect(() => {
    AOS.init({
  duration: 1200,   
  easing: 'ease-in-out',
  once: true
    });
  }, []);
  return (
      <div className="bg-gray-50">
       
        <Banner />
     <About/>
          <AllRudraksha />
            <OurServices />
              <AppDownloadSection />
            <Footer/>
    </div>
  );
}

export default Home;
