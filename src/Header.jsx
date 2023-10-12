import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useRef } from "react"; 

function Header() {
 
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const sideMenuRef = useRef(null);


  function openMenu() {
    setIsSideMenuOpen(true);

    sideMenuRef.current.style.right = "0";
  }


  function closeMenu() {
    setIsSideMenuOpen(false);

    sideMenuRef.current.style.right = "-200px";
  }

  const sideMenuClass = isSideMenuOpen ? "side-menu open" : "side-menu";

  return (
    <>
      <div id="header">
        <div className="container">
          <nav>
            <img src="logo.png" className="logo" />
            <ul ref={sideMenuRef} className={sideMenuClass}>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <FaTimes className="phone-icon" onClick={closeMenu} />
            </ul>
            <FaBars className="phone-icon" onClick={openMenu} />
          </nav>
          <div className="header-text">
            <p>BSIT STUDENT</p>
            <h1>
              Hello World, I'm <span>Dexter</span>
              <br /> Niel Aidriel Basergo
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
