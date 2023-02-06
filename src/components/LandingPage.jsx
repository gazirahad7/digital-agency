import Image from 'next/dist/client/image'
import styles from '../assets/CSS/Header.module.css'
import bannerImg from '../assets/images/banner-1.jpg'

export default function LandingPage() {
  return (
  //  main-header

    <div className={styles.banner}>
      <div className={`${styles.bannerContent} pt-50`}>
        <p>We'r Awesome</p>

        <ul>
          <li>Digital Agency</li>
          <li>That Help You To</li>
          <li>Go Ahead</li>
        </ul>

        <button type="button" className="btn-lg mt-50">
          Explore Now
        </button>
      </div>
      <div className={styles.headerBanner}>

        <Image src={bannerImg} alt="BANNER" />

      </div>
    </div>
  )
}
