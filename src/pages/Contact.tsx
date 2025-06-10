import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { toast } from "sonner";
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
      }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Get Your Free Quote Today
          </h1>
          <p className="text-xl text-gray-200">
            Ready to start your tile project? Contact Portland's most trusted tile installation company.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-star-tile-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-montserrat font-bold text-star-tile-charcoal">
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
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} placeholder="Tell us about your tile project - type of installation, space size, timeline, etc." className="mt-1" />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-star-tile-slate-blue hover:bg-star-tile-slate-blue/90 text-white">
                    Get My Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-montserrat font-bold text-star-tile-charcoal">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-1">
                        Phone
                      </h3>
                      <a href="tel:5034828395" className="text-lg text-gray-700 hover:text-star-tile-slate-blue transition-colors">
                        (503) 482-8395
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-1">
                        Email
                      </h3>
                      <a href="mailto:Contact@Startilellc.com" className="text-lg text-gray-700 hover:text-star-tile-slate-blue transition-colors">
                        Contact@Startilellc.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-1 text-slate-950 rounded-none">
                        Service Area
                      </h3>
                      <p className="text-lg text-gray-700">
                        Portland Metro Area<br />
                        Oregon, USA
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-star-tile-slate-blue mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-montserrat font-semibold text-star-tile-charcoal mb-1">
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

              <Card className="bg-star-tile-slate-blue text-white">
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
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-star-tile-charcoal mb-4">
              Serving the Portland Metro Area
            </h2>
            <p className="text-lg text-gray-600">
              We proudly serve homeowners and businesses throughout the greater Portland area.
            </p>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-star-tile-slate-blue mx-auto mb-4" />
              <h3 className="text-xl font-montserrat font-semibold text-star-tile-charcoal mb-2">
                Service Area Map
              </h3>
              <p className="text-gray-600">
                Portland Metro Area • Gresham • Beaverton • Lake Oswego • Tigard • Milwaukie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-star-tile-slate-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Don't Wait - Transform Your Space Today!
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Join hundreds of satisfied customers who have trusted Star Tile LLC for their tile installation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:5034828395">
              <Button size="lg" variant="outline" className="bg-white text-star-tile-slate-blue hover:bg-gray-100 border-white">
                Call Now: (503) 482-8395
              </Button>
            </a>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-star-tile-slate-blue">
              Email Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;