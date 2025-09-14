
import { useState, useMemo, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { MapPin, Mail, Phone, Clock, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import SEO from "@/components/SEO";
import { generateBreadcrumbJsonLd, homeBreadcrumb } from "@/lib/breadcrumbs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create a ref for the contact form section
  const contactFormRef = useRef<HTMLDivElement>(null);

  // Memoize the animated background and floating particles to prevent re-creation on form changes
  const animatedBackground = useMemo(() => (
    <motion.div
      className="absolute inset-0 bg-gradient-to-br from-gray-900 via-navy to-noir"
      animate={{
        background: [
          "linear-gradient(135deg, #1f2937 0%, #153147 30%, #232A2F 100%)",
          "linear-gradient(135deg, #153147 0%, #232A2F 30%, #1f2937 100%)",
          "linear-gradient(135deg, #232A2F 0%, #1f2937 30%, #153147 100%)",
          "linear-gradient(135deg, #1f2937 0%, #153147 30%, #232A2F 100%)"
        ]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ), []);

  const floatingParticles = useMemo(() => (
    <div className="absolute inset-0">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [-30, -60, -30],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  ), []);

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting contact form:", formData);
      
      // Call the edge function to handle both database storage and email sending
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        console.error("Error submitting contact form:", error);
        toast.error("Failed to submit your message. Please try again or call us directly.");
        return;
      }

      console.log("Contact form submitted successfully:", data);
      toast.success("Thank you! We'll get back to you within 24 hours.");
      
      // Show animated success confirmation
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const breadcrumbs = generateBreadcrumbJsonLd([
    homeBreadcrumb,
    { name: "Contact", url: "https://www.startilellc.com/contact" }
  ]);

  return (
    <div className="min-h-screen">
      <SEO 
        title="Get Free Tile Installation Quote Portland Metro | Licensed Contractors (503) 482-8395"
        description="Request a free in-home tile consultation across Portland Metro. Licensed contractors respond within 24 hours. Call (503) 482-8395."
        canonical="https://www.startilellc.com/contact"
        structuredData={breadcrumbs}
      />
      {/* Unified Hero + Contact Form Section */}
      <section ref={contactFormRef} className="relative py-20 min-h-screen overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        {/* Animated Background Gradient */}
        {animatedBackground}
        
        {/* Floating particles effect */}
        {floatingParticles}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-white">
              Get Your Free Quote Today
            </h1>
            <p className="text-xl text-gray-200">
              Ready to start your tile project? Contact Portland's most trusted tile installation company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                    Request Your Free Consultation
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll contact you within 24 hours to discuss your project.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="relative">
                        <Label htmlFor="name" className="text-gray-700 text-sm font-medium">Full Name *</Label>
                        <div className="relative mt-1">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 py-2.5 rounded-lg border-gray-200 focus:border-navy focus:ring-navy/20"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <Label htmlFor="phone" className="text-gray-700 text-sm font-medium">Phone Number *</Label>
                        <div className="relative mt-1">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 py-2.5 rounded-lg border-gray-200 focus:border-navy focus:ring-navy/20"
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Label htmlFor="email" className="text-gray-700 text-sm font-medium">Email Address *</Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 py-2.5 rounded-lg border-gray-200 focus:border-navy focus:ring-navy/20"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <Label htmlFor="message" className="text-gray-700 text-sm font-medium">Project Details</Label>
                      <div className="relative mt-1">
                        <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-gray-400" />
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your tile project - type of installation, space size, timeline, etc."
                          className="pl-10 pt-4 rounded-lg border-gray-200 focus:border-navy focus:ring-navy/20 resize-none"
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-4 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="h-5 w-5" />
                          Get My Free Quote
                        </>
                      )}
                    </Button>
                  </form>

                  {/* Animated Success Confirmation */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center rounded-2xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="text-center"
                      >
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
                        <p className="text-gray-600">We'll contact you within 24 hours.</p>
                      </motion.div>
                    </motion.div>
                  )}
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
              <Card className="bg-white shadow-2xl border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-gray-800">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-0">
                  <div className="flex items-center py-4">
                    <Phone className="h-5 w-5 text-navy mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Phone
                      </h3>
                      <a href="tel:5034828395" className="text-gray-700 hover:text-navy transition-colors">
                        (503) 482-8395
                      </a>
                    </div>
                  </div>
                  
                  <Separator className="my-0" />
                  
                  <div className="flex items-center py-4">
                    <Mail className="h-5 w-5 text-navy mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Email
                      </h3>
                      <a href="mailto:Contact@Startilellc.com" className="text-gray-700 hover:text-navy transition-colors">
                        Contact@Startilellc.com
                      </a>
                    </div>
                  </div>
                  
                  <Separator className="my-0" />
                  
                  <div className="flex items-center py-4">
                    <MapPin className="h-5 w-5 text-navy mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Service Area
                      </h3>
                      <p className="text-gray-700">
                        Portland Metro Area<br />
                        Oregon, USA
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="my-0" />
                  
                  <div className="flex items-center py-4">
                    <Clock className="h-5 w-5 text-navy mr-4 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-montserrat font-semibold text-gray-800 mb-1">
                        Business Hours
                      </h3>
                      <div className="text-gray-700 text-sm space-y-1">
                        <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                        <p>Saturday: 8:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-navy text-white shadow-2xl border-0 rounded-2xl">
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
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white hover:bg-white text-slate-900"
              onClick={scrollToContactForm}
            >
              Email Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
