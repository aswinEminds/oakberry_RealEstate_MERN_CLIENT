import "./testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import any modules you plan to use
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import TestimonialCard from "../../cards/testimonialCard/TestimonialCard";
function Testimonials() {
  return (
    <div className="testimonial-parent">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="300"
      >
        <p className="subHeading">Our Properties</p>
        <h1 className="heading">Featured Properties</h1>
      </div>
      <div className="slides container">
        <Swiper
          spaceBetween={36}
          slidesPerView={1}
          navigation={false} // Disable navigation arrows
          pagination={{ clickable: true }} // Enable pagination (dots)
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Automatically change slides every 5 seconds
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Testimonials;
