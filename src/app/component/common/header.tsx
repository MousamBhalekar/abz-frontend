"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/button";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Navigation items configuration
  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Industries', href: '/industries' },
    { name: 'Product Development', href: '/Product-Development' },
    { name: 'Marketing Tech', href: '/Marketing-Technology' },
    { name: 'AI Solutions', href: '/Artificial-Intelligence' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-[20px] bg-[#000000aa] shadow-lg' 
          : 'backdrop-blur-[10px] bg-[#00000047]'
      }`}>
        <nav className="border-b border-[#ffffff1a] h-[80px]">
          <div className="flex items-center justify-between m-auto px-4 sm:px-8 md:px-12 lg:px-[75px] py-[15px]">
            <div className="flex items-center justify-between">
              <div className="pr-2 sm:pr-4 md:pr-8 lg:pr-[45px] border-[#ffffff33] border-r-[0.5px]">
                <Link href="/"><img src="/assets/logo.png" className={`transition-all duration-300 ${
                  isScrolled 
                    ? 'w-[100px] sm:w-[120px] md:w-[150px] lg:w-[200px]' 
                    : 'w-[120px] sm:w-[150px] md:w-[200px] lg:w-[250px]'
                }`} /></Link>
              </div>
              <div className="hidden md:block pl-2 sm:pl-4 md:pl-8 lg:pl-[45px]">
                <ul className="flex">
                  {navigationItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.name} className="p-[0px_8px] lg:p-[0px_15px]">
                        <Link 
                          href={item.href}
                          className={`transition-colors duration-300 ${
                            isActive 
                              ? 'text-[#6495ED]' 
                              : 'text-[#979797] hover:text-[#fff]'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="hidden sm:block"><Button variant="solid">Join Us</Button></div>
            {/* Mobile menu button with animation */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-white p-2 rounded-lg hover:bg-[#ffffff1a] transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`block h-0.5 w-6 bg-current transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile slide-out menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu panel */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gradient-to-b from-[#111111] to-[#000000] border-l border-[#ffffff1a] shadow-2xl transform transition-transform duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#ffffff1a]">
              <img src="/assets/logo.png" className="w-32" alt="Logo" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:bg-[#ffffff1a] rounded-lg transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-6">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name} className={`transform transition-all duration-500 delay-${index * 100}`} style={{
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100px)',
                      opacity: isMobileMenuOpen ? 1 : 0
                    }}>
                      <Link 
                        href={item.href}
                        className={`block text-xl py-3 px-4 rounded-lg transition-all duration-300 ${
                          isActive 
                            ? 'text-[#6495ED] bg-[#6495ED]/10 border border-[#6495ED]/20' 
                            : 'text-[#979797] hover:text-white hover:bg-[#ffffff0a]'
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            {/* Footer */}
            <div className="p-6 border-t border-[#ffffff1a]">
              <Button variant="solid" className="w-full justify-center">Join Us</Button>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="#" className="text-[#6495ED] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#6495ED] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#6495ED] hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-[80px]"></div>
    </>
  );
};