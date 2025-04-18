import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { events } from '../../data/events';

const EventsSection: React.FC = () => {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('events.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {t('events.subtitle')}
            </p>
          </div>
          <Link to="/events" className="mt-4 md:mt-0 group flex items-center text-primary-500 font-medium">
            {t('events.viewAll')}
            <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {events.slice(0, 4).map((event) => (
            <motion.div key={event.id} variants={item}>
              <Card className="h-full overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3 relative">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full h-full object-cover md:h-full max-h-48 md:max-h-full"
                  />
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-2 py-1">
                    {event.type}
                  </div>
                </div>
                <CardContent className="md:w-2/3 flex flex-col p-6">
                  <div className="mb-2">
                    <div className="flex items-center text-accent-500 font-medium mb-1">
                      <Calendar size={16} className="mr-1" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {event.location}
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    <Link to={`/events/${event.id}`}>
                      <Button variant="outline" size="sm">
                        {t('events.details')}
                      </Button>
                    </Link>
                    {event.registrationUrl && (
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="primary" size="sm" icon={<ExternalLink size={14} />}>
                          {t('events.register')}
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;