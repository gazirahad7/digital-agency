/* eslint-disable import/no-unresolved */
import Image from 'next/image'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../assets/CSS/Testimonial.module.css'
import bannerImg from '../assets/images/banner-2.webp'
import clientProfileOne from '../assets/images/clientOne.jpg'

export default function Testimonianls() {
  return (
    <section className="m-t-b-50">
      <div className={`${styles.testimonials} d-flex-between`}>
        <div className={styles.testimonialsBanner}>
          <Image src={bannerImg} alt="Profile" />

        </div>

        <div className={styles.testimonialsContent}>
          <div className={styles.testimonialsHead}>
            <h6>TESTIMONIALS</h6>
            <h2>
              Check what’s our client
              {' '}
              <br />
              {' '}
              Say about us
            </h2>
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop
              loopFillGroupWithBlank
              breakpoints={{
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 150,
                },
                // when window width is >= 480px
                480: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                // when window width is >= 640px
                640: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <div>
                <SwiperSlide>
                  {' '}
                  <div className={`${styles.testimonialsSlider} mt-50 d-flex-between`}>
                    <div>
                    <Image src={require('../assets/icons/qutetion.svg')} height={250} width={250}  />
                      
                    </div>
                    <div className="testimonialsSliderContent">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quas
                        doloremque, iste est maiores hic magnam dolorum fugit, vel voluptates autem.
                        Veniam sint explicabo id nihil consequuntur voluptatibus? Nemo optio quasi,
                        repudiandae magni sed,
                      </p>

                      <div className={`${styles.testimonialsSliderAuthor} d-flex-between mt-50`}>
                        <div
                          className={`${styles.testimonialsSliderAuthorProfile} d-flex-between `}
                        >
                          <div>

                            <Image src={clientProfileOne} alt="Profile" />

                          </div>
                          <div>
                            <p>
                              <b>John Doe</b>
                            </p>
                            <p>CEO, Company</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <div>
                  <button type="button">Prv</button>
                  <button type="button">Next</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
