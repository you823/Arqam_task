import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import menuItems from '/src/assets/data/menuItems.json';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NavbarComp = () => {
  const { t, i18n } = useTranslation();
  const [searchParams,setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    
    // Update URL
    setSearchParams({ lang: newLang }); // Sets ?lang=ar or ?lang=en

    // Change language and update DOM
    i18n.changeLanguage(newLang, () => {
        localStorage.setItem('i18nextLng', newLang);
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    });
  };

  return (
    <nav className='navbar fixed-top navbar-expand-lg'>
      <div className='container'>
        {/* Logo */}
        <div className='navbar-brand'>
          <Link to="https://www.eic.com.sa/" target='_blank' className='navbar-logo'>
            <img 
              style={{height: "90px"}} 
              src='/src/assets/logo.png' 
              alt={t('logoAlt')} 
              loading='lazy' 
              className='img-fluid'
            />
          </Link>
        </div>

         {/* Right Navigation Section */}
        <div className="right-nav">
          {/* Language Toggle Button */}
          <div className='lang-toggle'>
            <button 
              className='btn py-1 px-2 fw-bold' 
              onClick={changeLanguage}
            >
              {i18n.language === 'en' ? 'عربي' : 'English'}
            </button>
          </div>

          {/* Main Menu Dropdown */}
          <div className='menu-icon' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <button>
            <h6 className="d-flex align-items-center mb-0"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 10h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2zM19 3h-14c-1.103 0-2 .897-2 2s.897 2 2 2h14c1.103 0 2-.897 2-2s-.897-2-2-2z"></path></svg><span className="fs-6 mx-1 fw-bold">{t("menu")}</span></h6>
            </button>
          </div>
          <ul className={`dropdown-menu ${isMenuOpen ? 'show' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a className="dropdown-item" href={item.path}>
                  {t(item.title)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComp;