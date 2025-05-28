'use client'

import { createContext, useEffect, useRef, ReactNode } from 'react';

interface AnimationContextType {
  observeElement: (element: HTMLElement) => void;
  unobserveElement: (element: HTMLElement) => void;
}

export const AnimationContext = createContext<AnimationContextType | null>(null);

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const observer = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Create the observer
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });
    
    // Get all sections that need animation
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      if (observer.current) {
        observer.current.observe(section);
      }
    });
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  
  const observeElement = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  };
  
  const unobserveElement = (element: HTMLElement) => {
    if (observer.current) {
      observer.current.unobserve(element);
    }
  };
  
  return (
    <AnimationContext.Provider value={{ observeElement, unobserveElement }}>
      {children}
    </AnimationContext.Provider>
  );
}
