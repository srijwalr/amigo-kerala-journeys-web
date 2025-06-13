
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3634&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-6 h-6 mr-2 text-emerald-400" />
          <span className="text-emerald-400 font-medium">Kerala, India</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
          Discover
          <span className="text-emerald-400 block">God's Own Country</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto drop-shadow-md">
          Experience the pristine backwaters, lush hill stations, and rich cultural heritage of Kerala with our carefully curated tour packages.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg shadow-lg">
            Explore Packages
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg bg-black/20 backdrop-blur-sm shadow-lg">
            Plan Your Trip
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
