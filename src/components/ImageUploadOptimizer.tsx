import React, { useState, useCallback } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useImageOptimization } from "@/hooks/useImageOptimization";
import { Upload, Download, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

interface ImageUploadOptimizerProps {
  onOptimizedImage?: (blob: Blob, originalSize: number, optimizedSize: number) => void;
  maxFileSize?: number;
  acceptedFormats?: string[];
}

const ImageUploadOptimizer = ({
  onOptimizedImage,
  maxFileSize = 10 * 1024 * 1024, // 10MB
  acceptedFormats = ['image/jpeg', 'image/png', 'image/webp']
}: ImageUploadOptimizerProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [optimizedBlob, setOptimizedBlob] = useState<Blob | null>(null);
  const [compressionStats, setCompressionStats] = useState<{
    originalSize: number;
    optimizedSize: number;
    savings: number;
  } | null>(null);

  const { optimizeImage, isProcessing } = useImageOptimization();

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    
    if (!file) return;

    // Validate file size
    if (file.size > maxFileSize) {
      toast.error(`File too large. Maximum size is ${Math.round(maxFileSize / 1024 / 1024)}MB`);
      return;
    }

    // Validate file type
    if (!acceptedFormats.includes(file.type)) {
      toast.error('Invalid file format. Please use JPEG, PNG, or WebP images.');
      return;
    }

    setSelectedFile(file);
    setOptimizedBlob(null);
    setCompressionStats(null);
  }, [maxFileSize, acceptedFormats]);

  const handleOptimize = useCallback(async () => {
    if (!selectedFile) return;

    try {
      const optimized = await optimizeImage(selectedFile, {
        quality: 0.85,
        maxWidth: 1200,
        maxHeight: 1200,
        format: 'webp'
      });

      const originalSize = selectedFile.size;
      const optimizedSize = optimized.size;
      const savings = Math.round((1 - optimizedSize / originalSize) * 100);

      setOptimizedBlob(optimized);
      setCompressionStats({
        originalSize,
        optimizedSize,
        savings
      });

      onOptimizedImage?.(optimized, originalSize, optimizedSize);

      toast.success(`Image optimized! ${savings}% size reduction`);
    } catch (error) {
      console.error('Optimization failed:', error);
      toast.error('Failed to optimize image');
    }
  }, [selectedFile, optimizeImage, onOptimizedImage]);

  const handleDownload = useCallback(() => {
    if (!optimizedBlob || !selectedFile) return;

    const url = URL.createObjectURL(optimizedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `optimized-${selectedFile.name.replace(/\.[^.]+$/, '.webp')}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [optimizedBlob, selectedFile]);

  const formatFileSize = (bytes: number): string => {
    const kb = bytes / 1024;
    const mb = kb / 1024;
    
    if (mb >= 1) {
      return `${mb.toFixed(2)} MB`;
    }
    return `${kb.toFixed(2)} KB`;
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Image Optimizer
          </h3>
          <p className="text-sm text-muted-foreground">
            Upload an image to compress it to WebP format with significant size reduction
          </p>
        </div>

        {/* File Upload */}
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
          <input
            type="file"
            accept={acceptedFormats.join(',')}
            onChange={handleFileSelect}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center space-y-4"
          >
            <Upload className="w-12 h-12 text-muted-foreground" />
            <div>
              <p className="text-sm font-medium text-foreground">
                Click to upload an image
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                JPEG, PNG, or WebP up to {Math.round(maxFileSize / 1024 / 1024)}MB
              </p>
            </div>
          </label>
        </div>

        {/* Selected File Info */}
        {selectedFile && (
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{selectedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(selectedFile.size)} • {selectedFile.type}
                </p>
              </div>
              <Button
                onClick={handleOptimize}
                disabled={isProcessing}
                className="min-w-[120px]"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  'Optimize Image'
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Optimization Results */}
        {compressionStats && optimizedBlob && (
          <div className="bg-success/10 border border-success/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <h4 className="font-medium text-success">Optimization Complete!</h4>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Original</p>
                <p className="font-medium">{formatFileSize(compressionStats.originalSize)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Optimized</p>
                <p className="font-medium">{formatFileSize(compressionStats.optimizedSize)}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Savings</p>
                <p className="font-medium text-success">{compressionStats.savings}%</p>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              variant="outline"
              className="w-full mt-4"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Optimized Image
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ImageUploadOptimizer;