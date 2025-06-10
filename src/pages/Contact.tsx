
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock, User, MessageSquare, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import ServiceAreaMap from "@/components/ServiceAreaMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    setIsSubmitted(true);
    toast.success("Thank you! We'll get back to you within 24 hours.");
    
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section with Background Image */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/70" />
        
        <div className="relative z-10 max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-4 text-white leading-tight">
              Request Your Free Consultation
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Transform your space with Portland's most trusted tile installation experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-8 -mt-4">
        <div className="max-w-lg mx-auto space-y-6">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-6">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Full Name *
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mist" />
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="pl-10 h-12 rounded-xl border-almond focus:border-navy focus:ring-navy/20"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Phone Number *
                        </Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mist" />
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10 h-12 rounded-xl border-almond focus:border-navy focus:ring-navy/20"
                            placeholder="(503) 123-4567"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Email Address *
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-mist" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="pl-10 h-12 rounded-xl border-almond focus:border-navy focus:ring-navy/20"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                          Project Details
                        </Label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-4 h-4 w-4 text-mist" />
                          <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="pl-10 pt-4 rounded-xl border-almond focus:border-navy focus:ring-navy/20 resize-none"
                            placeholder="Tell us about your tile project - type of installation, space size, timeline, etc."
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full h-14 bg-navy hover:bg-navy/90 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <Send className="h-5 w-5" />
                        <span>Get My Free Quote</span>
                      </Button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                      >
                        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-montserrat font-bold text-gray-800 mb-2">
                        Thank You!
                      </h3>
                      <p className="text-gray-600">
                        We'll contact you within 24 hours to discuss your project.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-white shadow-xl border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-montserrat font-bold text-center text-gray-800">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-0">
                {/* Phone */}
                <div className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/10 mr-4">
                    <Phone className="h-5 w-5 text-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 text-sm">
                      Phone
                    </h3>
                    <a
                      href="tel:5034828395"
                      className="text-lg font-bold text-navy hover:text-navy/80 transition-colors"
                    >
                      (503) 482-8395
                    </a>
                  </div>
                </div>

                <div className="h-px bg-almond mx-4" />

                {/* Email */}
                <div className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/10 mr-4">
                    <Mail className="h-5 w-5 text-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 text-sm">
                      Email
                    </h3>
                    <a
                      href="mailto:Contact@Startilellc.com"
                      className="text-lg font-bold text-navy hover:text-navy/80 transition-colors break-all"
                    >
                      Contact@Startilellc.com
                    </a>
                  </div>
                </div>

                <div className="h-px bg-almond mx-4" />

                {/* Service Area */}
                <div className="flex items-center p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/10 mr-4">
                    <MapPin className="h-5 w-5 text-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 text-sm">
                      Service Area
                    </h3>
                    <p className="text-gray-700 font-medium">
                      Portland Metro Area
                    </p>
                  </div>
                </div>

                <div className="h-px bg-almond mx-4" />

                {/* Business Hours */}
                <div className="flex items-start p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-navy/10 mr-4 mt-1">
                    <Clock className="h-5 w-5 text-navy" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-montserrat font-semibold text-gray-800 text-sm mb-1">
                      Business Hours
                    </h3>
                    <div className="text-sm text-gray-600 space-y-0.5">
                      <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                      <p>Saturday: 8:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* License Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-navy text-white shadow-xl border-0 rounded-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-montserrat font-bold mb-2">
                  Licensed & Insured
                </h3>
                <p className="text-white/90 font-semibold mb-1">CCB #200970</p>
                <p className="text-white/70 text-sm">
                  Fully licensed and insured for your protection and peace of mind.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-gray-800 mb-3">
              Our Service Areas
            </h2>
            <p className="text-gray-600">
              We proudly serve homeowners throughout the greater Portland Metro area.
            </p>
          </div>
          
          <ServiceAreaMap />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-navy text-white">
        <div className="max-w-lg mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
            Transform Your Space Today!
          </h2>
          <p className="text-lg mb-6 text-gray-200">
            Join hundreds of satisfied customers who trust Star Tile LLC.
          </p>
          <div className="space-y-3">
            <a href="tel:5034828395" className="block">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-12 bg-white text-navy hover:bg-gray-100 border-white font-bold rounded-xl"
              >
                Call Now: (503) 482-8395
              </Button>
            </a>
            <a href="mailto:Contact@Startilellc.com" className="block">
              <Button
                size="lg"
                variant="outline"
                className="w-full h-12 border-white hover:bg-white hover:text-navy text-white font-bold rounded-xl"
              >
                Email Us Today
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
