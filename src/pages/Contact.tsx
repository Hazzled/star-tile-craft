import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import ServiceAreaMap from "@/components/ServiceAreaMap";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen">
      {/* Unified Hero + Contact Form Section */}
      <section className="relative py-20 min-h-screen overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }} />
        
        {/* Animated Background Gradient */}
        <motion.div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-navy to-noir" animate={{
        background: ["linear-gradient(135deg, #1f2937 0%, #153147 30%, #232A2F 100%)", "linear-gradient(135deg, #153147 0%, #232A2F 30%, #1f2937 100%)", "linear-gradient(135deg, #232A2F 0%, #1f2937 30%, #153147 100%)", "linear-gradient(135deg, #1f2937 0%, #153147 30%, #232A2F 100%)"]
      }} transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-white/10 rounded-full" style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        }} animate={{
          y: [-30, -60, -30],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1]
        }} transition={{
          duration: 6 + Math.random() * 6,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }} />)}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Title */}
          <motion.div className="text-center mb-16" initial={{
          opacity: 0,
          y: -50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl text-gray-200">
              Ready to start your tile project? Contact Portland's most trusted tile installation company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <Card className="bg-white shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                    Request Your Free Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to discuss your project.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-gray-700">Full Name *</Label>
                        <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="mt-1" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-gray-700">Email Address *</Label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-700">Project Details</Label>
                      <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your tile project - type of installation, space size, timeline, etc." className="mt-1" />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-navy hover:bg-navy/80 text-white font-semibold border-2 border-navy hover:border-navy/80 transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95">
                      Get My Free Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8" initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }}>
              <Card className="bg-white shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-navy mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <a href="tel:5034828395" className="text-lg text-gray-700 hover:text-navy transition-colors">
                        (503) 482-8395
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-navy mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <a href="mailto:Contact@Startilellc.com" className="text-lg text-gray-700 hover:text-navy transition-colors">
                        Contact@Startilellc.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-navy mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Service Area
                      </h3>
                      <p className="text-lg text-gray-700">
                        Portland Metro Area<br />
                        Oregon, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-navy mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Business Hours
                      </h3>
                      <div className="text-gray-700">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-navy text-white shadow-2xl border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-4">
                    Licensed & Insured
                  </h3>
                  <p className="mb-2">CCB #200970</p>
                  <p className="text-gray-200">
                    Fully licensed and insured for your protection and peace of mind.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-gray-800 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve homeowners and businesses throughout the greater Portland Metro area.
            </p>
          </div>
          
          <ServiceAreaMap />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Don't Wait - Transform Your Space Today!
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join hundreds of satisfied customers who have trusted Star Tile LLC for their tile installation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5034828395">
              <Button size="lg" variant="outline" className="bg-white text-navy hover:bg-gray-100 border-white">
                Call Now: (503) 482-8395
              </Button>
            </a>
            <Button size="lg" variant="outline" className="border-white hover:bg-white text-slate-700">
              Email Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;