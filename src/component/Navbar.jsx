import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import './Navbar.scss';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    {/* Hamburger Menu */}
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <CgMenuRight onClick={showSidebar} />
        </Link>
      </div>
    {/* Sidebar Menu */}
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineCloseCircle />
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-text">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-text">
            <Link to="/portfolios">Portfolios</Link>
          </li>
          <li className="nav-text">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
