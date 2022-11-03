import { useRef } from 'react';
import './App.css';
import logo from './Logo.png';
import { Link } from 'react-router-dom';
import phone_buildings from './phone_buildings.jpg';
import person from './person.png';
import map from './map.jpg';
import mac from './mac.jpg';
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiSnapchatLine } from 'react-icons/ri';
import { FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';
import { FaDesktop } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { SiMaterialdesign } from 'react-icons/si';
import { FaCog } from 'react-icons/fa';
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { ImLocation2 } from 'react-icons/im'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { RiSendPlaneFill } from 'react-icons/ri'
import { FaArrowUp } from 'react-icons/fa'

const App = () => {

  const sidebar = useRef(null);

  const handleOpenMenu = e => {
    if (sidebar.current.style.display === 'block') {
      sidebar.current.style.setProperty('display', 'none');
    } else {
      sidebar.current.style.setProperty('display', 'block');
    }
  }
  const handleCloseMenu = e => {
    sidebar.current.style.setProperty('display', 'none');
  }
  return (
    <>
      {/* Navbar sit on top */}
      <header className='w3-top'>
        <section className='w3-bar w3-white w3-card' id='mynavbar'>
          <Link to='#home' className='w3-bar-item w3-button w3-wide'>
            <img src={logo} style={{ maxInlineSize: '45px' }} />
          </Link>
          <nav className='w3-right w3-hide-small'>
            <Link to='#about' className='w3-bar-item w3-button'><FcAbout /> ABOUT</Link>
            <Link to='#team' className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</Link>
            <Link to='#work' className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</Link>
            <Link to='#pricing' className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</Link>
            <Link to="#contact" className='w3-bar-item w3-button'><MdEmail /> CONTACT</Link>
          </nav>
          {/*   
            Hide right-floated links on small screens and replace
            them with a menu button
          */}
          <button type='button' onClick={handleOpenMenu} className='w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium'>
            Menu
          </button>
        </section>
      </header>

      {/* Sidebar on small screens when clicking the menu icon */}
      <nav className='w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large' style={{ display: 'none' }} ref={sidebar} id='mySidebar'>
        <button type='button' className='w3-bar-item w3-button w3-large w3-padding-16'>Close &#10008;</button>
        <Link to='#about' onClick={handleCloseMenu} className='w3-bar-item w3-button'><FcAbout /> ABOUT</Link>
        <Link to='#team' onClick={handleCloseMenu} className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</Link>
        <Link to='#work' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</Link>
        <Link to='#pricing' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</Link>
        <Link to="#contact" onClick={handleCloseMenu} className='w3-bar-item w3-button'><MdEmail /> CONTACT</Link>
      </nav>

      {/* Header with full-height image */}
      <header className='bgimg-1 w3-display-container w3-grayscale-min' id='home'>
        <article className='w3-display-middleleft w3-text-white' style={{ padding: '48px' }}>
          <span className='w3-jumbo w3-hide-small'>Start somthing that matters</span><br />
          <span className='w3-xxlarge w3-hide-large w3-hide-medium'>Start somthing that matters</span><br />
          <span className="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
          <p>
            <a href='#about' className='w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off'>
              Learn more and start today
            </a>
          </p>
        </article>
        <article className='w3-display-bottomleft w3-text-grey w3-large' style={{ padding: '24px 48px' }}>
          <BsFacebook />
          <AiOutlineInstagram />
          <RiSnapchatLine />
          <FaPinterestP />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </article>
      </header>

      {/* About section */}
      <section className='w3-container' style={{ padding: '128px 16px' }} id='about'>
        <h3 className='w3-center'>ABOUT ItenGateway Company</h3>
        <p className='w3-center w3-large'>key features of our company</p>
        <div className='w3-row-padding w3-center' style={{ marginBlockStart: '64px' }}>
          <div className='w3-quarter'>
            <FaDesktop className='w3-margin-bottom w3-jumbo w3-center' />
            <p className='w3-large'>Responsive</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="w3-quarter">
            <FaHeart className="w3-margin-bottom w3-jumbo" />
            <p className="w3-large">Passion</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="w3-quarter">
            <SiMaterialdesign className="w3-margin-bottom w3-jumbo" />
            <p className="w3-large">Design</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="w3-quarter">
            <FaCog className="w3-margin-bottom w3-jumbo" />
            <p className="w3-large">Support</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
        </div>
      </section>

      {/* Promo section - "We know design" */}
      <section className='w3-container w3-light-grey' style={{ padding: '128px 16px' }}>
        <div className='w3-row-padding'>
          <div className='w3-col m6'>
            <h3>We know design.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore.</p>
            <p>
              <Link to='#work' className='w3-button w3-black'><BsFillMenuButtonFill /> View Our Works</Link>
            </p>
          </div>
          <div className='w3-col m6'>
            <img src={phone_buildings} alt='building' width={700} height={394} />
          </div>
        </div>
      </section>

      {/* team Section */}
      <section className='w3-container' style={{ padding: '128px 16px' }} id='team'>
        <h3 className='w3-center'>THE TEAM</h3>
        <p className='w3-center w3-large'>The ones who runs this company</p>
        <div className='w3-row-padding w3-stretch w3-grayscale' style={{ marginBlockStart: '64px' }}>
          <div className='w3-col l4 m4 w3-margin-bottom'>
            <article className='w3-card'>
              <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
              <div className='w3-container'>
                <h3>Gerard FOKA</h3>
                <p className='w3-opacity'>CEO & Founder</p>
                <p>
                  <a href='mailto:gerard.foka@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
                </p>
              </div>
            </article>
          </div>
          <div className='w3-col l4 m4 w3-margin-bottom'>
            <article className='w3-card'>
              <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
              <div className='w3-container'>
                <h3>Landry NGOUPEYOU</h3>
                <p className='w3-opacity'>Web Designer</p>
                <p>
                  <a href='mailto:landry.ngoupeyou@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
                </p>
              </div>
            </article>
          </div>
          <div className='w3-col l4 m4 w3-margin-bottom'>
            <article className='w3-card'>
              <img src={person} alt='landry' style={{ inlineSize: '100%' }} />
              <div className='w3-container'>
                <h3>Eric SIAKA</h3>
                <p className='w3-opacity'>Frontend Web Developer</p>
                <p>
                  <a href='mailto:eric.siaka@itengateway.co' className='w3-button w3-light-grey w3-block'><MdEmail /> Contact</a>
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Promo Section "Statictics" */}
      <section className='w3-container w3-row w3-center w3-dark-grey w3-padding-64'>
        <div className='w3-quarter'>
          <span className='w3-xxlarge'>4+</span>
          <br /> Partners
        </div>
        <div className='w3-quarter'>
          <span className='w3-xxlarge'>2+</span>
          <br /> Projects Done
        </div>
        <div className='w3-quarter'>
          <span className='w3-xxlarge'>7+</span>
          <br /> Happy Client
        </div>
        <div className='w3-quarter'>
          <span className='w3-xxlarge'>8+</span>
          <br /> Meetings
        </div>
      </section>

      {/* Work section */}
      <section className='w3-container' style={{ padding: '128px 16px' }} id='work'>
        <h3 className='w3-center'>OUR WORKS</h3>
        <p class="w3-center w3-large">What we've done for people</p>
        <div className='w3-row-padding' style={{ marginBlockStart: '64px' }}>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
        </div>
        <div className='w3-row-padding' style={{ marginBlockStart: '64px' }}>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
          <div className='w3-col l3 m6'>
            <img src={mac} className='w3-hover-opacity' style={{ inlineSize: '100%' }} alt='' />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='w3-container w3-light-grey w3-padding-64'>
        <div className='w3-row-padding'>
          <div className='w3-col l6'>
            <h3>Our Skills.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />
              tempor incididunt ut labore et dolore.</p>
          </div>
          <div className='w3-col l6'>
            <p className='w3-wide'><ImHtmlFive className='w3-margin-right' />HTML5</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '90%' }}>
                90%
              </div>
            </div>
            <p className='w3-wide'><SiCss3 className='w3-margin-right' />CSS3</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '85%' }}>
                85%
              </div>
            </div>
            <p className='w3-wide'><SiJavascript className='w3-margin-right' /> ES6/7</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                80%
              </div>
            </div>
            <p className='w3-wide'><FaReact className='w3-margin-right' /> sReact.js / redux</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                80%
              </div>
            </div>
            <p className='w3-wide'><i className='w3-margin-right'>W3</i>W3CSS</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '80%' }}>
                90%
              </div>
            </div>
            <p className='w3-wide'><SiFirebase className='w3-margin-right' /> Firebase</p>
            <div className='w3-grey'>
              <div className='w3-container w3-dark-grey w3-center' style={{ inlineSize: '90%' }}>
                90%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='w3-container w3-dark-grey' style={{ padding: '128px 16px' }} id='pricing'>
        <h3 className='w3-center'>PRICING</h3>
        <p class="w3-large w3-center">Choose a pricing plan that fits your needs.</p>
        <div className='w3-row-padding w3-stretch' style={{ marginBlockStart: '64px' }}>
          <div className='w3-third w3-section'>
            <ul className='w3-ul w3-white w3-hover-shadow'>
              <li className='w3-black w3-xxlarge w3-padding-32'>Basic</li>
              <li className='w3-padding-16'><b>10GB</b> Storage</li>
              <li className='w3-padding-16'><b>10</b> Emails</li>
              <li className='w3-padding-16'><b>10</b> Domains</li>
              <li className='w3-padding-16'><b>Endless</b> Support</li>
              <li className='w3-padding-16'>
                <h2 className='w3-wide'>$ 10</h2>
                <span className='w3-opacity'>per month</span>
              </li>
              <li className='w3-light-grey w3-padding-24'>
                <button type='button' className='w3-button w3-black w3-padding-16'>
                  Sign up
                </button>
              </li>
            </ul>
          </div>
          <div className='w3-third w3-section'>
            <ul className='w3-ul w3-white w3-hover-shadow'>
              <li className='w3-red w3-xxlarge w3-padding-32'>Pro</li>
              <li className='w3-padding-16'><b>25GB</b> Storage</li>
              <li className='w3-padding-16'><b>25</b> Emails</li>
              <li className='w3-padding-16'><b>25</b> Domains</li>
              <li className='w3-padding-16'><b>Endless</b> Support</li>
              <li className='w3-padding-16'>
                <h2 className='w3-wide'>$ 25</h2>
                <span className='w3-opacity'>per month</span>
              </li>
              <li className='w3-light-grey w3-padding-24'>
                <button type='button' className='w3-button w3-black w3-padding-16'>
                  Sign up
                </button>
              </li>
            </ul>
          </div>
          <div className='w3-third w3-section'>
            <ul className='w3-ul w3-white w3-hover-shadow'>
              <li className='w3-black w3-xxlarge w3-padding-32'>Premium</li>
              <li className='w3-padding-16'><b>50GB</b> Storage</li>
              <li className='w3-padding-16'><b>50</b> Emails</li>
              <li className='w3-padding-16'><b>50</b> Domains</li>
              <li className='w3-padding-16'><b>Endless</b> Support</li>
              <li className='w3-padding-16'>
                <h2 className='w3-wide'>$ 50</h2>
                <span className='w3-opacity'>per month</span>
              </li>
              <li className='w3-light-grey w3-padding-24'>
                <button type='button' className='w3-button w3-black w3-padding-16'>
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='w3-container w3-light-grey' style={{ padding: '128px 16px' }} id='contact'>
        <h3 className='w3-center'>CONTACT</h3>
        <p className='w3-center w3-large'>lets get in touch. Send us a message:</p>
        <div style={{ marginBlockStart: '48px' }}>
          <p><ImLocation2 className='w3-xxlarge w3-margin-right' /> San Fransisco, US</p>
          <p><BsFillTelephoneFill className='w3-xxlarge w3-margin-right' /> <a href='tel:+1'>Tel</a></p>
          <p><MdEmail className='w3-xxlarge w3-margin-right' /> <a href='mailto: contact@itengateway.co'>Email: contact@itengateway.co</a></p>
          <br />
          <form method='post'>
            <section className='w3-section'>
              <input type='text' className='w3-input w3-border' placeholder='Name' name='name' required />
            </section>
            <section className='w3-section'>
              <input type='email' className='w3-input w3-border' placeholder='Email' name='email' required />
            </section>
            <section className='w3-section'>
              <input type='text' className='w3-input w3-border' placeholder='Subject' name='subject' required />
            </section>
            <section className='w3-section'>
              <textarea className='w3-input w3-border' placeholder='Message' rows='5' style={{ resize: 'vertical' }} />
            </section>
            <section className='w3-section'>
              <button type='submit' className='w3-button w3-black'>
                <RiSendPlaneFill />
              </button>
            </section>
          </form>
          {/* Image of location map */}
          <img src={map} className='w3-image w3-greyscale' style={{ inlineSize: '100%', marginBlockStart: '48px' }} />
        </div>
      </section>

      {/* Footer */}
      <footer className='w3-center w3-black w3-padding-64'>
        <Link to='#home' className='w3-button w3-light'>
          <FaArrowUp className='w3-margin-right' /> To the top
        </Link>
        <section className='w3-xlarge w3-section'>
          <BsFacebook />
          <AiOutlineInstagram />
          <RiSnapchatLine />
          <FaPinterestP />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </section>
        <p>&copy; itengateway - 2022</p>
      </footer>
    </>
  )
}

export default App;