import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-motion-reveal]';

export function useRevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const revealElements = document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach(element => element.classList.add('motion-visible'));
      return () => root.classList.remove('motion-ready');
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const element = entry.target as HTMLElement;
          element.classList.add('motion-visible');
          observer.unobserve(element);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    revealElements.forEach(element => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove('motion-ready');
    };
  }, []);
}