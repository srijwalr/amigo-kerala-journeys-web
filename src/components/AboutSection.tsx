
import { Award, Users, Globe, Heart } from "lucide-react";

const stats = [
  { icon: Users, number: "5000+", label: "Happy Travelers" },
  { icon: Globe, number: "100+", label: "Destinations Covered" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Heart, number: "99%", label: "Customer Satisfaction" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-emerald-600">Amigo Ventures</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded with a passion for showcasing Kerala's incredible beauty, Amigo Ventures has been creating unforgettable travel experiences for over 15 years. We are a team of local experts who know every hidden gem, every scenic route, and every cultural nuance that makes Kerala truly special.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our mission is to provide authentic, sustainable, and personalized travel experiences that connect you with the heart and soul of God's Own Country. From the tranquil backwaters to the misty mountains, we ensure every moment of your journey is extraordinary.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?q=80&w=3872&auto=format&fit=crop" 
                alt="Kerala Mountains"
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=3873&auto=format&fit=crop" 
                alt="Kerala Backwaters"
                className="w-full h-48 object-cover rounded-lg shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <img 
                src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=5616&auto=format&fit=crop" 
                alt="Kerala Nature"
                className="w-64 h-32 object-cover rounded-lg shadow-xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
