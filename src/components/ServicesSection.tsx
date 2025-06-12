
import { Plane, Hotel, Car, Camera, Shield, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Book domestic and international flights at competitive prices with our travel partners."
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description: "From luxury resorts to budget homestays, we provide the best accommodation options."
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Comfortable and safe transportation with experienced drivers for your entire journey."
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Professional photography services to capture your memorable moments in Kerala."
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive travel insurance coverage for peace of mind during your trip."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you throughout your Kerala adventure."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive travel services to ensure your Kerala trip is comfortable, memorable, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-emerald-200 group">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
