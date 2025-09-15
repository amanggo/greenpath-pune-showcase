import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, TreePine, Hammer, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Patio & Driveway Installation",
      description: "Professional installation of permeable pavers for patios, driveways, and walkways. Our expert team ensures proper drainage and long-lasting results.",
      features: ["Permeable paver technology", "Professional installation", "5-year warranty", "Free maintenance guide"]
    },
    {
      icon: TreePine,
      title: "Garden Pathway Design",
      description: "Create beautiful, eco-friendly pathways that complement your garden's natural beauty while providing excellent functionality.",
      features: ["Custom design consultation", "Native plant integration", "Sustainable materials", "Water-efficient solutions"]
    },
    {
      icon: Hammer,
      title: "Retaining Wall Construction",
      description: "Durable retaining walls using eco-friendly materials that provide structural integrity while enhancing your landscape.",
      features: ["Structural engineering", "Eco-friendly materials", "Drainage solutions", "10-year structural warranty"]
    },
    {
      icon: Users,
      title: "Sustainable Landscaping Consultation",
      description: "Expert consultation to design and implement sustainable landscaping solutions tailored to Maharashtra's climate.",
      features: ["Site assessment", "Climate-specific solutions", "Water conservation planning", "Ongoing support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional eco-friendly landscaping services designed for Indian homes and commercial spaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-earth rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-brand-green" />
                </div>
                <CardTitle className="text-xl text-brand-green mb-2">{service.title}</CardTitle>
                <CardDescription className="text-center leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-brand-green rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-sand rounded-full text-brand-green font-medium">
            <span>Starting from ₹299/sq ft</span>
            <span className="text-muted-foreground">•</span>
            <span>Free consultation included</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;