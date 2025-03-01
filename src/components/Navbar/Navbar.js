import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo2.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src= {logo} alt="Logo" className="logo" />

        <div className="desktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
          {/* <Link activeClass='active' to='Contact' spy={true} offset={-100} duration={500} className="desktopMenuListItem">Contact</Link> */}
          {/* <Link className="desktopMenuListItem">Home</Link>
          <Link  className="desktopMenuListItem">Projects</Link>
          <Link  className="desktopMenuListItem">Contact</Link> */}
          {/* <Link className="desktopMenuListItem">Contact</Link> */}
        </div>
        <Link activeClass='active' to='Contact' spy={true} smooth={true} offset={-100} duration={500}>
        <button className="desktopMenu">
            <div className="desktopMenuContact">Contact Me</div> 
        </button>
        </Link>
    </nav>
  )
}

export default Navbar;