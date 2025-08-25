import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Banner.css";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      className="myswiper"
    >
      {/* ---- SLIDE 1 ---- */}
      <SwiperSlide>
        <div className="relative bg-cover bg-center min-h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full object-cover"
          >
            <source src="/images/banner1.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 "></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start justify-between px-4 md:px-24 py-10 md:py-20 min-h-[420px] md:min-h-[530px] text-white">
            <div className="max-w-full md:max-w-[520px] space-y-4 md:space-y-6 animate-bigUp pt-6 md:pt-12">
              <span className="inline-block bg-white text-orange-600 px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                🕉️Traditional Puja Services
              </span>
              <h1
                className="text-3xl md:text-6xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Divine Blessings
              </h1>
              <h3
                className="text-lg md:text-2xl font-semibold text-yellow-200"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Authentic Puja Ceremonies
              </h3>
              <p
                className="text-base md:text-lg text-yellow-100 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Experience the power of traditional Hindu rituals with our expert
                pandits. Book online puja services and receive divine blessings
                at your doorstep.
              </p>
              <div
                className="flex flex-wrap gap-2 md:gap-3"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Rudraksha Beads
                </span>
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Sacred Gemstones
                </span>
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Spiritual Jewelry
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-4 md:mt-6 w-full">
                <button
                  className="bg-red-500 h-10 md:h-12 text-white shadow-lg shadow-red-400/50 hover:shadow-red-500/70 px-6 md:px-10 py-2 md:py-5 rounded-full text-base md:text-lg font-semibold flex items-center gap-2 md:gap-3 transition-all duration-300 w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Book Puja Now <span className="text-lg md:text-xl">→</span>
                </button>
                <button
                  className="border h-10 md:h-12 border-white px-6 md:px-8 py-2 rounded-full text-base md:text-lg font-semibold w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* ---- SLIDE 2 ---- */}
      <SwiperSlide>
        <div className="relative bg-cover bg-center">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/banner2.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/70 to-orange-600/60"></div>

          <div className="relative z-30 flex flex-col items-start md:flex-row md:items-center justify-between px-4 md:px-24 py-10 md:py-20 min-h-[460px] md:min-h-[570px] text-white">
            <div className="w-full md:max-w-[520px] space-y-4 md:space-y-6 animate-bigUp pt-4 md:pt-12">
              <span className="inline-block bg-white text-orange-600 px-4 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                🪷Spiritual Wellness
              </span>
              <h1
                className="text-3xl md:text-6xl font-bold leading-tight"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Inner Peace
              </h1>
              <h3
                className="text-lg md:text-2xl font-semibold text-yellow-200"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                Sacred Healing Products
              </h3>
              <p
                className="text-base md:text-lg text-yellow-100 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Discover ancient wisdom through our collection of authentic
                spiritual products. Find peace, prosperity, and spiritual growth
                with sacred items.
              </p>
              <div
                className="flex flex-wrap gap-2 md:gap-3"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Rudraksha Beads
                </span>
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Sacred Gemstones
                </span>
                <span className="bg-white text-gray-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium">
                  Spiritual Jewelry
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-4 md:mt-6 w-full">
                <button
                  className="bg-red-500 h-10 md:h-12 text-white px-6 md:px-10 py-2 md:py-5 rounded-full text-base md:text-lg font-semibold flex items-center gap-2 md:gap-3 transition-all duration-300 w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Rudraksha Products <span className="text-lg md:text-xl">→</span>
                </button>
                <button
                  className="border h-10 md:h-12 border-white px-6 md:px-8 py-2 rounded-full text-base md:text-lg font-semibold w-full sm:w-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Banner;
