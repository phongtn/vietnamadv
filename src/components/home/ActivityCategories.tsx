import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mountain, FileWarning as Running, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card from '../ui/Card';

const ActivityCategories: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('categories.outdoorSports'),
      description: t('categories.outdoorSportsDesc'),
      icon: <Running size={40} className="text-primary-500" />,
      link: '/outdoor-sports',
      color: 'from-primary-500 to-primary-600',
      image: 'https://images.pexels.com/photos/2002656/pexels-photo-2002656.jpeg'
    },
    {
      title: t('categories.outdoorActivities'),
      description: t('categories.outdoorActivitiesDesc'),
      icon: <Mountain size={40} className="text-secondary-500" />,
      link: '/outdoor-activities',
      color: 'from-secondary-500 to-secondary-600',
      image: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg'
    },
    {
      title: t('categories.gearTech'),
      description: t('categories.gearTechDesc'),
      icon: <Compass size={40} className="text-accent-500" />,
      link: '/gear-tech',
      color: 'from-accent-500 to-accent-600',
      image: 'https://images.pexels.com/photos/3074245/pexels-photo-3074245.jpeg'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('categories.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Link to={category.link} className="block h-full">
                <Card className="h-full overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 opacity-75 bg-gradient-to-br ${category.color}`}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white rounded-full p-4">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ActivityCategories;