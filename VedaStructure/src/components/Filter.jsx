import { useState } from "react";

import { Link } from "react-router-dom";
const allPujas = [
  {
    id: 1,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ",
    category: "japa",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 2,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 3,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 4,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "japa",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 5,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
    {
    id: 6,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ✨",
    category: "japa",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 7,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 8,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 9,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "japa",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 10,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
    {
    id: 11,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ✨",
    category: "japa",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 12,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 13,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 14,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "japa",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 15,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
    {
    id: 16,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ✨",
    category: "japa",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 17,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 18,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 19,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "japa",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 20,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
    {
    id: 21,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ✨",
    category: "japa",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 22,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 23,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 24,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "Nitya Ati Rudrabhishek",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 25,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
    {
    id: 26,
    title: "Bagalamukhi",
    desc: "Grants victory, protection, and removal of negativity ✨",
    category: "Nitya Ati Rudrabhishek",
    img: "images/Shani Puja.jpg",
  },
  {
    id: 27,
    title: "Mangal Puja",
    desc: "Removes Mangal dosh and brings harmony 💫",
    category: "path",
    img: "images/Mangal Puja.jpg",
  },
  {
    id: 28,
    title: "Rahu Puja",
    desc: "Protects from Rahu dosha and obstacles 🌑",
    category: "havan",
    img: "images/Rahu Puja.jpg",
  },
  {
    id: 29,
    title: "Budh Puja",
    desc: "Improves communication, intelligence, and wisdom 🌱",
    category: "japa",
    img: "images/Budh Puja (Mercury Puja).jpg",
  },
  {
    id: 30,
    title: "Vidya Lakshmi Puja",
    desc: "Blessings of Ashta Lakshmi for wealth & knowledge 🌸",
    category: "dailypuja",
    img: "images/Vidya Lakshmi Puja (Ashta-Lakshmi).jpg",
  },
];

const categories = [
  { key: "all", label: "All Pujas" },
  { key: "yagya", label: "Yagya Puja" },
  { key: "havan", label: "Homa | Havan" },
  { key: "japa", label: "Japa | Chanting" },
  { key: "path", label: "Path | Recitation" },
  { key: "kashiKhand", label: "Puja in Kashi (Kashi Khand)" },
  { key: "dailypuja", label: "Daily Puja" },
  { key: "rudrabhishek", label: "Nitya Ati Rudrabhishek" },
  { key: "upcoming", label: "Upcoming Festival Puja" },
  { key: "puja", label: "Puja" },
];

export default function Filter() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 3;

  // Filtering logic
  const filtered = allPujas.filter((puja) => {
    const matchFilter = filter === "all" || puja.category === filter;
    const matchSearch = puja.title.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // Pagination logic
  const start = (currentPage - 1) * cardsPerPage;
  const paginated = filtered.slice(start, start + cardsPerPage);

  const totalPages = Math.ceil(filtered.length / cardsPerPage);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Heading */}
      <div
        className="text-center mb-12"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Explore Our Sacred{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-400">
            Pujas
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from a variety of rituals, yagya, havan, japa and more —
          performed authentically by expert Vedic priests
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Sidebar Filter */}
        <aside className="lg:col-span-1 bg-gradient-to-b from-[#fffaf3] to-[#fff3d7] rounded-2xl shadow-2xl p-6 h-max border border-orange-200 relative overflow-hidden backdrop-blur-xl">
          {/* Heading */}
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <span className="w-2 h-10 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full shadow-lg"></span>
            <h2 className="text-2xl font-extrabold text-gray-900 tracking-wide drop-shadow">
              Filters
            </h2>
          </div>

          {/* Search */}
          <div className="relative mb-6 z-10">
            <input
              type="text"
              placeholder="🔍 Search Poojas..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full border-2 border-orange-300/40 rounded-xl px-4 py-3 pr-10 text-sm bg-white/70 shadow-inner focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-400">
              ⌕
            </span>
          </div>

          {/* Filter Buttons */}
          <ul className="space-y-3 max-h-[360px] overflow-y-auto pr-2 custom-scroll z-10 relative">
            {categories.map((cat) => (
              <li key={cat.key}>
                <button
                  onClick={() => {
                    setFilter(cat.key);
                    setCurrentPage(1);
                  }}
                  className={`filter-btn w-full text-left px-5 py-3 rounded-xl shadow-md border transition-all duration-300 ease-out font-semibold flex items-center gap-2 ${
                    filter === cat.key
                      ? "bg-gradient-to-r from-orange-400 to-yellow-400 text-white shadow-lg scale-105"
                      : "bg-white/80 border-orange-100 hover:shadow-lg hover:scale-[1.03] hover:-rotate-1 hover:bg-gradient-to-r hover:from-orange-50 hover:to-yellow-50 hover:text-orange-700"
                  }`}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Card Section */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 bg-gray-100 rounded-xl">
            {paginated.length > 0 ? (
              paginated.map((puja) => (
                <div
                  key={puja.id}
                  className="card max-w-sm bg-[#FFF3D7] rounded-2xl shadow-md overflow-hidden p-4 text-center border-dashed flex flex-col justify-between"
                  data-aos="fade-up"
                  data-category={puja.category}
                >
                  <img
                    src={puja.img}
                    alt={puja.title}
                    className="w-full rounded-xl border-8 border-white shadow-sm"
                  />
                  <p className="mt-4 text-gray-800 text-base font-serif leading-relaxed">
                    <span className="font-bold">{puja.title}</span>,{" "}
                    {puja.desc}
                  </p>
                  <button className="mt-5 w-full bg-[#f6a623] text-black border-4 border-white font-semibold py-3 rounded-xl hover:bg-[#e59410] transition">
                    Book Now →
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-3">
                No pujas found 
              </p>
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
            >
              ⬅ Previous
            </button>
            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(p + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-200 text-orange-700 shadow-md transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg disabled:opacity-50"
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
