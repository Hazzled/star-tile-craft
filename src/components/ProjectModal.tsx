
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowUpRight, X, ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedImage from "@/components/OptimizedImage";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    alt?: string;
    images?: Array<{src: string; alt: string}> | string[];
    description?: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!emblaApi || !isOpen || isHovered) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000); // Auto-scroll every 6 seconds (slower)

    return () => clearInterval(autoplay);
  }, [emblaApi, isOpen, isHovered]);

  if (!project) return null;

  // Handle both new and old image formats
  const projectImages = project.images 
    ? Array.isArray(project.images) && typeof project.images[0] === 'object'
      ? (project.images as Array<{src: string; alt: string}>)
      : (project.images as string[]).map((src, index) => ({ 
          src, 
          alt: `${project.title} - Image ${index + 1}` 
        }))
    : [{ src: project.image, alt: project.alt || project.title }];

  const handlePrevious = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const handleRequestProject = () => {
    onClose();
    navigate('/contact');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] w-[95vw] p-0 overflow-hidden bg-transparent border-none">
        <div className="relative h-full flex flex-col bg-black/20 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Project Title - Minimal */}
          <div className="absolute top-6 left-6 z-50">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-xs font-bold text-white/80 uppercase tracking-wider">
                {project.category}
              </span>
              <h2 className="text-xl font-montserrat font-bold text-white">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Full-screen Image Carousel */}
          <div className="flex-1 relative">
            {/* Previous Button */}
            {projectImages.length > 1 && (
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <ArrowLeft className="w-8 h-8" />
              </button>
            )}

            {/* Next Button */}
            {projectImages.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <ArrowRight className="w-8 h-8" />
              </button>
            )}

            <div 
              className="w-full h-full" 
              ref={emblaRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex h-full">
                {projectImages.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
                    <div className="relative h-full w-full flex items-center justify-center">
                      <OptimizedImage
                        src={typeof image === 'string' ? image : image.src}
                        alt={typeof image === 'string' ? `${project.title} - Image ${index + 1}` : image.alt}
                        className="max-w-full max-h-full object-contain w-auto h-auto"
                        priority={index === 0}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA - Minimal */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <Button 
              size="lg" 
              onClick={handleRequestProject}
              className="bg-white text-navy hover:bg-gray-100 font-bold px-8 py-3 shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Request Similar Project
              <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Image Counter */}
          {projectImages.length > 1 && (
            <div className="absolute bottom-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-white text-sm font-medium">
                  1 / {projectImages.length}
                </span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
