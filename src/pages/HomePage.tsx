import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ActivityCategories from '../components/home/ActivityCategories';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import BlogSection from '../components/home/BlogSection';
import EventsSection from '../components/home/EventsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import MapPreview from '../components/home/MapPreview';
import FeatureHighlights from '../components/home/FeatureHighlights';
import Layout from '../components/layout/Layout';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <ActivityCategories />
      <FeaturedDestinations />
      <FeatureHighlights />
      <EventsSection />
      <MapPreview />
      <BlogSection />
      <NewsletterSection />
    </Layout>
  );
};

export default HomePage;