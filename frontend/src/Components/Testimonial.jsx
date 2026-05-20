import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar, FaLeaf } from "react-icons/fa";

function Testimonial() {
  return (
    <section className="bg-light" style={{padding:"96px 0 80px"}} id="testimonials">
      <div className="container text-center">
        
 <div className="ot-heading-block">
                        <span className="ot-pill">Testimonials</span>
                        <h2 className="ot-heading">What Parents & Students Say</h2>
                        
                    </div>

        <Swiper
         modules={[Navigation, Autoplay]}
spaceBetween={10}
slidesPerView={2}
autoplay={false}
loop={true}
navigation={false}
pagination={false}
breakpoints={{
  0: { slidesPerView: 1 },
  992: { slidesPerView: 2 },
}}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="d-flex align-items-center bg-white shadow rounded-4 p-4 h-100 m-3">
              {/* Left Image */}
              <div className="text-center me-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Parent"
                  className="rounded-3 shadow"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mt-3 mb-0">Nala Kiara</h6>
                <small className="text-muted">(Parent)</small>
              </div>

              {/* Right Message */}
              <div className="text-start border rounded-4 p-2 flex-grow-1 position-relative w-100">
                <span className="fs-1 text-primary position-absolute" style={{ top: "-8px", left: "10px" }}>
                  “
                </span>
                <p className="text-muted mb-3 mt-3">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry standard dummy text ever since.
                </p>
                <div className="text-warning mb-2 d-flex">
                  <FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <span className="fs-1 text-primary position-absolute" style={{ bottom: "-20px", right: "10px" }}>
                  ”
                </span>
              </div>
            </div>
          </SwiperSlide>



          {/* Slide 2 */}
          <SwiperSlide>
            <div className="d-flex align-items-center bg-white shadow rounded-4 p-4 h-100 m-3">
              {/* Left Image */}
              <div className="text-center me-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Parent"
                  className="rounded-3 shadow"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mt-3 mb-0">Rahul jha</h6>
                <small className="text-muted">(Student)</small>
              </div>

              {/* Right Message */}
              <div className="text-start border rounded-4 p-2 flex-grow-1 position-relative w-100">
                <span className="fs-1 text-primary position-absolute" style={{ top: "-8px", left: "10px" }}>
                  “
                </span>
                <p className="text-muted mb-3 mt-3">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry standard dummy text ever since.
                </p>
                <div className="text-warning mb-2 d-flex">
                  <FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <span className="fs-1 text-primary position-absolute" style={{ bottom: "-20px", right: "10px" }}>
                  ”
                </span>
              </div>
            </div>
          </SwiperSlide>


 {/* Slide 3 */}
          <SwiperSlide>
            <div className="d-flex align-items-center bg-white shadow rounded-4 p-4 h-100 m-2">
              {/* Left Image */}
              <div className="text-center me-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Parent"
                  className="rounded-3 shadow"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h6 className="fw-bold mt-3 mb-0">Nala Kiara</h6>
                <small className="text-muted">(Parent)</small>
              </div>

              {/* Right Message */}
              <div className="text-start border rounded-4 p-2 flex-grow-1 position-relative w-100">
                <span className="fs-1 text-primary position-absolute" style={{ top: "-8px", left: "10px" }}>
                  “
                </span>
                <p className="text-muted mb-3 mt-3">
                  Lorem ipsum is simply dummy text of the printing and typesetting industry. It has been the industry standard dummy text ever since.
                </p>
                <div className="text-warning mb-2 d-flex">
                  <FaStar /><FaStar /><FaRegStar /><FaRegStar /><FaRegStar />
                </div>
                <span className="fs-1 text-primary position-absolute" style={{ bottom: "-20px", right: "10px" }}>
                  ”
                </span>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
