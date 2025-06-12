
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [{
    name: "Sarah Johnson",
    initials: "SJ",
    text: "Star Tile completely transformed our kitchen! The craftsmanship is impeccable and they finished on time.",
    rating: 5
  }, {
    name: "Mike Davis",
    initials: "MD",
    text: "Professional, reliable, and their attention to detail is amazing. Highly recommend for any tile work!",
    rating: 5
  }, {
    name: "Jennifer Liu",
    initials: "JL",
    text: "Our bathroom remodel exceeded expectations. The team was courteous and the quality is outstanding.",
    rating: 5
  }];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-noir mb-6">
            What Our Clients Say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy to-navy/80 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-montserrat font-semibold text-noir text-lg">
                      {testimonial.name}
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
