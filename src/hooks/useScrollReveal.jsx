import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook — observes a ref and returns `true` once the element
 * scrolls into view.  Stays `true` forever (no re-hiding).
 *
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);          // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return { ref, isVisible };
}

/**
 * Wrapper component for children that should fade/slide in on scroll.
 *
 * `direction` — 'up' | 'down' | 'left' | 'right' | 'none'
 * `delay`     — CSS delay value, e.g. '200ms'
 */
export function ScrollReveal({
  children,
  direction = 'up',
  delay = '0ms',
  className = '',
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  const dirClass = {
    up: 'scroll-reveal-up',
    down: 'scroll-reveal-down',
    left: 'scroll-reveal-left',
    right: 'scroll-reveal-right',
    none: 'scroll-reveal-fade',
  }[direction];

  return (
    <div
      ref={ref}
      className={`${dirClass} ${isVisible ? 'scroll-revealed' : ''} ${className}`}
      style={{ transitionDelay: delay }}
      {...rest}
    >
      {children}
    </div>
  );
}
