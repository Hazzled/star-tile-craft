import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes,
  onLoad,
  onError 
}: OptimizedImageProps) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Convert PNG to WebP if supported
  const getOptimizedSrc = (originalSrc: string) => {
    if (imageError) return originalSrc;
    
    // Check if browser supports WebP
    const supportsWebP = () => {
      const canvas = document.createElement('canvas');
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // For portfolio images, try to serve WebP version if available
    if (originalSrc.includes('/lovable-uploads/') && supportsWebP()) {
      // In a real implementation, you would have WebP versions generated
      // For now, we'll use the original but add WebP to the src set
      return originalSrc;
    }

    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  return (
    <div className="relative">
      {!isLoaded && (
        <div className={`absolute inset-0 bg-muted animate-pulse ${className}`} />
      )}
      <img
        src={getOptimizedSrc(src)}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading={loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        // Add WebP support via picture element when available
        {...(src.includes('/lovable-uploads/') && {
          srcSet: `${src.replace('.png', '.webp')} 1x, ${src.replace('.png', '@2x.webp')} 2x`
        })}
      />
    </div>
  );
};

export default OptimizedImage;