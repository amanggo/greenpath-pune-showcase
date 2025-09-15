import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    projectType: "",
    area: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: "Thank You!",
      description: "We've received your request. Our team will contact you within 24 hours for your free site estimate.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "", 
      phone: "",
      projectType: "",
      area: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            Get Your Free Site Estimate
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your eco-friendly paving project? Contact us today for a consultation and free estimate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-soft bg-white h-fit">
              <CardHeader>
                <CardTitle className="text-brand-green">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-green">Address</h4>
                    <p className="text-muted-foreground text-sm">
                      Green Path Pavers Pvt Ltd<br />
                      Plot No. 45, Bhosari Industrial Area<br />
                      Pune, Maharashtra 411026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-green">Phone</h4>
                    <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    <p className="text-muted-foreground text-sm">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-green">Email</h4>
                    <p className="text-muted-foreground text-sm">info@greenpathpavers.in</p>
                    <p className="text-muted-foreground text-sm">sales@greenpathpavers.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-brand-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-green">Business Hours</h4>
                    <p className="text-muted-foreground text-sm">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-sand">
                  <h4 className="font-semibold text-brand-green mb-2">Service Areas</h4>
                  <p className="text-muted-foreground text-sm">
                    Pune • Mumbai • Nashik • Nagpur • Aurangabad • Kolhapur • Solapur
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-soft bg-white">
              <CardHeader>
                <CardTitle className="text-brand-green">Request Free Estimate</CardTitle>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select project type</option>
                        <option value="patio">Patio Installation</option>
                        <option value="driveway">Driveway Paving</option>
                        <option value="pathway">Garden Pathways</option>
                        <option value="retaining">Retaining Walls</option>
                        <option value="commercial">Commercial Project</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="area">Approximate Area (sq ft)</Label>
                    <Input
                      id="area"
                      name="area"
                      type="text"
                      value={formData.area}
                      onChange={handleInputChange}
                      placeholder="e.g., 500 sq ft"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="green-solid" 
                    size="lg" 
                    className="w-full"
                  >
                    Submit Request for Free Estimate
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Green Path Pavers regarding your project inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;