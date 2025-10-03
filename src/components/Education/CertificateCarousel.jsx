import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaFilePdf } from "react-icons/fa";

const CertificateCarousel = ({ certificates }) => (
  <section className="mt-12">
    <div className="mb-4 border-b border-slate/20 pb-2" />
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: true,
      }}
      modules={[Autoplay]}
      className="pb-6"
    >
      {certificates.map((diploma, i) => (
        <SwiperSlide key={i}>
          <div
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
            onClick={() => window.open(diploma.pdf, "_blank")}
          >
            <img
              src={diploma.image}
              alt={`Diploma ${i + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition space-x-2">
              <span className="text-green font-semibold text-sm">View</span>
              <FaFilePdf className="text-green" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default CertificateCarousel;
