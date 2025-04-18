import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ChevronRight, Facebook, Instagram, Youtube, Twitter, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: t('footer.explore'),
      links: [
        { name: t('footer.trails'), path: '/outdoor-activities/hiking' },
        { name: t('footer.climbing'), path: '/outdoor-activities/climbing' },
        { name: t('footer.running'), path: '/outdoor-sports/trail-running' },
        { name: t('footer.caving'), path: '/outdoor-activities/caving' },
        { name: t('footer.events'), path: '/events' },
      ],
    },
    {
      title: t('footer.resources'),
      links: [
        { name: t('footer.weatherInfo'), path: '/weather' },
        { name: t('footer.safetyTips'), path: '/safety' },
        { name: t('footer.equipment'), path: '/gear-tech' },
        { name: t('footer.seasonGuide'), path: '/seasonal-guide' },
      ],
    },
    {
      title: t('footer.community'),
      links: [
        { name: t('footer.forum'), path: '/community/forum' },
        { name: t('footer.stories'), path: '/community/stories' },
        { name: t('footer.photos'), path: '/community/photos' },
        { name: t('footer.reviews'), path: '/community/reviews' },
      ],
    },
    {
      title: t('footer.company'),
      links: [
        { name: t('footer.about'), path: '/about' },
        { name: t('footer.contact'), path: '/contact' },
        { name: t('footer.press'), path: '/press' },
        { name: t('footer.partners'), path: '/partners' },
        { name: t('footer.careers'), path: '/careers' },
      ],
    },
  ];

  return (
    <footer className="bg-foreground text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-medium text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-accent-500 transition-colors flex items-center"
                    >
                      <ChevronRight size={14} className="mr-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} VietnamADV. {t('footer.copyright')}
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                {t('footer.privacy')}
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;