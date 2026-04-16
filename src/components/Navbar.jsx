import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const goToTop = () => { 
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <header>
      {/* Desktop Menu */}
      <div className="container-menu-desktop">
        <div className="wrap-menu-desktop">
          <nav className="limiter-menu-desktop container">
            <Link to="/" className="logo">
              <img src="https://portfoliosinharaj2005.netlify.app/assets/images/icons/logo-01.png" alt="logo" />
              Navroop Lifestyle
            </Link>

            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/category/all">Products</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="wrap-header-mobile">
        <div className="logo-mobile">
          <Link to="/">
            <img src="https://portfoliosinharaj2005.netlify.app/assets/images/icons/logo-01.png" alt="logo" />
            Navroop Lifestyle
          </Link>
        </div>

        {/* Hamburger Button */}
        <div
          className="btn-show-menu-mobile hamburger hamburger--squeeze"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="menu-mobile">
          <ul className="main-menu-m">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/category/all" onClick={() => setIsOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}