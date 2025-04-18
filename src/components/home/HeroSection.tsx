import React from 'react';
import Button from '../ui/Button';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen-80 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5361525/pexels-photo-5361525.jpeg')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white font-bold mb-4">
            {t('hero.title')}
          </h1>
          
          <p className="text-white text-xl mb-8">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="accent" 
              size="lg"
              icon={<MapPin />}
              className="sm:w-auto w-full"
            >
              {t('hero.exploreBtn')}
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;