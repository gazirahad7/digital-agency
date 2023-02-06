/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import styles from '../assets/CSS/Services.module.css'
import analysis from '../assets/images/analysis.png'
import docs from '../assets/images/docs.png'
import sketch from '../assets/images/sketch.png'

function Services() {
  return (
    <section className={`${styles.services} m-t-b-50`}>
      <div className="container">
        <div className={`${styles.servicesHeading} pt-50`}>
          <h3>
            The thing that motivates me is a very common form of motivation. And that is, with other
            folk counting on me, it's so easy to be motivated.
          </h3>
          <h5>we work with business & provide solution to client with their business problem</h5>
        </div>

        <div className={styles.servicesItems}>
          <div className={styles.serviceItem}>
            <div className={styles.serviceImg}>

              <Image src={docs} alt="IMG" />
            </div>
            <div className={`${styles.serviceContent} mt-20`}>
              <h4>Financial  Advise</h4>
              <p>Market Statics Growth & Advance Analysis</p>
            </div>
          </div>

          <hr />

          <div className={styles.serviceItem}>
            <div className={styles.serviceImg}>

              <Image src={analysis} alt="IMG" />

            </div>
            <div className={`${styles.serviceContent} mt-20`}>
              <h4>Market Analysis</h4>
              <p>Market Statics Growth & Advance Analysis</p>
            </div>
          </div>
          <hr />
          <div className={styles.serviceItem}>
            <div className={styles.serviceImg}>

              <Image src={sketch} alt="IMG" />

            </div>
            <div className={`${styles.serviceContent} mt-20`}>
              <h4>Web Solution</h4>
              <p>Market Statics Growth & Advance Analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
