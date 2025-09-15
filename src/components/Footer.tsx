import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-green text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-white/20 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Green Path Pavers</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Leading manufacturer of eco-friendly paver blocks in Maharashtra. 
              Building a sustainable future, one paver at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/80">Hexagonal Eco Pavers</li>
              <li className="text-white/80">Grass Grid Pavers</li>
              <li className="text-white/80">Permeable Interlocking Pavers</li>
              <li className="text-white/80">Recycled Plastic Pavers</li>
              <li className="text-white/80">Solar Reflective Pavers</li>
              <li className="text-white/80">Bamboo Composite Pavers</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/60 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  Plot No. 45, Bhosari Industrial Area<br />
                  Pune, Maharashtra 411026
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/60 flex-shrink-0" />
                <div className="text-sm text-white/80">+91 98765 43210</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/60 flex-shrink-0" />
                <div className="text-sm text-white/80">info@greenpathpavers.in</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h4 className="font-medium text-sm mb-2">Service Areas</h4>
              <p className="text-xs text-white/70">
                Pune, Mumbai, Nashik, Nagpur, Aurangabad & across Maharashtra
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold text-lg mb-4">Certifications & Memberships</h4>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
              <span>ISO 9001:2015 Certified</span>
              <span>•</span>
              <span>BIS Approved</span>
              <span>•</span>
              <span>IGBC Member</span>
              <span>•</span>
              <span>Green Building Council</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div>
              © {currentYear} Green Path Pavers Pvt Ltd. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability Report</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;