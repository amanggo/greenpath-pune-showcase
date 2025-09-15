import { Card, CardContent } from "@/components/ui/card";
import teamKasturi from "@/assets/team-kasturi.jpg";
import teamSmith from "@/assets/team-smith.jpg";
import teamJaydeep from "@/assets/team-jaydeep.jpg";
import teamSuraj from "@/assets/team-suraj.jpg";
import teamAmrut from "@/assets/team-amrut.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Kasturi Parab",
      position: "CEO & Founder",
      description: "Sustainability advocate with 15 years in green construction. Leading Green Path Pavers' mission to revolutionize eco-friendly building materials across Maharashtra.",
      image: teamKasturi
    },
    {
      name: "Smith Sawant",
      position: "Head of Production",
      description: "Materials engineer specializing in recycled composites. Ensures our manufacturing processes meet the highest environmental and quality standards.",
      image: teamSmith
    },
    {
      name: "Jaydeep Ghadge", 
      position: "Design Director",
      description: "Landscape architect focused on sustainable urban design. Creates innovative paver solutions that blend functionality with environmental responsibility.",
      image: teamJaydeep
    },
    {
      name: "Suraj Karn",
      position: "Sustainability Officer", 
      description: "Environmental scientist ensuring our green credentials. Oversees our carbon footprint reduction initiatives and sustainable material sourcing.",
      image: teamSuraj
    },
    {
      name: "Amrut Patil",
      position: "Operations Director",
      description: "Logistics expert streamlining our sustainable production. Manages supply chain efficiency while maintaining our commitment to environmental excellence.",
      image: teamAmrut
    }
  ];

  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-green mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate professionals dedicated to bringing sustainable paving solutions to every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-brand-sand group-hover:border-brand-green transition-colors duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-brand-green mb-1">
                  {member.name}
                </h3>
                
                <p className="text-brand-earth-dark font-medium mb-4">
                  {member.position}
                </p>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-brand-green mb-8">Our Values</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl mb-4">🌱</div>
              <h4 className="font-semibold text-brand-green mb-2">Sustainability First</h4>
              <p className="text-muted-foreground text-sm">Every decision we make considers environmental impact and long-term sustainability.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="font-semibold text-brand-green mb-2">Quality Partnership</h4>
              <p className="text-muted-foreground text-sm">We build lasting relationships with our clients through transparent communication and reliable service.</p>
            </div>
            <div>
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="font-semibold text-brand-green mb-2">Innovation Excellence</h4>
              <p className="text-muted-foreground text-sm">Continuously improving our products and processes to stay ahead in sustainable construction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;