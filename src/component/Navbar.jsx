import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
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
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="Menu-bars">
              <AiOutlineCloseCircle />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
