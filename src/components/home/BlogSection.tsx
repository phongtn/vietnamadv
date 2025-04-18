import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Card, { CardContent } from '../ui/Card';
import { blogPosts } from '../../data/blog-posts';

const BlogSection: React.FC = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('blog.title')}
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {t('blog.subtitle')}
            </p>
          </div>
          <Link to="/blog" className="mt-4 md:mt-0 group flex items-center text-primary-500 font-medium">
            {t('blog.viewAll')}
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
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-2 py-1">
                    {post.category}
                  </div>
                </div>
                <CardContent className="flex-grow flex flex-col">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Clock size={14} className="mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2 hover:text-primary-500 transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-xs text-gray-500">
                    <Tag size={14} className="mr-1" />
                    <div className="flex flex-wrap gap-x-2">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx}>#{tag}</span>
                      ))}
                      {post.tags.length > 3 && <span>+{post.tags.length - 3}</span>}
                    </div>
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

export default BlogSection;