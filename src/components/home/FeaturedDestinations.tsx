import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { featuredDestinations } from '../../data/featured-destinations';

const FeaturedDestinations: React.FC = () => {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('destinations.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {t('destinations.subtitle')}
            </p>
          </div>
          <Link to="/destinations" className="mt-4 md:mt-0 group flex items-center text-primary-500 font-medium">
            {t('destinations.viewAll')}
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featuredDestinations.map((destination) => (
            <motion.div key={destination.id} variants={item}>
              <Card className="h-full overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-heading font-semibold text-xl">{destination.name}</h3>
                    <div className="flex items-center text-white/80 text-sm mt-1">
                      <MapPin size={14} className="mr-1" />
                      {destination.location}
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.activities.slice(0, 3).map((activity, index) => (
                      <Badge key={index} variant={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'secondary' : 'accent'}>
                        {activity}
                      </Badge>
                    ))}
                    {destination.activities.length > 3 && (
                      <Badge variant="secondary">+{destination.activities.length - 3}</Badge>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;