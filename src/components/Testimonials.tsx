import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      location: "Pune, Maharashtra",
      role: "Homeowner",
      rating: 5,
      text: "The hexagonal eco pavers transformed our backyard into a sustainable oasis. They're beautiful, durable, and we love knowing we made an environmentally responsible choice. The team was professional throughout the project.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Patel", 
      location: "Bangalore, Karnataka",
      role: "Landscape Architect", 
      rating: 5,
      text: "As a landscape architect, I specify Green Path Pavers for all my sustainable projects in South India. Their quality and environmental credentials are unmatched in the industry. Excellent customer service too!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Arjun Desai",
      location: "Mumbai, Maharashtra", 
      role: "City Planner",
      rating: 5,
      text: "Our municipality chose Green Path for the downtown revitalization project. The permeable pavers have significantly reduced flooding issues while creating beautiful public spaces. Highly recommend for any urban project.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Sneha Kulkarni",
      location: "Pune, Maharashtra",
      role: "Property Developer",
      rating: 5, 
      text: "We've used Green Path Pavers in over 15 residential projects across Pune. Their eco-friendly approach aligns perfectly with our sustainable development goals. Quality is consistently excellent and pricing is competitive.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Vikram Singh",
      location: "Nashik, Maharashtra",
      role: "Resort Owner", 
      rating: 5,
      text: "Our eco-resort needed sustainable pathways that wouldn't harm the environment. Green Path's bamboo composite pavers were perfect! Guests constantly compliment the natural look and feel. Great investment for our business.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Dr. Meera Joshi",
      location: "Nagpur, Maharashtra", 
      role: "Environmental Consultant",
      rating: 5,
      text: "From an environmental perspective, Green Path Pavers is doing exceptional work. Their manufacturing process, material sourcing, and end product all demonstrate genuine commitment to sustainability. Truly impressed!",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by hundreds of satisfied customers across Maharashtra and beyond
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-brand-green opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-sand"
                  />
                  <div>
                    <h4 className="font-semibold text-brand-green">{testimonial.name}</h4>
                    <p className="text-sm text-brand-earth-dark">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-brand-green">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">500+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">1000+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-brand-green">15+</div>
              <div className="text-muted-foreground">Cities Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;