import Image from 'next/image'
import { useState } from 'react'
import styles from '../assets/CSS/Header.module.css'
import logo from '../assets/images/logo.png'
import LandingPage from './LandingPage'

export default function Header() {
  const [openMenu, setMenu] = useState(false)
  const getImage = require('../assets/images/shape-1.png')

  if (openMenu === true) {
    window.addEventListener('click', (e) => {
      console.log(e.target.classList.contains('menuList'))

      if (e.target.classList.contains('menuList')) {
        setMenu(false)
      }
    })
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${JSON.stringify(getImage.default.src)})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
  }

  return (
    <header className="header" style={backgroundImageStyle}>
      <div className="container pt-50">
        <div className="logo">

          <Image src={logo} alt="LOGO" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#" className="border-btm-sm active">
                Home
              </a>
            </li>

            <li>
              <a className="border-btm-sm" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="border-btm-sm" href="#">
                Portfolio
              </a>
            </li>
            <li>
              <a className="border-btm-sm" href="#">
                Contact Us
              </a>
            </li>
            <li className="btn">
              <a href="#">LOGIN</a>
            </li>
          </ul>
        </nav>

        <LandingPage />

        {openMenu ? (
          <div className="menuList">
            <ul>
              <li>
                <a href="index.html" className="border-btm-sm active">
                  Home
                </a>
              </li>

              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="services.html">Portfolio</a>
              </li>
              <li>
                <a href="contact.html">Contact Us</a>
              </li>
              <li className="btn">
                <a href="#">LOGIN</a>
              </li>
            </ul>
          </div>
        ) : null}

        <div>
          <button className="menu" onClick={(e) => setMenu(!openMenu)} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
                fill="#00d747"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
