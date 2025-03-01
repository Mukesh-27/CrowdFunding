import React, { useState } from 'react';
import Hero from '../components/Landingpage/Hero';
import About from '../components/Landingpage/About'
import TrustedSection from '../components/Landingpage/TrustedSection';
import FeaturedProjects from '../components/Landingpage/FeaturedProjects';
import ExploreCategories from '../components/Landingpage/Explorecateg';
import CreatorCTA from '../components/Landingpage/CreatorCTA';
import SuccessStories from '../components/Landingpage/SuccessStories';
import BlogSection from '../components/Landingpage/BlogSection';
import Chat from './Chat';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative">
      <Hero />
      <About/>
      <FeaturedProjects />
      <ExploreCategories />
      <CreatorCTA />
      <SuccessStories />
      <BlogSection />
      <TrustedSection />
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
      >
        <i className={`fas ${isChatOpen ? 'fa-times' : 'fa-comment'} text-xl`}></i>
      </button>
      {isChatOpen && <Chat />}
    </div>
  );
};

export default Home;