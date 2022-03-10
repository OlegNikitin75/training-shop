import React, {useEffect, useRef, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import Social from "../social/Social";
import search from '../../img/icons/search.svg';
import globe from '../../img/icons/globe.svg';
import user from '../../img/icons/user.svg';
import cart from '../../img/icons/shopping-bag.svg';

const Navbar = ({navItems}) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const navRef = useRef();
  const btnRef = useRef();

  const closeMobileMenu = () => {
    setClick(false);
    document.body.style.overflow = 'visible';
  }

  const handleClickOutside = (e) => {
    if (!e.path.includes(navRef.current) && !e.path.includes(btnRef.current)) {
      closeMobileMenu();
    }

  };
  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  });


  const HandelClick = () => {
    setClick(!click);
    if (!click) document.body.style.overflow = 'hidden';
    if (click) document.body.style.overflow = 'visible';
  }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true)
    }
  }
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <div className="navbar" data-test-id="header">
      <div className="navbar__header">
        <div className="container">
          <div className="navbar__header-wrap">
            <div className="navbar__contacts">
              <a href="tel:+375 29 100 20 30" className="navbar__item navbar__phone">+375 29 100 20 30</a>
              <Link to="/" className="navbar__item navbar__location">Belarus, Gomel, Lange 17</Link>
              <Link to="/" className="navbar__item navbar__time">All week 24/7</Link>
            </div>
            <Social/>
          </div>
        </div>
      </div>
      <div className="navbar__navigation">

        <div className="container">
          <div className="navbar__navigation-wrap">
            <Link
              to="/"
              className="navbar__navigation-logo"
              onClick={closeMobileMenu}
              data-test-id="header-logo-link"
            >
              <h1>CleverShop</h1>
            </Link>
            <nav
              data-test-id='burger-menu'
              className={click ?
                "navbar__navigation-nav navbar__navigation-nav--active"
                : "navbar__navigation-nav"}

            >
              <div className={click ? "overlay active" : ""}/>
              <ul ref={navRef} className="navbar__navigation-list">
                {
                  navItems.map((item, index) =>
                    <li
                      key={`item${index}`}
                      className="navbar__navigation-item">
                      <NavLink
                        to={`/${item.path}`}
                        className="navbar__navigation-link"
                        onClick={closeMobileMenu}
                        data-test-id={`menu-link-${item.path}`}
                      >
                        {item.name}
                      </NavLink>
                    </li>)
                }
              </ul>
            </nav>
            <div className="navbar__navigation-box">
              <div className="navbar__navigation-search">
                <Link to="/" className="navbar__navigation-search__link">
                  <img src={search}
                       alt="icon-search"/>
                </Link>
                <Link to="/" className="navbar__navigation-search__link">
                  <img src={globe}
                       alt="icon-global"/>
                </Link>
                <Link to="/" className="navbar__navigation-search__link">
                  <img src={user}
                       alt="icon-user"/>
                </Link>
                <Link to="/" className="navbar__navigation-search__link">
                  <img src={cart}
                       alt="icon-cart"/>
                  <span id="cart" className="navbar__navigation-search__cart">2</span>
                </Link>
              </div>

              <button data-test-id="burger-menu-btn"
                      ref={btnRef}
                      className={button
                        ? "navbar__navigation-btn__mobile"
                        : "navbar__navigation-btn__mobile navbar__navigation-btn__mobile--active"}
                      onClick={HandelClick}>
                <span className={click
                  ? "navbar__navigation-btn__span--close"
                  : "navbar__navigation-btn__span"
                }/>
                <span className={click
                  ? "navbar__navigation-btn__span--close"
                  : "navbar__navigation-btn__span"
                }/><span className={click
                ? "navbar__navigation-btn__span--close"
                : "navbar__navigation-btn__span"
              }/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Navbar;
