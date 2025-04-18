import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { activities } from '../../data/activities';

const MapPreview: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('map.title')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('map.description')}
            </p>
            
            <div className="space-y-4 mb-8">
              {activities.slice(0, 3).map((activity) => (
                <div 
                  key={activity.id} 
                  className="flex items-start p-3 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group"
                >
                  <MapPin className="h-5 w-5 mt-1 text-primary-500 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium group-hover:text-primary-700 transition-colors">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-gray-500">{activity.location}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/map">
              <Button 
                variant="primary" 
                icon={<Compass />}
              >
                {t('map.exploreMap')}
              </Button>
            </Link>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6155099/pexels-photo-6155099.jpeg" 
                alt="Vietnam Adventure Map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white">
                  <Compass className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-medium">{t('map.interactiveMap')}</p>
                </div>
              </div>
            </div>
            
            {/* Map Pins */}
            <div className="absolute top-1/4 left-1/3 h-4 w-4 rounded-full bg-accent-500 animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 h-4 w-4 rounded-full bg-primary-500 animate-pulse"></div>
            <div className="absolute top-2/3 right-1/4 h-4 w-4 rounded-full bg-secondary-500 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapPreview;