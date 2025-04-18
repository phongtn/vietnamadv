import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Logo } from './Logo';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'vi', name: 'Tiếng Việt' }
  ];
  
  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.outdoorSports'), 
      path: '/outdoor-sports',
      dropdown: [
        { name: t('sports.trailRunning'), path: '/outdoor-sports/trail-running' },
        { name: t('sports.running'), path: '/outdoor-sports/running' },
        { name: t('sports.raceGuides'), path: '/outdoor-sports/race-guides' },
      ] 
    },
    { 
      name: t('nav.outdoorActivities'), 
      path: '/outdoor-activities',
      dropdown: [
        { name: t('activities.hiking'), path: '/outdoor-activities/hiking' },
        { name: t('activities.climbing'), path: '/outdoor-activities/climbing' },
        { name: t('activities.caving'), path: '/outdoor-activities/caving' },
        { name: t('activities.camping'), path: '/outdoor-activities/camping' },
        { name: t('activities.biking'), path: '/outdoor-activities/biking' },
      ] 
    },
    { name: t('nav.gearTech'), path: '/gear-tech' },
    { name: t('nav.events'), path: '/events' },
    { name: t('nav.map'), path: '/map' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo className="h-10 w-auto" />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <div key={link.path} className="relative group">
              {link.dropdown ? (
                <>
                  <button className="flex items-center text-foreground hover:text-primary-500 font-medium">
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={link.path}
                  className="text-foreground hover:text-primary-500 font-medium"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
        <div className="hidden lg:flex items-center">
          <div className="relative group">
            <button className="flex items-center text-foreground hover:text-primary-500">
              <Globe className="h-5 w-5 mr-1" />
              <span className="mr-1">
                {languages.find(lang => lang.code === i18n.language)?.name || 'EN'}
              </span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
              <Logo className="h-8 w-auto" />
            </Link>
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>
          
          <nav className="space-y-6 mt-8">
            {navLinks.map((link) => (
              <div key={link.path} className="py-2">
                {link.dropdown ? (
                  <div className="space-y-2">
                    <p className="font-medium text-lg">{link.name}</p>
                    <div className="pl-4 space-y-2 border-l-2 border-primary-200">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block text-gray-600 hover:text-primary-500"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block font-medium text-lg hover:text-primary-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <p className="font-medium">{t('header.language')}</p>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded ${
                      i18n.language === lang.code ? 'bg-primary-100 text-primary-700' : 'text-gray-500'
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;