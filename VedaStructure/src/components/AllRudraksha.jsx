import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-6 top-1/2 transform -translate-y-1/2 
                 bg-gray-200 hover:bg-black hover:text-white text-black 
                 w-10 h-10 flex items-center justify-center 
                 rounded-full shadow-md z-10"
    >
      ›
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-6 top-1/2 transform -translate-y-1/2 
                 bg-gray-200 hover:bg-black hover:text-white text-black 
                 w-10 h-10 flex items-center justify-center 
                 rounded-full shadow-md z-10"
    >
      ‹
    </button>
  );
};

const AllRudraksha = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gray-50" data-aos="zoom-in-up">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold text-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Product Categories
          </h2>
          <p
            className="text-gray-600 mt-3"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Discover the Essence: Explore our diverse product categories
          </p>
        </div>

        {/* Big Category Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* All Rudraksha */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-80 transform transition duration-700 group-hover:scale-110">
              <img src="images/p1.jpg" className="object-cover w-full h-full" />
              <img src="images/p2.jpg" className="object-cover w-full h-full" />
              <img src="images/p3.jpg" className="object-cover w-full h-full" />
              <img src="images/p4.jpg" className="object-cover w-full h-full" />
              <img src="images/p5.jpg" className="object-cover w-full h-full" />
              <img src="images/p6.jpg" className="object-cover w-full h-full" />
              <img src="images/m5.jpg" className="object-cover w-full h-full" />
              <img src="images/p8.jpg" className="object-cover w-full h-full" />
              <img src="images/p9.jpg" className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">
                <a href="rudraksha.html">All Rudraksha</a>
              </h3>
            </div>
          </div>

          {/* Siddha Mala */}
          <div
            className="relative rounded-xl overflow-hidden shadow-lg group"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="grid grid-cols-3 grid-rows-3 gap-1 w-full h-80 transform transition duration-700 group-hover:scale-110">
              <img src="images/m1.jpg" className="object-cover w-full h-full" />
              <img src="images/m2.jpg" className="object-cover w-full h-full" />
              <img src="images/m3.jpg" className="object-cover w-full h-full" />
              <img src="images/m4.jpg" className="object-cover w-full h-full" />
              <img src="images/m5.jpg" className="object-cover w-full h-full" />
              <img src="images/m6.jpg" className="object-cover w-full h-full" />
              <img src="images/m7.jpg" className="object-cover w-full h-full" />
              <img src="images/m8.jpg" className="object-cover w-full h-full" />
              <img src="images/m9.jpg" className="object-cover w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-bold">
                <a href="rudraksha.html">Siddha Mala</a>
              </h3>
            </div>
          </div>
        </div>

        {/* Small Category Slider */}
        <div className="relative">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="px-2" data-aos="zoom-in" data-aos-delay="100">
              <div className="relative rounded-lg overflow-hidden group shadow-md">
                <img
                  src="images/shankh.jpg"
                  className="w-full h-40 object-cover transform transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md transition duration-500 group-hover:scale-110">
                    Shankh
                  </h4>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="px-2" data-aos="zoom-in" data-aos-delay="200">
              <div className="relative rounded-lg overflow-hidden group shadow-md">
                <img
                  src="images/gemsc.jpg"
                  className="w-full h-40 object-cover transform transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md transition duration-500 group-hover:scale-110">
                    Gems
                  </h4>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="px-2" data-aos="zoom-in" data-aos-delay="300">
              <div className="relative rounded-lg overflow-hidden group shadow-md">
                <img
                  src="images/bracelets.jpg"
                  className="w-full h-40 object-cover transform transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md transition duration-500 group-hover:scale-110">
                    <a href="bracelet.html">Bracelet</a>
                  </h4>
                </div>
              </div>
            </div>

            {/* Slide 4 */}
            <div className="px-2" data-aos="zoom-in" data-aos-delay="400">
              <div className="relative rounded-lg overflow-hidden group shadow-md">
                <img
                  src="images/rudra c.jpg"
                  className="w-full h-40 object-cover transform transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-500 flex items-center justify-center">
                  <h4 className="text-white font-bold text-lg md:text-xl drop-shadow-md transition duration-500 group-hover:scale-110">
                    <a href="rudraksha.html">Rudraksha Combo</a>
                  </h4>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AllRudraksha;
