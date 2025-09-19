"use client";
import { useEffect, useState } from "react";

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8 animate-pulse">
          <img src="/assets/logo.png" className="w-48 sm:w-64 mx-auto" alt="Loading..." />
        </div>

        {/* Loading animation */}
        <div className="relative w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#6495ED] to-[#4169E1] transition-all duration-300 ease-out rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        </div>

        {/* Loading text */}
        <p className="text-white text-sm animate-pulse">
          Loading amazing experience...
        </p>

        {/* Floating dots */}
        <div className="flex justify-center space-x-2 mt-4">
          <div className="w-2 h-2 bg-[#6495ED] rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-[#6495ED] rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-[#6495ED] rounded-full animate-bounce delay-200"></div>
        </div>
      </div>

      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#6495ED] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
