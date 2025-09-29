import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS को इम्पोर्ट करें

const Carddetails = () => {
  // State Management
  const [mainDisplay, setMainDisplay] = useState({ type: 'image', src: '/images/Bagalamukhi Puja.jpg' });
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [countdown, setCountdown] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  // Refs for uncontrolled form inputs and carousel
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const carouselRef = useRef(null);

  // --- Effects ---

  // Initialize AOS library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const endDate = new Date("Sep 20, 2025 23:59:59").getTime();
      const now = new Date().getTime();
      const diff = endDate - now;

      if (diff < 0) {
        setCountdown("Offer ended");
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(`${days}d ${hours}h ${mins}m ${secs}s left`);
    }, 1000);

    return () => clearInterval(countdownInterval); // Cleanup on component unmount
  }, []);
  
  // Toast message timer
  useEffect(() => {
      if (toastMessage) {
          const timer = setTimeout(() => {
              setToastMessage('');
          }, 1500);
          return () => clearTimeout(timer);
      }
  }, [toastMessage]);

  // Carousel auto-scroll effect
  useEffect(() => {
    const scrollAmount = 300;
    let autoScroll;

    const startAutoScroll = () => {
      autoScroll = setInterval(() => {
        if (carouselRef.current) {
          if (carouselRef.current.scrollLeft + carouselRef.current.clientWidth >= carouselRef.current.scrollWidth) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 3000);
    };

    const stopAutoScroll = () => {
      clearInterval(autoScroll);
    };

    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoScroll);
      carouselElement.addEventListener('mouseleave', startAutoScroll);
    }
    
    startAutoScroll();

    return () => { // Cleanup
      clearInterval(autoScroll);
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoScroll);
        carouselElement.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);


  // --- Handlers ---

  // Gallery thumbnail click handler
  const handleThumbClick = (type, src) => {
    setMainDisplay({ type, src });
  };

  // Copy link handler
  const copyLink = () => {
    const pageLink = window.location.href;
    navigator.clipboard.writeText(pageLink).then(() => {
      setToastMessage('Link copied to clipboard');
    });
  };

  // Favorite button handler
  const handleFavoriteClick = () => {
    const newFavStatus = !isFavorite;
    setIsFavorite(newFavStatus);
    setToastMessage(newFavStatus ? 'Added to favorites' : 'Removed from favorites');
  };
  
  // Carousel navigation
  const handleCarouselNav = (direction) => {
      const scrollAmount = 300;
      if(carouselRef.current){
          carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
      }
  }

  // Booking form validation handler
  const handleBooking = () => {
      const errors = [];
      const name = nameRef.current.value.trim();
      const phone = phoneRef.current.value.trim();
      const email = emailRef.current.value.trim();

      if (!name) errors.push('fName');
      if (!phone) errors.push('fPhone');
      if (!email) errors.push('fEmail');

      setFormErrors(errors);

      if (errors.length > 0) {
          setToastMessage('Please fill Name, Phone & Email');
          return;
      }
      
      setToastMessage('✅ Booking details received');
      // Here you would typically send the data to a server
  };

  const RashiOptions = ["Aries (Mesh)", "Taurus (Vrishabh)", "Gemini (Mithun)", "Cancer (Kark)", "Leo (Simha)", "Virgo (Kanya)", "Libra (Tula)", "Scorpio (Vrishchik)", "Sagittarius (Dhanu)", "Capricorn (Makkar)", "Aquarius (Kumbh)", "Pisces (Meen)"];
  const NakshatraOptions = ["Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvashu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha", "Mula", "Purva Ashadha", "Uttara Ashadha", "Shravana", "Dhanishtha", "Shatabhisha", "Purva Bhadrapada", "Uttar Bhadrapada", "Revati"];
  const relatedPujas = [
    { name: 'Bagalmukhi Puja', price: '₹1150', img: 'images/Bagalamukhi Puja.jpg' },
    { name: 'Sawan Special Vedic Yagya 2025 – In Kashi', price: '📆 Saturday, 9 August 2025', img: '/images/Sawan Special Vedic Yagya 2025 – In Kashi.jpg' },
    { name: 'Adi Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Adi Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Dhana Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: 'images/Dhana Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Dhanya Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Dhanya Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Gaja Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Gaja Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Santana Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Santana Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Dhairya Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Dhairya Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Vijaya Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Vijaya Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Vidya Lakshmi Puja (Ashta-Lakshmi)', price: '₹5100.00', img: '/images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg' },
    { name: 'Surya Puja', price: '₹5100.00', img: '/images/Surya Puja.jpg' },
    
  ];

  return (
    <>
      {/* Inline styles from the original <style> tag */}
      <style>{`
        .gold-text { background: linear-gradient(90deg,#f59e0b,#d97706); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .glass { background: rgba(255,255,255,.85); backdrop-filter: blur(12px); }
        .soft-border { border: 1px solid rgba(250,204,21,.35); }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeSlide { from {opacity:0; transform: translateY(10px)} to {opacity:1; transform: translateY(0)} }
        .fadeSlide { animation: fadeSlide .5s ease; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 text-gray-800">
        <div className="pointer-events-none fixed -top-24 -left-24 w-72 h-72 bg-yellow-300/40 blur-3xl rounded-full"></div>
        <div className="pointer-events-none fixed -bottom-24 -right-24 w-72 h-72 bg-orange-300/40 blur-3xl rounded-full"></div>

        <nav className="max-w-7xl mx-auto px-6 pt-6 text-sm text-gray-600 flex items-center gap-2">
          <a className="font-medium hover:text-yellow-700 transition" href="#">Home</a>
          <span>›</span>
          <a className="font-medium hover:text-yellow-700 transition" href="#">Puja</a>
          <span>›</span>
          <a className="font-medium hover:text-yellow-700 transition" href="#">Yagya Puja</a>
          <span>›</span>
          <span className="font-semibold text-red-600">Bagalamukhi Puja</span>
        </nav>

        {/* Main Section */}
        <section className="max-w-7xl mx-auto p-6 md:p-8 grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div id="mainDisplay" className="relative rounded-2xl soft-border w-full h-[750px] aspect-[6/5] overflow-hidden group">
              {mainDisplay.type === 'image' ? (
                <img src={mainDisplay.src} alt="Product" className="w-full h-full object-cover transition duration-700 group-hover:scale-[1.03]" data-aos="zoom-in" />
              ) : (
                <video key={mainDisplay.src} autoPlay loop muted playsInline className="w-full h-full object-cover rounded-2xl" data-aos="zoom-in">
                  <source src={mainDisplay.src} type="video/mp4" />
                </video>
              )}
            </div>

            {/* Thumbnails row */}
            <div id="thumbRow" className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-3" data-aos="zoom-in">
              <img onClick={() => handleThumbClick('image', '/images/Bagalamukhi Puja.jpg')} src="/images/Bagalamukhi Puja.jpg" className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition" alt="thumbnail" />
              <img onClick={() => handleThumbClick('image', '/images/A3.jpg')} src="/images/A3.jpg" className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition" alt="thumbnail" />
              <img onClick={() => handleThumbClick('image', '/images/A4.jpg')} src="/images/A4.jpg"  className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition" alt="thumbnail" />
              <img onClick={() => handleThumbClick('image', '/images/Adi Lakshmi Puja (Ashta-Lakshmi).jpg')} src="/images/Adi Lakshmi Puja (Ashta-Lakshmi).jpg" className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition" alt="thumbnail" />
              <img onClick={() => handleThumbClick('image', '/images/arpit.jpg')} src="/images/arpit.jpg"className="w-full aspect-square object-cover rounded-xl cursor-pointer border-2 border-transparent hover:border-yellow-600 transition" alt="thumbnail" />
            </div>
          </div>

          {/* Product Details Card */}
          <div className="glass soft-border rounded-2xl p-6 md:p-8 fadeSlide">
            <div className="flex items-start justify-between gap-4 glass rounded-2xl p-6" data-aos="fade-left">
              <div>
                <p className="uppercase tracking-wide text-gray-500 text-xs">Yagya Puja</p>
                <h1 className="text-3xl md:text-4xl font-extrabold mt-1 gold-text mb-6" data-aos="fade-down">Bagalamukhi Puja</h1>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center text-yellow-600">★★★★★</div>
                  <span className="text-xs text-gray-500">(124 reviews)</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={handleFavoriteClick} className={`w-11 h-11 border rounded-full flex items-center justify-center hover:bg-red-50 transition ${isFavorite ? 'text-red-600' : 'hover:text-red-600'}`}>❤️</button>
                <button onClick={() => setPopupVisible(true)} className="w-11 h-11 border rounded-full flex items-center justify-center hover:bg-yellow-50 hover:text-yellow-700 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18 8a3 3 0 1 0-2.82-4H14a2 2 0 0 0-2 2v7.23l-2.4-1.2a3 3 0 1 0-.9 1.79l3.74 1.87A2 2 0 0 0 15 15V6h.18A3 3 0 0 0 18 8Z"/></svg>
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-end gap-3">
              <span className="text-3xl font-bold text-red-600">₹1,150</span>
              <span className="text-sm line-through text-gray-400">₹1,599</span>
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Save 28%</span>
            </div>
            
            <div className="mt-4 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-4 py-3 rounded-xl shadow flex items-center justify-between gap-3">
              <div className="font-semibold">🎉 Offer: 25/08/25 – 20/09/25</div>
              <div id="countdown" className="text-xs font-bold">{countdown}</div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
              <div className="bg-white rounded-xl border p-3 hover:scale-105 hover:shadow-md hover:bg-yellow-500">✅ Certified Priests</div>
              <div className="bg-white rounded-xl border p-3 hover:scale-105 hover:shadow-md hover:bg-yellow-500">🕉️ Vedic Rituals</div>
              <div className="bg-white rounded-xl border p">🚚 Prasad Delivery</div>
            </div>

            {/* Form */}
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Name <span className="text-red-500">*</span></label>
                  <input ref={nameRef} id="fName" type="text" placeholder="Enter Name" className={`mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${formErrors.includes('fName') ? 'ring-2 ring-red-400' : ''}`}/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Phone Number <span className="text-red-500">*</span></label>
                  <input ref={phoneRef} id="fPhone" type="tel" placeholder="Enter mobile number" className={`mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${formErrors.includes('fPhone') ? 'ring-2 ring-red-400' : ''}`}/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Email <span className="text-red-500">*</span></label>
                  <input ref={emailRef} id="fEmail" type="email" placeholder="Enter your email" className={`mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 ${formErrors.includes('fEmail') ? 'ring-2 ring-red-400' : ''}`}/>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Gotra (If you know)</label>
                  <input type="text" placeholder="Enter Gotra" className="mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
                </div>
                <div>
                  <label className="block text-sm font-medium">Rashi</label>
                  <select className="mt-1 w-full p-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                    <option>--Choose--</option>
                    {RashiOptions.map(rashi => <option key={rashi}>{rashi}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium">Nakshatra</label>
                  <select className="mt-1 w-full p-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                    <option>--Choose--</option>
                    {NakshatraOptions.map(nakshatra => <option key={nakshatra}>{nakshatra}</option>)}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium">Choose Puja Date <span className="text-red-500">*</span></label>
                <input type="date" className="mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Choose Puja Time <span className="text-red-500">*</span></label>
                <input type="time" className="mt-1 w-full px-4 py-2.5 border rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"/>
              </div>
              <div>
                <label className="block text-sm font-medium">Recommended Muhurat</label>
                <input type="text" value="28 Sept 2025, 10:30 AM" readOnly className="mt-1 w-full px-4 py-2.5 border rounded-lg bg-gray-100 text-gray-600 shadow-sm"/>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <input type="checkbox" id="consultOpt" className="h-4 w-4 text-yellow-600 border-gray-300 rounded"/>
              <label htmlFor="consultOpt" className="text-sm text-gray-700">Consult with Pandit ji for best date & time</label>
            </div>

            <button onClick={handleBooking} className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-amber-300/40 transition transform active:scale-[.98] hover:scale-105 hover:shadow-mdc"> Book Now</button>
          </div>
        </section>

        {/* Info Tabs */}
        <section className="max-w-7xl mx-auto px-6 md:px-8 pb-16">
          <div className="glass soft-border rounded-2xl p-6" data-aos="fade-left">
             <h3 className="text-xl font-extrabold gold-text text-center mb-3">About the Puja</h3>
             <h5 className="text-lg font-semibold">Bagalamukhi Puja (Das Mahavidyas) </h5>
             <p className="text-sm leading-7">Bagalamukhi, one of the Das Mahavidyas, is the goddess of power, victory, and protection. She is known to paralyze the negativity of enemies and safeguard devotees. Worship is considered highly auspicious for justice and triumph in complex situations.</p>
             <h5 className="text-lg font-semibold">Significance and Importance of Bagalamukhi Puja</h5>
             <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Neutralization of Enemies:- The puja is particularly powerful for those facing challenges from adversaries, whether in the form of legal disputes, rivalries, or jealousy. It neutralizes the malefic intents of enemies.</li>
                <li>Speech and Communication:- Bagalamukhi is often invoked to improve communication and to silence harmful gossip or slander against the devotee.</li>
                <li>Protection from Negativity:- The puja is believed to shield the devotee from evil eyes, curses, and negative energies.</li>
                <li>Justice and Resolution:- It is highly recommended for individuals involved in court cases or any situation requiring justice to prevail.</li>
                <li>Spiritual Empowerment:- Practicing Bagalamukhi worship fosters inner strength, courage, and confidence.</li>
             </ul>
             <blockquote className="mt-4 border-l-4 border-yellow-500 pl-4 italic text-red-600 font-semibold">ॐ ह्लीं बगलामुखि सर्वदुष्टानां वाचं मुखं पदं स्तम्भय जिव्हां कीलय बुद्धिं विनाशय ह्लीं ॐ स्वाहा॥</blockquote>
          </div>

          <div className="grid md:grid-cols-3 mt-4 gap-6">
             <div className="md:col-span-3 glass soft-border rounded-2xl p-6" data-aos="fade-left">
                <h3 className="text-lg font-extrabold gold-text text-center mb-3">Benefits</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                   <li className="font-medium mt-4">Victory Over Obstacles: The puja helps in overcoming hurdles in personal and professional life.</li>
                   <li className="font-medium mt-4">Resolution of Disputes: It aids in resolving misunderstandings and conflicts, leading to peaceful outcomes.</li>
                   <li className="font-medium mt-4">Enhanced Focus: Devotees experience an increase in mental clarity and concentration, which is beneficial for making decisions and achieving goals.</li>
                   <li className="font-medium mt-4">Protection: Offers divine protection from unforeseen dangers and malicious intentions.</li>
                   <li className="font-medium mt-4">Success in Legal and Financial Matters: Bagalamukhi puja is particularly effective for success in litigation and stabilizing financial situations.</li>
                   <li className="font-medium mt-4">Spiritual Growth: It helps in developing a balanced mindset and spiritual detachment, leading to personal transformation. </li>
                </ul>
             </div>
          </div>
          
          <div className="grid md:grid-cols-3 mt-4 gap-6">
            <div className="md:col-span-3 glass soft-border rounded-2xl p-6" data-aos="fade-left">
                <h3 className="text-lg font-extrabold text-center gold-text mb-3">FAQ</h3>
                <details className="border rounded-lg mb-2 p-3 bg-white/70">
                  <summary className="cursor-pointer font-semibold">Who should perform Bagalamukhi Puja? </summary>
                  <p className="mt-2 text-sm">Those facing persistent struggles with enemies, legal issues, or negative influences should perform this puja. It is also beneficial for anyone seeking justice, protection, and empowerment.</p>
                </details>
                 <details className="border rounded-lg mb-2 p-3 bg-white/70">
                    <summary className="cursor-pointer font-semibold">What are the key rituals of the puja?</summary>
                    <p className="mt-2 text-sm">The puja involves chanting the Bagalamukhi mantra, performing havan (fire ritual), and offering yellow flowers, turmeric, and yellow sweets, as yellow is the goddess's favorite color.</p>
                </details>
                {/* ... other FAQs ... */}
            </div>
          </div>
          {/* ... other info sections ... */}
        </section>

        {/* Related Carousel Section */}
        <section className="max-w-7xl mx-auto px-6 mt-12 relative">
           <h2 className="text-xl font-bold text-center mb-4 text-3xl font-extrabold gold-text" data-aos="fade-right">You May Also Like</h2>
           <button onClick={() => handleCarouselNav(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-2 rounded-full shadow hover:bg-yellow-600 z-10">◀</button>
           <div ref={carouselRef} id="carousel" className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth pb-4" data-aos="fade-up">
              {relatedPujas.map((puja, index) => (
                <div key={index} className="min-w-[250px] border rounded-xl p-3 text-center shadow-md">
                   <img src={puja.img} className="rounded-lg mx-auto w-64 h-64 object-cover transition-transform duration-500 hover:scale-110" alt={puja.name} />
                   <p className="mt-2 font-bold">{puja.name}</p>
                   <p className="text-red-600 font-semibold">{puja.price}</p>
                   <button className="mt-2 bg-yellow-500 px-4 py-1 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-mdc hover:bg-yellow-700 text-white">Book Now</button>
                </div>
              ))}
           </div>
           <button onClick={() => handleCarouselNav(1)} className="absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-500 text-white px-3 py-2 rounded-full shadow hover:bg-yellow-600 z-10">▶</button>
        </section>


        {/* Share Popup */}
        {isPopupVisible && (
          <div 
            onClick={() => setPopupVisible(false)} 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <div 
                onClick={(e) => e.stopPropagation()} 
                className="bg-white rounded-2xl shadow-2xl p-6 w-96 border-t-4 border-yellow-500 animate-[fadeSlide_.4s_ease]"
            >
              <h2 className="text-xl font-bold text-yellow-700 mb-3">Share this Puja 🙏</h2>
              <div className="flex items-center mb-4">
                <input type="text" value={window.location.href} readOnly className="flex-1 border rounded-l-lg px-3 py-2 text-sm bg-gray-100"/>
                <button onClick={copyLink} className="bg-yellow-600 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-700">Copy</button>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?text=${window.location.href}`} className="border border-green-500 text-green-600 py-2 rounded-lg hover:bg-green-500 hover:text-white transition">WhatsApp</a>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`} className="border border-blue-500 text-blue-600 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">Facebook</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/" className="border border-pink-500 text-pink-600 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition">Instagram</a>
              </div>
              <button onClick={() => setPopupVisible(false)} className="mt-5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2.5 rounded-lg font-semibold">Close</button>
            </div>
          </div>
        )}

        {/* Toast */}
        {toastMessage && (
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm px-4 py-2 rounded-full shadow-xl animate-fade-in-up">
                {toastMessage}
            </div>
        )}
      </div>
    </>
  );
};

export default Carddetails;