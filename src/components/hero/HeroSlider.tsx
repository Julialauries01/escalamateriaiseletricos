"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";

function HeroSlider() {
  return (
    <>
      <section className="section gi-hero m-tb-40">
        <div className="container">
          <div className="gi-main-content">
            {/* <!-- Hero Slider Start --> */}
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <>
                  {/* <!-- Main slider  --> */}
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={2000}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="swiper-pagination-white gi-slider main-slider-nav main-slider-dot swiper-wrapper"
                  >
                    {/* Slide 1 */}
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-1">
                      <div className="gi-slide-content slider-animation">
                        <p>
                          Energia e qualidade <b>para sua obra</b>
                        </p>
                        <h1 className="gi-slide-title">
                          Tudo em materiais elétricos em um só lugar
                        </h1>
                        <div className="gi-slide-btn">
                          <a href="#" className="gi-btn-1">
                            Comprar Agora{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-2">
                      <div className="gi-slide-content slider-animation">
                        <p>
                          Tecnologia e qualidade <b>em materiais elétricos</b>
                        </p>
                        <h1 className="gi-slide-title">
                          30% OFF em itens selecionados
                        </h1>
                        <div className="gi-slide-btn">
                          <Link href="/" className="gi-btn-1">
                            Comprar Agora{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>

                    {/* Controls */}
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    <div className="swiper-buttons">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </Swiper>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSlider;
