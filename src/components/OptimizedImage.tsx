import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  width,
  height,
  className = '', 
  priority = false,
  sizes,
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback to placeholder image on error
  const fallbackSrc = '/images/placeholder.jpg';
  
  // Generate different format sources for the picture element
  const getImageSources = (originalSrc: string) => {
    if (imageError) return { avif: fallbackSrc, webp: fallbackSrc, original: fallbackSrc };
    
    const basePath = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '');
    const extension = originalSrc.match(/\.(jpg|jpeg|png)$/i)?.[1] || 'jpg';
    
    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`, 
      original: originalSrc
    };
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    if (!imageError) {
      setImageError(true);
      onError?.();
    }
  };

  const sources = getImageSources(src);
  const loading = priority ? 'eager' : 'lazy';
  const decoding = priority ? 'sync' : 'async';

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-muted animate-pulse rounded ${className}`}
          style={{ width, height }}
        />
      )}
      <picture>
        {/* AVIF source for modern browsers */}
        <source srcSet={sources.avif} type="image/avif" />
        {/* WebP source for broader support */}
        <source srcSet={sources.webp} type="image/webp" />
        {/* Fallback for all browsers */}
        <img
          src={imageError ? fallbackSrc : sources.original}
          alt={alt}
          width={width}
          height={height}
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          loading={loading}
          decoding={decoding}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      </picture>
    </div>
  );
};

export default OptimizedImage;