import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would normally send to an API
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Mail className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {t('newsletter.title')}
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            {t('newsletter.description')}
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            {!isSubmitted ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="flex-grow px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent-500"
                  required
                />
                <Button 
                  type="submit"
                  variant="accent"
                  className="whitespace-nowrap"
                >
                  {t('newsletter.subscribe')}
                </Button>
              </div>
            ) : (
              <div className="bg-white/10 py-3 px-4 rounded-md flex items-center justify-center">
                <CheckCircle className="text-accent-500 mr-2" />
                <p>{t('newsletter.success')}</p>
              </div>
            )}
          </form>
          
          <p className="mt-4 text-sm text-white/70">
            {t('newsletter.privacy')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;