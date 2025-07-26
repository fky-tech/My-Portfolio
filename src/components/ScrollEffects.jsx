import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    // Attach the event listener to the document
    document.addEventListener('click', handleAnchorClick);

    // Create observers with different thresholds for different element types
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    const boxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
        }
      });
    }, { threshold: 0.2 });

    // Observe all section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      sectionObserver.observe(section);
    });

    // Observe all boxes and other elements that should animate
    const animateElements = document.querySelectorAll(
      '.animate-box, .skill-card, .project-card, .timeline-item'
    );
    animateElements.forEach(element => {
      boxObserver.observe(element);
    });

    // Cleanup function
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
      animateElements.forEach(element => {
        boxObserver.unobserve(element);
      });
    };
  }, []);

  return null;
}