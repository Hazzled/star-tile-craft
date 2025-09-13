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
  quality = 80,
  priority = false,
  responsive = true
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string>('');

  // Generate responsive image sources
  const generateResponsiveSources = (originalSrc: string) => {
    if (!responsive || originalSrc.includes('placeholder.jpg')) {
      return { webp: originalSrc, fallback: originalSrc };
    }

    // For uploaded images, try to generate WebP version
    const baseSrc = originalSrc.replace(/\.(png|jpg|jpeg)$/i, '');
    const extension = originalSrc.match(/\.(png|jpg|jpeg)$/i)?.[1] || 'jpg';
    
    return {
      webp: `${baseSrc}.webp`,
      fallback: originalSrc,
      srcSet: [
        `${baseSrc}-400w.webp 400w`,
        `${baseSrc}-800w.webp 800w`,
        `${baseSrc}-1200w.webp 1200w`,
        originalSrc // fallback
      ].join(', '),
      fallbackSrcSet: [
        `${baseSrc}-400w.${extension} 400w`,
        `${baseSrc}-800w.${extension} 800w`,
        `${baseSrc}-1200w.${extension} 1200w`,
        originalSrc
      ].join(', ')
    };
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') return;

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

  // Update current src when in view
  useEffect(() => {
    if (isInView && !imageError) {
      setCurrentSrc(src);
    }
  }, [isInView, src, imageError]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    setCurrentSrc('/images/portfolio/placeholder.jpg');
    onError?.();
  };

  const imageSources = generateResponsiveSources(imageError ? '/images/portfolio/placeholder.jpg' : currentSrc);

  // Generate blur placeholder
  const blurDataURL = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOmhzbCgyMTAgMTAlIDkwJSk7c3RvcC1vcGFjaXR5OjEiIC8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjpoc2woMjEwIDUlIDk1JSk7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNnKSIgLz48L3N2Zz4=";

  return (
    <div className="relative overflow-hidden" ref={imgRef}>
      {/* Blur placeholder */}
      {!isLoaded && isInView && (
        <img
          src={blurDataURL}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover blur-sm scale-110 ${className}`}
          aria-hidden="true"
        />
      )}
      
      {/* Loading skeleton */}
      {!isInView && !priority && (
        <div className={`bg-gradient-to-br from-muted to-muted/60 animate-pulse ${className}`} />
      )}

      {/* Main image with WebP support */}
      {(isInView || priority) && (
        <picture>
          {responsive && !imageError && (
            <source
              srcSet={imageSources.srcSet}
              sizes={sizes}
              type="image/webp"
            />
          )}
          {responsive && !imageError && (
            <source
              srcSet={imageSources.fallbackSrcSet}
              sizes={sizes}
              type="image/jpeg"
            />
          )}
          <img
            src={imageSources.fallback}
            alt={alt}
            className={`${className} transition-all duration-500 ${
              !isLoaded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            loading={priority ? 'eager' : loading}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            decoding="async"
          />
        </picture>
      )}
    </div>
  );
};

export default OptimizedImage;