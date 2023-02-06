/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from '../assets/CSS/OurNews.module.css'
import profileOne from '../assets/images/6.jpg'
import profileTwo from '../assets/images/7.jpg'
import profileThree from '../assets/images/8.jpg'
import profileFour from '../assets/images/9.jpg'

export default function OurNews() {
  return (
    <section className={`${styles.ourNews} m-t-b-50`}>
      <div className="container ">
        <div className={`${styles.ourNewsHead}`}>
          <h6>OUR NEWS</h6>
          <h2>News from our company</h2>
        </div>

        <div className={`${styles.ourNewsCardContainer} flex-wrap pt-50`}>
          <div className={`${styles.newsCard} d-flex-between mb-80`}>
            <div className={styles.profileImg}>
              <Image src={profileOne} alt="Profile" />

            </div>
            <div className={`${styles.serviceCardContent}`}>
              <p>Rashed Ka.</p>
              <h4>
                <a href="#">Challange yourself to win the future</a>
              </h4>
              <p>
                Their testimonial videos aren't production quality, but they get message across,
                cover useful & relevant information with tips.
              </p>
              <a href="#">
                <p className="moreDetails">More Details</p>
              </a>
            </div>
          </div>
          <div className={`${styles.newsCard} d-flex-between mb-80`}>
            <div className={styles.profileImg}>

              <Image src={profileTwo} alt="Profile" />

            </div>
            <div className={styles.serviceCardContent}>
              <p>Jannatul Fa.</p>
              <h4>
                <a href="#">Challange yourself to win the future</a>
              </h4>
              <p>
                Their testimonial videos aren't production quality, but they get message across,
                cover useful & relevant information with tips.
              </p>

              <a href="#">
                <p className="moreDetails">More Details</p>
              </a>
            </div>
          </div>
          <div className={`${styles.newsCard} d-flex-between mb-80`}>
            <div className={styles.profileImg}>

              <Image src={profileThree} alt="Profile" />

            </div>
            <div className={styles.serviceCardContent}>
              <p>Fred Johnston</p>
              <h4>
                <a href="#">Challange yourself to win the future</a>
              </h4>
              <p>
                Their testimonial videos aren't production quality, but they get message across,
                cover useful & relevant information with tips.
              </p>

              <a href="#">
                <p className="moreDetails">More Details</p>
              </a>
            </div>
          </div>
          <div className={`${styles.newsCard} d-flex-between mb-0`}>
            <div className={styles.profileImg}>

              <Image src={profileFour} alt="Profile" />

            </div>
            <div className={styles.serviceCardContent}>
              <p>Austin Cross</p>
              <h4>
                <a href="#">Challange yourself to win the future</a>
              </h4>
              <p>
                Their testimonial videos aren't production quality, but they get message across,
                cover useful & relevant information with tips.
              </p>

              <a href="#">
                <p className="moreDetails ">More Details</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
