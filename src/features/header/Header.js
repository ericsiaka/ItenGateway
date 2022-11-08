import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiSnapchatLine } from 'react-icons/ri';
import { FaPinterestP, FaLinkedinIn } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className='w3-display-container w3-grayscale-min header' id='home'>
      <article className='w3-display-middleleft w3-text-white' style={{ padding: '48px' }}>
        <span className="w3-large">CREATIVE MIND, CREATIVE WORKS</span><br />
        <span className='w3-jumbo w3-hide-small'>We are <span className='w3-text-blue'>Digital agence</span></span><br />
        <span className='w3-xxlarge w3-hide-large w3-hide-medium'>We are <span className='w3-text-blue'>Digital agence</span></span><br />
        <p>
          <a href='#about' className='w3-button w3-orange w3-round w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off'>
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
  )
}

export default Header;