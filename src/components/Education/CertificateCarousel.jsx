import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaFilePdf } from "react-icons/fa";

const CertificateCarousel = ({ certificates }) => (
  <section className="mt-12">
    <div className="mb-6 border-b border-slate/20 pb-2" />
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={false}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      speed={800}
      breakpoints={{
        480: { slidesPerView: 1.5, spaceBetween: 16 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 2.5, spaceBetween: 28 },
      }}
      modules={[Autoplay]}
      className="pb-8 select-none"
    >
      {certificates.map((diploma, i) => (
        <SwiperSlide key={i}>
          <div
            onClick={() => window.open(diploma.pdf, "_blank")}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md shadow-green/10 hover:shadow-green/30 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.03] bg-slate/10 backdrop-blur-sm"
          >
            <img
              src={diploma.image}
              alt={`Diploma ${i + 1}`}
              loading="lazy"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300">
              <FaFilePdf className="text-green text-2xl mb-2" />
              <span className="text-green font-semibold text-sm uppercase tracking-wide">
                View Certificate
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default CertificateCarousel;
