import { useEffect } from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsFillMenuButtonFill, BsCurrencyDollar } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import logo from './Logo.png'
import { FiMenu } from 'react-icons/fi';

const Nav = () => {

  const handleOpenMenu = e => {
    const sidebar = document.querySelector('#mySidebar');
    if (sidebar.style.display === 'block') {
      sidebar.style.setProperty('display', 'none');
    } else {
      sidebar.style.setProperty('display', 'block');
    }
  }

  const handleCloseMenu = e => {
    const sidebar = document.querySelector('#mySidebar');
    sidebar.style.setProperty('display', 'none');
  }

  return (
    <>
      <header className='w3-top'>
        <section className='w3-bar w3-white w3-card' id='mynavbar'>
          <a href='#home' className='w3-bar-item w3-button w3-wide'>
            <img src={logo} style={{ maxInlineSize: '44px' }} />
          </a>
          <nav className='w3-right w3-hide-small'>
            <a href='#about' className='w3-bar-item w3-button'>ABOUT</a>
            <a href='#team' className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</a>
            <a href='#work' className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</a>
            <a href='#pricing' className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</a>
            <a href="#contact" className='w3-bar-item w3-button'><MdEmail /> CONTACT</a>
          </nav>
          {/*   
            Hide right-floated links on small screens and replace
            them with a menu button
          */}
          <button type='button' onClick={handleOpenMenu} className='w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium'>
            <FiMenu />
          </button>
        </section>
      </header>

      {/* Sidebar on small screens when clicking the menu icon */}
      <nav className='w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large' id='mySidebar' style={{ display: 'none', inlineSize: '250px' }}>
        <button type='button' className='w3-bar-item w3-button w3-large w3-padding-16' onClick={handleCloseMenu}>
          Close &#10008;
        </button>
        <a href='#about' onClick={handleCloseMenu} className='w3-bar-item w3-button'>ABOUT</a>
        <a href='#team' onClick={handleCloseMenu} className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</a>
        <a href='#work' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</a>
        <a href='#pricing' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</a>
        <a href="#contact" onClick={handleCloseMenu} className='w3-bar-item w3-button'><MdEmail /> CONTACT</a>
      </nav>
    </>
  )
}

export default Nav;