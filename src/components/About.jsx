/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image'
import styles from '../assets/CSS/About.module.css'
import bannerImg from '../assets/images/banner-2.webp'
import sign from '../assets/images/sign.png'


function About() {
  return (
    <section className="m-t-b-50 pt-100">
      <div className={`${styles.about}  d-flex-between`}>
        <div className={styles.aboutImg}>

            <Image    src={bannerImg} alt="Banner" />

       
        </div>

        <div className={styles.aboutContent}>
          <h2>We’r a dynamic team of creatives people innovation & Marketing Expert.</h2>

          <div className={`${styles.aboutContentHead} mt-30`}>
            <div>
          
            <Image src={require('../assets/icons/has.svg')}  height={100} width={100} />
           
            </div>
            <div>
              <h4>Best Digital Agency in Asia</h4>

              <p>
                We provide marketing services to startups and small businesses to looking for a
                partner of their digital media, design & dev, lead generation, and communications
                requirents. We work with you, not for you. Although we have great resources.
              </p>
            </div>
          </div>

          <div className={`${styles.sign} d-flex-between`}>
            <div>
              <Image src={sign} alt="BANNER" />
            </div>

            <div className={styles.moreBtn}>
              <p>Learn More</p>

              <a href="#" className="forIcon">
                MORE ABOUT US
                {' '}
             

                <Image src={require('../assets/icons/arrow-left.svg')}   />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
