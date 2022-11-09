import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { RiSnapchatLine } from 'react-icons/ri';
import { FaPinterestP, FaLinkedinIn, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='w3-center w3-black w3-padding-64'>
      <a href='#home' className='w3-button w3-light-grey'>
        <FaArrowUp className='w3-margin-right' /> To the top
      </a>
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
  )
}

export default Footer;