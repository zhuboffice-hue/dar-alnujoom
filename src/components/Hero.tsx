import { ArrowDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury trading background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <Star className="w-32 h-32 text-gold animate-float" />
      </div>
      <div className="absolute bottom-32 left-10 opacity-10">
        <Star className="w-24 h-24 text-gold animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Arabic Name */}
          <p className="text-gold-light text-lg md:text-xl font-medium mb-4 animate-fade-in opacity-0 stagger-1" dir="rtl">
            دار النجوم للتجارة
          </p>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up opacity-0 stagger-2">
            DAR ALNUJOOM
            <span className="block text-gradient-gold mt-2">TRADING L.L.C</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in opacity-0 stagger-3">
            Your trusted partner in quality merchandise. From textiles to luxury goods,
            we bring the finest products to the UAE market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0 stagger-4">
            <Button
              variant="hero"
              onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Products
            </Button>
            <Button
              variant="hero-outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto animate-fade-in opacity-0 stagger-5">
            {[
              { value: "14+", label: "Product Categories" },
              { value: "UAE", label: "Based & Licensed" },
              { value: "100%", label: "Quality Assured" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-display font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#categories" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-gold transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
