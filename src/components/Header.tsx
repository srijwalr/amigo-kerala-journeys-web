
import { Menu, Phone, Mail } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>info@amigoventures.com</span>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Experience God's Own Country
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-primary">
            <span className="text-emerald-600">Amigo</span>
            <span className="text-amber-600"> Ventures</span>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
              Home
            </a>
            <a href="#packages" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
              Packages
            </a>
            <a href="#services" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-emerald-600 transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              <a href="#home" className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2">
                Home
              </a>
              <a href="#packages" className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2">
                Packages
              </a>
              <a href="#services" className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-emerald-600 transition-colors font-medium py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
