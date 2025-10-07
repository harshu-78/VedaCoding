"use client";
import { useState, useMemo, useEffect } from "react"; // <-- useEffect ko import karein
import { Link } from 'react-router-dom';

// Data 
const initialCardsToShow = 8;

const categories = [
    { key: "all", label: "All Pujas" },
    { key: "yagya", label: "Yagya Puja" },
    { key: "havan", label: "Homa | Havan" },
    { key: "japa", label: "Japa | Chanting" },
    { key: "path", label: "Path | Recitation" },
    { key: "kashiKhand", label: "Puja in Kashi" },
    { key: "dailypuja", label: "Daily Puja" },
    { key: "rudrabhishek", label: "Nitya Ati Rudrabhishek" },
    { key: "upcoming", label: "Upcoming Festival Puja" },
    { key: "puja", label: "Puja" },
];

export const initialPujas = [
    { id: 1, title: "Bagalamukhi Yagya", desc: "For victory in legal battles, and triumph over enemies.", category: "yagya", img: "/images/Bagalamukhi Puja.jpg", location: "Kashi, Varanasi", price: 5100 },
    { id: 2, title: "Chandra Puja", desc: "For longevity, health, and protection from untimely death.", category: "yagya", img: "/images/Chandra Puja.jpg", location: "Trimbakeshwar, Nashik", price: 7500 },
    { id: 3, title: "Gaja Lakshmi Puja", desc: "Removes obstacles and ensures success in new ventures.", category: "havan", img: "/images/Gaja Lakshmi Puja (Ashta-Lakshmi).jpg", location: "Siddhivinayak, Mumbai", price: 3100 },
    { id: 4, title: "Sawan Special Rudrabhishek", desc: "A powerful Vedic ritual to please Lord Shiva during Sawan.", category: "upcoming", img: "/images/Sawan Special Vedic Yagya 2025 – In Kashi.jpg", location: "Kashi, Varanasi", price: 4100 },
    { id: 31, title: "Navratri Durga Puja", desc: "Celebrate the nine nights of devotion to Goddess Durga.", category: "upcoming", img: "/images/Navratri.jpeg", location: "Vindhyachal, Mirzapur", price: 3100 },
    { id: 32, title: "Diwali Lakshmi Ganesh Puja", desc: "Special puja for wealth and prosperity on Diwali.", category: "upcoming", img: "/images/Gaja Lakshmi Puja (Ashta-Lakshmi).jpg", location: "Online", price: 2100 },
    { id: 5, title: "Adi Lakshmi Puja", desc: "Also known as the Primordial Lakshmi, she blesses devotees with wealth.", category: "dailypuja", img: "/images/Adi Lakshmi Puja (Ashta-Lakshmi).jpg", location: "Online", price: 1100 },
    { id: 6, title: "Shani Shanti Japa", desc: "Pacifies the malefic effects of Planet Saturn and brings discipline.", category: "japa", img: "/images/Shani Puja.jpg", location: "Shani Shingnapur", price: 2500 },
    { id: 7, title: "Durga Saptashati Path", desc: "A powerful recitation to seek blessings and protection from Goddess Durga.", category: "path", img: "/images/Dhanya Lakshmi Puja (Ashta-Lakshmi).jpg", location: "Vindhyachal, Mirzapur", price: 3500 },
    { id: 8, title: "Rahu Graha Shanti Homa", desc: "Protects from the malefic effects of Rahu and sudden misfortunes.", category: "havan", img: "/images/Bagalamukhi Puja.jpg", location: "Online", price: 2100 },
    { id: 9, title: "Budh Graha Japa", desc: "Improves communication, intelligence, and business acumen.", category: "japa", img: "/images/Budh Puja (Mercury Puja).jpg", location: "Kashi, Varanasi", price: 2100 },
    { id: 10, title: "Vidya Lakshmi Puja", desc: "Blessings of Ashta Lakshmi for knowledge, arts, and academic success.", category: "dailypuja", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Vidya+Lakshmi+Puja", location: "Online", price: 1100 },
    { id: 11, title: "Kashi Khand Path", desc: "Recitation of the sacred Kashi Khand chapter from Skanda Purana.", category: "kashiKhand", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Kashi+Khand", location: "Kashi, Varanasi", price: 1500 },
    { id: 12, title: "Nitya Ati Rudrabhishek", desc: "Daily powerful offering to Lord Rudra for peace and prosperity.", category: "rudrabhishek", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Rudrabhishek", location: "Kashi, Varanasi", price: 11000 },
    { id: 13, title: "Ganga Aarti Participation", desc: "Be a part of the divine evening Ganga Aarti at Dashashwamedh Ghat.", category: "kashiKhand", img: "https://placehold.co/600x400/FFF3D7/805A2A?text=Ganga+Aarti", location: "Kashi, Varanasi", price: 501 },
    ...Array.from({ length: 17 }, (_, i) => ({ id: 14 + i, title: `Sample Puja ${i + 1}`, desc: "This is a placeholder description for the puja.", category: ["yagya", "havan", "japa", "path"][i % 4], img: `https://placehold.co/600x400/FFF3D7/805A2A?text=Puja+${14+i}`, location: "Online", price: 1100 + i * 100 }))
];


//  SVG Icons 
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.875-5.939l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" /></svg>;


//  PujaCard Component 
function PujaCard({ puja }) {
    const endsInDays = useMemo(() => Math.floor(2 + Math.random() * 10), []);
    const pujaDate = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + endsInDays + 5);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }, [endsInDays]);

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/80 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative">
                <img src={puja.img} alt={puja.title} className="w-full h-48 object-cover" style={{ objectPosition: 'center 25%' }} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/FFF3D7/805A2A?text=Image+Not+Found'; }}/>
                {puja.category === 'upcoming' && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-red-600 font-bold text-xs px-3 py-1.5 rounded-full flex items-center shadow-md">
                        <ClockIcon /> Ends in {endsInDays} days
                    </div>
                )}
                 <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full shadow-md hover:bg-white transition-transform duration-200 hover:scale-110">
                    <ShareIcon />
                </button>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-800 leading-tight mb-1">{puja.title}</h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                    <LocationIcon />
                    <span>{puja.location}</span>
                </div>
                <p className="text-sm text-gray-600 flex-grow mb-4 leading-relaxed">
                    {puja.desc}
                </p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center text-sm font-semibold text-gray-700">
                           <CalendarIcon /> {pujaDate}
                        </div>
                        <div className="text-right">
                            <span className="text-xl font-bold text-amber-600">₹{puja.price.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                  
                    <Link to={`/pujas/${puja.id}`}>
                        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]">
                            Book Now
                        </button>
                    </Link>
                
                </div>
            </div>
        </div>
    );
}

// Main Filter Component 
export default function Filter() {
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");
    const [isExpanded, setIsExpanded] = useState(false); // <-- NAYA STATE BANAYA HAI

    // YEH HOOK ENSURE KARTA HAI KI JAB BHI FILTER BADLE, VIEW RESET HO JAYE
    useEffect(() => {
        setIsExpanded(false);
    }, [filter, search]);

    const { upcomingPujas, otherPujas } = useMemo(() => {
        const upcoming = initialPujas
            .filter(p => p.category === 'upcoming' && p.title.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 3); 
            
        const others = initialPujas.filter(p => {
            if (p.category === 'upcoming') return false;
            const matchFilter = filter === 'all' || p.category === filter;
            const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
            return matchFilter && matchSearch;
        });

        return { upcomingPujas: upcoming, otherPujas: others };
    }, [search, filter]);

    const isFiltered = filter !== 'all' || search !== '';
    
    // Naya logic cards dikhane ke liye
    const displayedOtherPujas = isFiltered ? otherPujas : (isExpanded ? otherPujas : otherPujas.slice(0, initialCardsToShow));

    // Button kab dikhana hai, uski condition
    const showExploreButton = !isFiltered && !isExpanded && otherPujas.length > initialCardsToShow;

    return (
        <section className="bg-gray-50 min-h-screen">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                        Explore Our Sacred{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
                             Pujas and Yagyas
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose from a variety of rituals, yagya, havan, japa and more — performed authentically by expert Vedic priests.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Filter */}
                    <aside className="lg:col-span-3 xl:col-span-2 bg-gradient-to-b from-white to-amber-50 rounded-2xl shadow-lg p-5 border border-gray-200/80 h-fit lg:sticky top-6">
                       {/* ...baki ka sidebar code waisa hi rahega... */}
                       <div className="flex items-center gap-3 mb-5">
                            <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full"></span>
                            <h2 className="text-xl font-extrabold text-gray-900 tracking-wide">Filters</h2>
                        </div>
                        <div className="relative mb-5">
                            <input
                                type="text"
                                placeholder="Search for Pujas..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 text-sm bg-white shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                        </div>
                        <ul className="space-y-2">
                            {categories.map((cat) => (
                                <li key={cat.key}>
                                    <button
                                        onClick={() => setFilter(cat.key)}
                                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-300 ease-out font-semibold text-sm ${filter === cat.key
                                                ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-md scale-105"
                                                : "bg-white/80 hover:bg-amber-100/70 hover:text-orange-800"
                                            }`}
                                    >
                                        {cat.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Main Content Section */}
                    <div className="lg:col-span-9 xl:col-span-10">
                        {/* Regular Pujas Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-6">
                            {displayedOtherPujas.length > 0 ? (
                                displayedOtherPujas.map((puja) => (
                                    <PujaCard key={puja.id} puja={puja} />
                                ))
                            ) : (
                                filter !== 'upcoming' && <div className="col-span-full flex flex-col items-center justify-center h-96 bg-white rounded-2xl shadow-md">
                                    <p className="text-xl font-semibold text-gray-700">No Pujas Found</p>
                                    <p className="text-gray-500 mt-2">Please try adjusting your search or filter.</p>
                                </div>
                            )}
                        </div>
                        
                        {/* --- YAHAN NAYA BUTTON ADD KIYA GAYA HAI --- */}
                        {showExploreButton && (
                            <div className="text-center mt-10">
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.03]"
                                >
                                    Explore All Pujas
                                </button>
                            </div>
                        )}

                        {/* Upcoming Pujas Section */}
                        {(filter === 'all' || filter === 'upcoming') && upcomingPujas.length > 0 && (
                            <>
                                <div className="mt-16 mb-6">
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                        Upcoming Festival Pujas
                                    </h2>
                                    <p className="mt-2 text-lg text-gray-500">Book these special pujas for the upcoming festivals.</p>
                                    <div className="mt-4 w-24 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
                                     {upcomingPujas.map((puja) => (
                                        <PujaCard key={puja.id} puja={puja} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}