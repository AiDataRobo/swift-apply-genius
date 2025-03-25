
import { useEffect, RefObject } from 'react';

const useParallaxEffect = (ref: RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add('animate-fade-in');
    }
    
    // Add parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const heroElement = ref.current;
      const heroChildren = heroElement.querySelectorAll('.parallax-element');
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      heroChildren.forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.getAttribute('data-speed') || '0.05');
        const moveX = (x - 0.5) * speed * 50;
        const moveY = (y - 0.5) * speed * 50;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);
};

export default useParallaxEffect;
