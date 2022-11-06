import { FaCog, FaHeart, FaDesktop } from 'react-icons/fa';
import { SiMaterialdesign } from 'react-icons/si';

const About = () => {
  return (
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
  )
}

export default About;