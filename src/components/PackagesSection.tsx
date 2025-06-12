
import { Star, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const packages = [
  {
    id: 1,
    title: "Backwater Bliss",
    duration: "3 Days / 2 Nights",
    people: "2-6 People",
    price: "₹12,999",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000&auto=format&fit=crop",
    description: "Experience the serene backwaters of Alleppey with houseboat stays and traditional Kerala cuisine.",
    highlights: ["Houseboat Stay", "Traditional Meals", "Village Tours"]
  },
  {
    id: 2,
    title: "Hill Station Escape",
    duration: "4 Days / 3 Nights",
    people: "2-8 People",
    price: "₹18,999",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&auto=format&fit=crop",
    description: "Discover the misty hills of Munnar with tea plantation visits and wildlife encounters.",
    highlights: ["Tea Plantation Tours", "Wildlife Safari", "Mountain Trekking"]
  },
  {
    id: 3,
    title: "Cultural Heritage",
    duration: "5 Days / 4 Nights",
    people: "4-10 People",
    price: "₹22,999",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072&auto=format&fit=crop",
    description: "Immerse yourself in Kerala's rich culture with temple visits, art forms, and festivals.",
    highlights: ["Temple Visits", "Kathakali Shows", "Ayurveda Treatments"]
  },
  {
    id: 4,
    title: "Beach Paradise",
    duration: "3 Days / 2 Nights",
    people: "2-6 People",
    price: "₹15,999",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3945&auto=format&fit=crop",
    description: "Relax on pristine beaches of Kovalam and Varkala with water sports and seafood.",
    highlights: ["Beach Resort Stay", "Water Sports", "Seafood Dining"]
  },
  {
    id: 5,
    title: "Wildlife Adventure",
    duration: "4 Days / 3 Nights",
    people: "3-8 People",
    price: "₹20,999",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=3648&auto=format&fit=crop",
    description: "Explore Periyar National Park and witness exotic wildlife in their natural habitat.",
    highlights: ["Jungle Safari", "Elephant Rides", "Bird Watching"]
  },
  {
    id: 6,
    title: "Complete Kerala",
    duration: "7 Days / 6 Nights",
    people: "4-12 People",
    price: "₹35,999",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3506&auto=format&fit=crop",
    description: "The ultimate Kerala experience covering backwaters, hills, beaches, and culture.",
    highlights: ["All Destinations", "Luxury Accommodation", "Private Guide"]
  }
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Tour <span className="text-emerald-600">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully crafted tour packages designed to showcase the best of Kerala's natural beauty and cultural richness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {pkg.price}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{pkg.people}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-foreground">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <span 
                        key={index}
                        className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
