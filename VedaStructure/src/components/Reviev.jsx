"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "The priest was punctual and the ceremony was so peaceful. Highly recommended!",
    name: "Ananya",
    avatar: "/images/ananya.jpg",
  },
  {
    text: "Very well organised. Everything arrived on time and the pandit was excellent.",
    name: "Rohan",
    avatar: "/images/rohan.jpg",
  },
  {
    text: "My family loved the live stream feature. Felt sacred and personal.",
    name: "Priya",
    avatar: "/images/priya.jpg",
  },
  {
    text: "The rituals were performed very sincerely. Great experience!",
    name: "Harsh",
    avatar: "/images/harsh.jpg",
  },
  {
    text: "Excellent arrangements and smooth booking process.",
    name: "Arpit",
    avatar: "/images/arpit.jpg",
  },
  {
    text: "Truly divine and peaceful. My family was very happy.",
    name: "Diksha",
    avatar: "/images/diksha.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const { text, name, avatar } = testimonials[index];

  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20">
      {/* Heading */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-sm">
          What Our Devotees Say
        </h2>
        <p className="text-gray-600 mt-3 text-lg">
          Blessings & Experiences Shared by Our Community
        </p>
        <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 rounded-full"></div>
      </div>

      {/* Testimonial Card */}
      <div className="relative flex flex-col items-center text-center transition-all duration-500">
        {/* Avatar Glow */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-red-500 p-[4px] shadow-2xl animate-spin-slow">
            <div className="w-full h-full rounded-full bg-white p-1">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full rounded-full object-cover shadow-xl"
              />
            </div>
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400/40 to-yellow-400/40 blur-3xl animate-pulse"></div>
        </div>

        {/* Rating Stars */}
        <div className="flex justify-center gap-1 mt-5 text-yellow-400 text-xl">
          <span className="animate-star">⭐</span>
          <span className="animate-star delay-100">⭐</span>
          <span className="animate-star delay-200">⭐</span>
          <span className="animate-star delay-300">⭐</span>
          <span className="animate-star delay-400">⭐</span>
        </div>

        {/* Quote */}
        <div className="mt-8 relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 max-w-2xl border border-orange-200 hover:shadow-2xl transition-all duration-500 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 absolute -top-7 -left-7 text-orange-400 opacity-20 group-hover:opacity-40 transition"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9.5 11c0-2.485 2.015-4.5 4.5-4.5S18.5 8.515 18.5 11 16.485 15.5 14 15.5H12a1 1 0 0 0-1 1V20a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1H6.5C4.015 15.5 2 13.485 2 11s2.015-4.5 4.5-4.5S11 8.515 11 11h-1.5z" />
          </svg>
          <p className="text-xl text-gray-700 leading-relaxed font-medium italic transition-all duration-500">
            "{text}"
          </p>
        </div>

        {/* Name */}
        <div className="mt-6 text-lg font-semibold text-orange-600 tracking-wide">
          — {name}
        </div>

        {/* Navigation */}
        <div className="flex gap-8 mt-10">
          <button
            onClick={() =>
              setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg hover:scale-110 hover:-rotate-6 hover:shadow-2xl transition-all duration-300"
          >
            ◀
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-lg hover:scale-110 hover:rotate-6 hover:shadow-2xl transition-all duration-300"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-40 animate-pulse"></div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 14s linear infinite;
        }
        @keyframes star-shine {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }
        .animate-star {
          display: inline-block;
          animation: star-shine 1.5s infinite;
        }
        .animate-star.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-star.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-star.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-star.delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
