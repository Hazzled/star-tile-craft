
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    id: number;
    title: string;
    category: string;
    image: string;
    images?: string[];
    description?: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!project) return null;

  const projectImages = project.images || [project.image];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="relative">
          {/* Image Carousel */}
          <div className="relative h-96 bg-gray-100">
            <Carousel className="w-full h-full">
              <CarouselContent>
                {projectImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-96 w-full">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {projectImages.length > 1 && (
                <>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </>
              )}
            </Carousel>
          </div>

          {/* Project Details */}
          <div className="p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-navy bg-navy/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-3xl font-montserrat font-bold text-noir leading-tight">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <p className="text-lg text-mist leading-relaxed">
                {project.description || `This ${project.category.toLowerCase()} project showcases our commitment to quality craftsmanship and attention to detail. Our expert installation team worked closely with the homeowner to bring their vision to life, using premium materials and proven techniques to ensure lasting beauty and durability.`}
              </p>

              <div className="bg-almond/30 rounded-lg p-6">
                <h3 className="font-montserrat font-bold text-noir mb-3">Project Features</h3>
                <ul className="space-y-2 text-mist">
                  <li>• Premium tile selection and custom layout design</li>
                  <li>• Professional waterproofing and substrate preparation</li>
                  <li>• Precision installation with expert finishing</li>
                  <li>• Quality assurance and final inspection</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-navy hover:bg-navy/90 text-white font-bold px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <a href="/contact" className="flex items-center gap-2">
                    Request Similar Project
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-3 transition-all duration-300"
                >
                  <a href="/portfolio">View More Projects</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
