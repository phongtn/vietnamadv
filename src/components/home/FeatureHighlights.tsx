import React from 'react';
import { motion } from 'framer-motion';
import { Map, Calendar, ShieldCheck, Users, LayoutGrid, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FeatureHighlights: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Map className="h-8 w-8 text-primary-500" />,
      title: t('features.maps'),
      description: t('features.mapsDesc'),
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary-500" />,
      title: t('features.safety'),
      description: t('features.safetyDesc'),
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary-500" />,
      title: t('features.seasons'),
      description: t('features.seasonsDesc'),
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: t('features.community'),
      description: t('features.communityDesc'),
    },
    {
      icon: <LayoutGrid className="h-8 w-8 text-primary-500" />,
      title: t('features.activities'),
      description: t('features.activitiesDesc'),
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-500" />,
      title: t('features.planning'),
      description: t('features.planningDesc'),
    },
  ];

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('features.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="flex">
              <div className="mr-4 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;