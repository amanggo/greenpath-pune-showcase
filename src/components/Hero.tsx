import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Sustainable Strength for a{" "}
            <span className="text-brand-sand">Greener Tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Premium eco-friendly paver blocks for sustainable landscapes and construction in Pune, Maharashtra
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-sand mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">100% Eco-Friendly</h3>
                <p className="text-white/80 text-sm">Made from 60-80% recycled materials</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-sand mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Superior Drainage</h3>
                <p className="text-white/80 text-sm">Reduces flooding and water runoff by 60%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-brand-sand mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">15+ Years Experience</h3>
                <p className="text-white/80 text-sm">Trusted by hundreds of Pune families</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4 h-auto"
            >
              Get Free Site Estimate
              <ArrowRight className="w-5 h-5" />
            </Button>
            
            <Button 
              variant="green-outline"
              size="lg"
              onClick={() => scrollToSection('products')}
              className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-brand-green"
            >
              View Products
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;