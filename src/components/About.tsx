import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Award, Factory } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Leaf, value: "60-80%", label: "Recycled Materials" },
    { icon: Recycle, value: "98%", label: "Water Recycled" },
    { icon: Award, value: "5+", label: "Green Certifications" },
    { icon: Factory, value: "100%", label: "Solar Powered Factory" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
              About Green Path Pavers
            </h2>
            <p className="text-lg text-muted-foreground">
              Leading the way in sustainable construction materials across Maharashtra
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-green mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Green Path Pavers, we believe in building a sustainable future—one paver at a time. 
                  Our mission is to revolutionize the construction industry in India by providing 
                  eco-friendly paving solutions that don't compromise on quality or durability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-brand-green mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We envision a world where every construction project considers its environmental impact. 
                  We're proud to lead the way in Maharashtra with innovative, sustainable paving products 
                  that help create greener, more livable cities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sustainability Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-4 bg-white rounded-full w-fit shadow-soft">
                  <stat.icon className="w-8 h-8 text-brand-green" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-brand-green">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Sustainable Manufacturing */}
          <Card className="border-0 shadow-soft bg-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-brand-green mb-6">Sustainable Manufacturing</h3>
              <div className="max-w-3xl mx-auto">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our manufacturing process is designed with sustainability at its core. Located in Pune's 
                  industrial area, our facility uses solar energy to power operations, recycles 98% of 
                  process water, and sources materials from local suppliers to reduce transportation emissions.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold text-brand-green mb-2">Solar Powered</h4>
                    <p className="text-sm text-muted-foreground">100% renewable energy for all manufacturing processes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green mb-2">Water Conservation</h4>
                    <p className="text-sm text-muted-foreground">Advanced recycling systems minimize water waste</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-green mb-2">Local Sourcing</h4>
                    <p className="text-sm text-muted-foreground">Supporting Maharashtra's circular economy</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;