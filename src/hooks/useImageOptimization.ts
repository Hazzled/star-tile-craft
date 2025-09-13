import { useCallback, useState } from 'react';

interface ImageOptimizationOptions {
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
  format?: 'webp' | 'jpeg' | 'png';
}

export const useImageOptimization = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const optimizeImage = useCallback(async (
    file: File,
    options: ImageOptimizationOptions = {}
  ): Promise<Blob> => {
    const {
      quality = 0.8,
      maxWidth = 1200,
      maxHeight = 1200,
      format = 'webp'
    } = options;

    setIsProcessing(true);

    try {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        img.onload = () => {
          // Calculate new dimensions
          let { width, height } = img;
          
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width *= ratio;
            height *= ratio;
          }

          canvas.width = width;
          canvas.height = height;

          // Draw and compress
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to optimize image'));
              }
              setIsProcessing(false);
            },
            `image/${format}`,
            quality
          );
        };

        img.onerror = () => {
          reject(new Error('Failed to load image'));
          setIsProcessing(false);
        };

        img.src = URL.createObjectURL(file);
      });
    } catch (error) {
      setIsProcessing(false);
      throw error;
    }
  }, []);

  const generateResponsiveImages = useCallback(async (
    file: File,
    sizes: number[] = [400, 800, 1200]
  ): Promise<{ size: number; blob: Blob }[]> => {
    setIsProcessing(true);

    try {
      const results = await Promise.all(
        sizes.map(async (size) => {
          const blob = await optimizeImage(file, {
            maxWidth: size,
            maxHeight: size,
            format: 'webp',
            quality: 0.85
          });
          return { size, blob };
        })
      );

      setIsProcessing(false);
      return results;
    } catch (error) {
      setIsProcessing(false);
      throw error;
    }
  }, [optimizeImage]);

  const convertToWebP = useCallback(async (file: File): Promise<Blob> => {
    return optimizeImage(file, { format: 'webp', quality: 0.85 });
  }, [optimizeImage]);

  return {
    optimizeImage,
    generateResponsiveImages,
    convertToWebP,
    isProcessing
  };
};