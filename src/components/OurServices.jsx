import Image from 'next/image'
import styles from '../assets/CSS/OurServices.module.css'
import analysis from '../assets/images/analysisTow.png'
import development from '../assets/images/development.png'
import design from '../assets/images/interface.png'
import profile from '../assets/images/profile.png'
import shape from '../assets/images/shape-2.webp'

export default function OurServices() {
  return (
    <section className="ourServices m-t-b-50">
      <div className={styles.ourServices}>
        <div className={styles.ourServiceImg}>

          <Image src={shape} alt="BANNER" />
        </div>

        <div className={styles.ourServiceContent}>
          <h6>OUR SERVICES</h6>
          <h2 className="mt-20">
            We provide wide range of web &
            {' '}
            <br />
            {' '}
            business services.
          </h2>

          <div className={`${styles.OurServicesSubContent} d-flex-between mt-30`}>
            <p>We’ve strong work history with different business services</p>

            <div>
              <span className={styles.seeAllServices}>SEE ALL SERVICES</span>
            </div>
          </div>

          <div className="flex-wrap mt-50">
            <div className={`${styles.serviceCard} d-flex-between`}>
              <div>
                <Image src={design} alt="IMG" />
              </div>
              <div className={`${styles.serviceCardContent} `}>
                <h4>Interface Design</h4>
                <p>Lorem ipsum dolor sit amet, percipitur sadipscing.</p>
              </div>
            </div>
            <div className={`${styles.serviceCard} d-flex-between`}>
              <div>
                <Image src={analysis} alt="IMG" />
              </div>
              <div className={styles.serviceCardContent}>
                <h4>SEO & SMM services</h4>
                <p>Lorem ipsum dolor sit amet, percipitur sadipscing.</p>
              </div>
            </div>
            <div className={`${styles.serviceCard} d-flex-between`}>
              <div>

                <Image src={development} alt="IMG" />
              </div>
              <div className={styles.serviceCardContent}>
                <h4>Apps Development</h4>
                <p>Lorem ipsum dolor sit amet, percipitur sadipscing.</p>
              </div>
            </div>
            <div className={`${styles.serviceCard} d-flex-between`}>
              <div>

                <Image src={profile} alt="IMG" />

              </div>
              <div className={styles.serviceCardContent}>
                <h4>Business Consulting</h4>
                <p>Lorem ipsum dolor sit amet, percipitur sadipscing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
