/* eslint-disable import/no-unresolved */
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../assets/CSS/Recent.module.css'
import slideItemOne from '../assets/images/slideOne.webp'
import slideItemTwo from '../assets/images/slideTwo.webp'
// Import Swiper React components

// Import Swiper styles
import 'swiper/css'

function RecentWork() {
  return (
    <section className={`${styles.recentWork}m-t-b-50 `}>
      <div className="container">
        <div className={`${styles.recentWorkHead} d-flex-between`}>
          <div>
            <h6>Recent Work</h6>
            <h2>We’ve done lot’s of work, Let’s </h2>
            {' '}
            <h2> Check some from here</h2>
          </div>

          <div>
            <button className={styles.seeAllBtn} type="button">
              <b> See All Projects</b>
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.projectSliderContainer} pt-100`}>
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
              slidesPerView: 2,
              spaceBetween: 50,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <div className="flex-wrap">
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemOne} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemTwo} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemTwo} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemOne} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemTwo} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemOne} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <img src={slideItemTwo} alt="" />
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </section>
  )
}

export default RecentWork
