import { useEffect } from 'react';
import { AiOutlineTeam } from 'react-icons/ai';
import { BsFillMenuButtonFill, BsCurrencyDollar } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import logo from './Iten-removebg-preview.png'
import { FiMenu } from 'react-icons/fi';
import './Nav.css';
import { nanoid } from '@reduxjs/toolkit';

const Nav = () => {

  useEffect(() => {    
    const acc = Array.from(document.querySelectorAll('.accordion'));
    for (const accordion of acc) {
      accordion.addEventListener('click', e => {
        e.target.classList.toggle("active");
        let panel = e.target.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      }, false);

    }
  }, []);

  const handleOpenMenu = e => {
    const sidebar = document.querySelector('#mySidebar'),
      overlay = document.querySelector('#myOverlay');
    if (sidebar.style.display === 'block') {
      sidebar.style.setProperty('display', 'none');
      overlay.style.setProperty('display', 'none');
    } else {
      sidebar.style.setProperty('display', 'block');
      overlay.style.setProperty('display', 'block');
    }
  }

  const handleCloseMenu = e => {
    const sidebar = document.querySelector('#mySidebar'),
      overlay = document.querySelector('#myOverlay');
    sidebar.style.setProperty('display', 'none');
    overlay.style.setProperty('display', 'none');
  }

  return (
    <>
      <header className='w3-top'>
        <section className='w3-bar w3-card nav' id='myNavbar'>
          <a href='#home' className='w3-bar-item w3-button w3-wide'>
            <img src={logo} className='logo' />
          </a>
          <nav className='w3-right w3-hide-small w3-hide-medium'>
            <a href='#about' aria-label='about' className='w3-bar-item w3-button'>ABOUT</a>
            <a href='#team' className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</a>
            <a href='#work' className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</a>
            <a href='#pricing' className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</a>
            <a href="#contact" className='w3-bar-item w3-button'><MdEmail /> CONTACT</a>
            <div className='w3-dropdown-hover'>
              <button type='button' className='w3-bar-item w3-button'>SERVICES</button>
              <div className='w3-dropdown-content w3-border w3-bar-block w3-card-4' style={{ right: 0, insetInlineEnd: 15, top: '100px' }}>
                <button type='button' className='w3-button w3-bar-item'>Service 1</button>
                <button type='button' className='w3-button w3-bar-item'>Service 2</button>
                <button type='button' className='w3-button w3-bar-item'>Service 3</button>
              </div>
            </div>
          </nav>
          {/*   
            Hide right-floated links on small screens and replace
            them with a menu button
          */}
          <button type='button' onClick={handleOpenMenu} className='w3-bar-item w3-button w3-right w3-hide-large'>
            <FiMenu />
          </button>
        </section>
      </header>

      {/* Sidebar on small screens when clicking the menu icon */}
      <div className='w3-overlay' id='myOverlay' onClick={handleCloseMenu} style={{cursor: 'pointer'}}></div>  
      <nav className='w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-large' id='mySidebar' style={{ display: 'none', inlineSize: '230px', top: '0' }}>
        <button type='button' className='w3-bar-item w3-button w3-large w3-padding-16' onClick={handleCloseMenu}>
          Close &#10008;
        </button>
        <a href='#about' onClick={handleCloseMenu} className='w3-bar-item w3-button'>ABOUT</a>
        <a href='#team' onClick={handleCloseMenu} className='w3-bar-item w3-button'><AiOutlineTeam /> TEAM</a>
        <a href='#work' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsFillMenuButtonFill /> WORK</a>
        <a href='#pricing' onClick={handleCloseMenu} className='w3-bar-item w3-button'><BsCurrencyDollar /> PRICING</a>
        <a href="#contact" onClick={handleCloseMenu} className='w3-bar-item w3-button'><MdEmail /> CONTACT</a>
        <button type='button' className='w3-bar-item w3-button accordion'>SERVICES</button>
        <div className='panel'>
          <p>Lorem ipsum...</p>
        </div>
      </nav>
    </>
  )
}

export default Nav;