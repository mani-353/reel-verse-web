import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import BottomNav from '@/components/BottomNav';
import ReelCard from '@/components/ReelCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { generateFeed } from '@/constants/feedGenerator';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feed, setFeed] = useState(generateFeed());
  
  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="app-container">
      <Header />
      
      <main className="page-container">
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="p-4 space-y-6 max-w-md mx-auto">
            {feed.map((item, index) => (
              <ReelCard 
                key={`${item.user.username}-${index}`} 
                reel={item} 
                user={item.user} 
              />
            ))}
          </div>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Home;
