/* eslint-disable import/extensions */
// import '../src/assets/CSS/global.css'

// import backgroundImg from '../src/assets/images/shape-1.png'
import About from '../src/components/About'
import Counter from '../src/components/Counter'
import Header from '../src/components/Header'
import RecentWork from '../src/components/RecentWork'
import Services from '../src/components/Services'

import Footer from '../src/components/Footer'
import OurNews from '../src/components/OurNews'
import OurServices from '../src/components/OurServices'
import Testimonianls from '../src/components/Testimonianls'

function App() {
  return (
    <div className="App">

      <Header />
      <Services />
      <About />
      <Counter />
      <RecentWork />
      <OurServices />
      <Testimonianls />
      <OurNews />
      <Footer />
    </div>
  )
}

export default App
