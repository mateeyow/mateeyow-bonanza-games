import { useState } from 'react'
import Button from '../Button/Button'
import './header.scss'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='header'>
      <div className='container'>
        <div className='header-items'>
          <a href='/'>LOGO HERE</a>
          <div className='ml-auto'>
            <Button>Login</Button>
            <Button variant='primary'>Sign Up</Button>
          </div>
          <button className='hamburger-menu ml-auto' onClick={() => setIsMenuOpen(true)}>
            <svg width="50px" height="50px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
              <line x1="16" x2="56" y1="26" y2="26" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
              <line x1="16" x2="56" y1="36" y2="36" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
              <line x1="16" x2="56" y1="46" y2="46" fill="none" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
            </svg>
          </button>
        </div>
        <nav className='header-navigation'>
          <ul className='navigation-links'>
            <li>
              <a className='active' href='/'>Home</a>
            </li>
            <li>
              <a href='/'>RPG</a>
            </li>
            <li>
              <a href='/'>Arcade</a>
            </li>
            <li>
              <a href='/'>Brain Games</a>
            </li>
          </ul>
          <ul className='navigation-links ml-auto'>
            <li>
              <a href='/'>Support</a>
            </li>
            <li>
              <a href='/'>Contact Us</a>
            </li>
          </ul>
        </nav>

        {isMenuOpen &&
          <nav className='mobile-navigation'>
            <div className='mobile-nav-logo'>
              <a href='/'>LOGO HERE</a>
              <button onClick={() => setIsMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 371.23 371.23">
                  <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615" />
                </svg>
              </button>
            </div>
            <div className='mobile-nav-btns'>
              <Button>Login</Button>
              <Button variant='primary'>Sign Up</Button>
            </div>
            <ul className='mobile-nav-items'>
              <li>
                <a className='active' href='/'>Home</a>
              </li>
              <li>
                <a href='/'>RPG</a>
              </li>
              <li>
                <a href='/'>Arcade</a>
              </li>
              <li>
                <a href='/'>Brain Games</a>
              </li>
              <li>
                <a href='/'>Support</a>
              </li>
              <li>
                <a href='/'>Contact Us</a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </header >
  )
}

export default Header
