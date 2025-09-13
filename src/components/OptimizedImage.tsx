import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  quality?: number;
  priority?: boolean;
  responsive?: boolean;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  onLoad,
  onError,
  priority = false
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  const imageSrc = imageError ? '/images/portfolio/placeholder.jpg' : src;

  return (
    <div className="relative overflow-hidden" ref={imgRef}>
      {/* Loading skeleton */}
      {!isLoaded && isInView && (
        <div className={`absolute inset-0 bg-gradient-to-br from-muted to-muted/60 animate-pulse ${className}`} />
      )}
      
      {/* Placeholder for lazy loading */}
      {!isInView && !priority && (
        <div className={`bg-gradient-to-br from-muted to-muted/60 ${className}`} />
      )}

      {/* Main image */}
      {isInView && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} transition-all duration-300 ${
            !isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          loading={priority ? 'eager' : loading}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          decoding="async"
        />
      )}
    </div>
  );
};

export default OptimizedImage;