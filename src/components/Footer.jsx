import Image from 'next/image'
import styles from '../assets/CSS/Footer.module.css'
import logo from '../assets/images/logo.png'

export default function Footer() {
  // scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  const getFooterBGImg = require('../assets/images/footer.webp')
  const footerBackgroundImg = {
    backgroundImage: `url(${JSON.stringify(getFooterBGImg.default.src)})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '85vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 15%',
  }

  return (
    <footer className={styles.footer} style={footerBackgroundImg}>
      <div className="container ">
        <div className={`${styles.footerMain} flex-wrap mt-50`}>
          <div className={styles.footerCard}>
            <Image src={logo} alt="LOGO" />

            <ul className="mt-20">
              <li>
                <b>gulluinc@gmail.com</b>
              </li>
              <li className="primaryColor">202. 277. 3894</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>Quick Links</h3>
            <ul className="mt-20">
              <li>How it Works</li>
              <li>Guarantee</li>
              <li>Security</li>
              <li>Report Bug</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>About Us</h3>
            <ul className="mt-20">
              <li>About Singleton</li>
              <li>Jobs</li>
              <li>Team</li>
              <li>Testimonials</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={styles.footerCard}>
            <h3>Subscribe Us</h3>
            <input
              className="mt-20"
              type="text"
              placeholder="Enter your email"
            />
            <ul className={styles.footerCardIcon}>
              <li>

              <Image src={require('../assets/icons/facebook.svg')}   />
              
              </li>
              <li>
              <Image src={require('../assets/icons/google.svg')}   />
              </li>
              <li>
              <Image src={require('../assets/icons/twitter.svg')}   />
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.footerEnd}  d-flex-between  pt-100`}>
          <div className="mt-5">
            <p> © 2022 Gully.ly, All rights reserved.</p>
          </div>
          <div className={`${styles.reserved} flex-wrap `}>
            <div>
              <h3>
                <span className="primaryColor">9087 </span>
                Products
              </h3>
            </div>
            <div>
              <h3>
                <span className="primaryColor">54288</span>
                {' '}
                Members
              </h3>
            </div>
            <div>
              <h3>
                <span className="primaryColor">1121 </span>
                {' '}
                Shops
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.top} onClick={() => scrollToTop()}>

      <Image src={require('../assets/icons/arrow-up.svg')}   />
        
      </div>
    </footer>
  )
}
