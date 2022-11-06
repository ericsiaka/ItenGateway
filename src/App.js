import './App.css';
import Nav from './features/nav/Nav';
import Header from './features/header/Header';
import About from './features/about/About';
import { Knowledge, Statistics } from './features/promo/Promo';
import Work from './features/work/Work';
import Team from './features/team/Team';
import Skills from './features/skills/Skills';
import Pricing from './features/pricing/Pricing';
import Contact from './features/contact/Contact';
import Footer from './features/footer/Footer';
import Location from './features/location/Location';

const App = () => {
  return (
    <>
      {/* Navbar sit on top */}
      <Nav />

      {/* Header with full-height image */}
      <Header />

      {/* About section */}
      <About />

      {/* Promo section - "We know design" */}
      <Knowledge />

      {/* team Section */}
      <Team />

      {/* Promo Section "Statictics" */}
      <Statistics />

      {/* Work section */}
      <Work />

      {/* Skills Section */}
      <Skills />

      {/* Pricing Section */}
      <Pricing />

      {/* Contact Section */}
      <Contact />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App;