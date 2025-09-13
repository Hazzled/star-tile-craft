// Image format detection and optimization utilities

export const getImageFormat = (src: string): string => {
  const extension = src.split('.').pop()?.toLowerCase();
  switch (extension) {
    case 'webp':
      return 'image/webp';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'avif':
      return 'image/avif';
    default:
      return 'image/jpeg';
  }
};

export const supportsWebP = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').startsWith('data:image/webp');
};

export const supportsAVIF = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/avif').startsWith('data:image/avif');
};

export const getOptimalFormat = (): 'avif' | 'webp' | 'jpeg' => {
  if (supportsAVIF()) return 'avif';
  if (supportsWebP()) return 'webp';
  return 'jpeg';
};

export const generateImageSrcSet = (
  baseSrc: string,
  sizes: number[] = [400, 800, 1200],
  format?: string
): string => {
  const baseUrl = baseSrc.replace(/\.[^.]+$/, '');
  const optimalFormat = format || getOptimalFormat();
  
  return sizes
    .map(size => `${baseUrl}-${size}w.${optimalFormat} ${size}w`)
    .join(', ');
};

export const createImageSizes = (
  breakpoints: { [key: string]: string } = {
    sm: '100vw',
    md: '50vw',
    lg: '33vw'
  }
): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => 
      breakpoint === 'sm' 
        ? `(max-width: 640px) ${size}`
        : breakpoint === 'md'
        ? `(max-width: 768px) ${size}`
        : `(max-width: 1024px) ${size}`
    )
    .join(', ') + `, ${breakpoints.lg || '33vw'}`;
};

// Progressive image loading with blur effect
export const createBlurDataURL = (
  width: number = 10,
  height: number = 10
): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) return '';
  
  canvas.width = width;
  canvas.height = height;
  
  // Create a simple gradient as placeholder
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, 'hsl(210, 10%, 90%)');
  gradient.addColorStop(1, 'hsl(210, 5%, 95%)');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL('image/jpeg', 0.1);
};

// Image preloading utility
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch image preloading
export const preloadImages = async (sources: string[]): Promise<void> => {
  await Promise.all(sources.map(preloadImage));
};

// Calculate optimal image dimensions
export const calculateOptimalDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number = 1200,
  maxHeight: number = 1200
): { width: number; height: number } => {
  const ratio = Math.min(maxWidth / originalWidth, maxHeight / originalHeight);
  
  if (ratio >= 1) {
    return { width: originalWidth, height: originalHeight };
  }
  
  return {
    width: Math.round(originalWidth * ratio),
    height: Math.round(originalHeight * ratio)
  };
};