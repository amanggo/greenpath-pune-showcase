import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import hexagonalPavers from "@/assets/hexagonal-pavers.jpg";
import grassGridPavers from "@/assets/grass-grid-pavers.jpg";
import permeablePavers from "@/assets/permeable-pavers.jpg";

const Products = () => {
  const products = [
    {
      name: "Hexagonal Eco Pavers",
      price: "₹399",
      unit: "per sq ft",
      badge: "Bestseller",
      badgeVariant: "default" as const,
      image: hexagonalPavers,
      features: [
        "Made from 100% recycled materials",
        "Permeable design reduces runoff", 
        "Available in 6 natural colors",
        "Interlocking design for easy installation"
      ]
    },
    {
      name: "Grass Grid Pavers",
      price: "₹449", 
      unit: "per sq ft",
      badge: "New",
      badgeVariant: "secondary" as const,
      image: grassGridPavers,
      features: [
        "Combines greenery with durability",
        "Ideal for parking areas and driveways",
        "Made from recycled rubber",
        "Reduces stormwater runoff by 60%"
      ]
    },
    {
      name: "Permeable Interlocking Pavers",
      price: "₹329",
      unit: "per sq ft", 
      badge: "Budget Pick",
      badgeVariant: "outline" as const,
      image: permeablePavers,
      features: [
        "80% recycled concrete content",
        "Excellent water drainage",
        "Variety of patterns available",
        "LEED certification contributing material"
      ]
    },
    {
      name: "Recycled Plastic Pavers",
      price: "₹499",
      unit: "per sq ft",
      badge: "Premium", 
      badgeVariant: "destructive" as const,
      features: [
        "Made from ocean-recovered plastics",
        "Ultra-lightweight yet durable",
        "100% waterproof and mold-resistant",
        "Available in wood-like textures"
      ]
    },
    {
      name: "Solar Reflective Pavers",
      price: "₹549",
      unit: "per sq ft",
      badge: "Innovation",
      badgeVariant: "secondary" as const,
      features: [
        "Reduces urban heat island effect",
        "Special reflective surface coating", 
        "Made with 70% recycled glass",
        "Up to 20°C cooler surface temperature"
      ]
    },
    {
      name: "Bamboo Composite Pavers", 
      price: "₹629",
      unit: "per sq ft",
      badge: "Luxury",
      badgeVariant: "default" as const,
      features: [
        "Fast-growing bamboo composite",
        "Natural wood-like appearance",
        "Carbon-negative production",
        "Termite and moisture resistant"
      ]
    }
  ];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-gradient-earth">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            Our Premium Eco-Friendly Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sustainable paving solutions with competitive pricing in Indian Rupees
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group bg-white">
              <CardHeader className="pb-4">
                {product.image && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <Badge variant={product.badgeVariant} className="mb-2">
                    {product.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-brand-green group-hover:text-brand-green-dark transition-colors">
                  {product.name}
                </CardTitle>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-bold text-brand-green">{product.price}</span>
                  <span className="text-muted-foreground">{product.unit}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="green-solid" 
                  className="w-full"
                  onClick={scrollToContact}
                >
                  Order Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Product Benefits */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-brand-green mb-8">Why Choose Our Eco-Friendly Pavers?</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-2xl mb-4">🌍</div>
              <h4 className="font-semibold text-brand-green mb-2">Environmentally Safe</h4>
              <p className="text-muted-foreground text-sm">Made from recycled materials with minimal environmental impact</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-2xl mb-4">💧</div>
              <h4 className="font-semibold text-brand-green mb-2">Superior Drainage</h4>
              <p className="text-muted-foreground text-sm">Permeable design prevents flooding and water stagnation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-2xl mb-4">💪</div>
              <h4 className="font-semibold text-brand-green mb-2">Long Lasting</h4>
              <p className="text-muted-foreground text-sm">Durable construction with 15+ year lifespan guaranteed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-2xl mb-4">🏠</div>
              <h4 className="font-semibold text-brand-green mb-2">Easy Installation</h4>
              <p className="text-muted-foreground text-sm">Quick professional installation with minimal site disruption</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;