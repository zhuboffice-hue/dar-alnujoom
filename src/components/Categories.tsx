import { useState } from "react";
import {
  Shirt, Gift, Baby, Briefcase, Sparkles,
  ShoppingBag, Scissors, Footprints, Gamepad2,
  Gem, Flower2, Wind, Package, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Import category images
import textilesImg from "@/assets/categories/textiles.jpg";
import garmentsImg from "@/assets/categories/garments.jpg";
import perfumesImg from "@/assets/categories/perfumes.jpg";
import handbagsImg from "@/assets/categories/handbags.jpg";
import jewelryImg from "@/assets/categories/jewelry.jpg";
import arabwearImg from "@/assets/categories/arabwear.jpg";
import babycareImg from "@/assets/categories/babycare.jpg";
import travelImg from "@/assets/categories/travel.jpg";
import textileTradingImg from "@/assets/categories/textile-trading.png";
import giftsTradingImg from "@/assets/categories/gifts-trading.png";
import sewingImg from "@/assets/categories/sewing-embroidery.png";
import agarwoodImg from "@/assets/categories/agarwood-incense.png";
import shoeImg from "@/assets/categories/shoe-trading.png";
import toysImg from "@/assets/categories/toys-games.png";

const categories = [
  { name: "Blankets, Towels & Linens", icon: Package, description: "Premium home textiles for comfort and luxury", image: textilesImg, featured: true },
  { name: "Readymade Garments", icon: Shirt, description: "Quality apparel for every occasion", image: garmentsImg, featured: true },
  { name: "Perfumes & Cosmetics", icon: Flower2, description: "Exquisite beauty and fragrance collection", image: perfumesImg, featured: true },
  { name: "Handbags & Leather", icon: ShoppingBag, description: "Premium leather accessories & bags", image: handbagsImg, featured: true },
  { name: "Imitation Jewellery", icon: Gem, description: "Elegant fashion jewelry designs", image: jewelryImg, featured: true },
  { name: "Arabwear", icon: Sparkles, description: "Traditional Middle Eastern attire", image: arabwearImg, featured: true },
  { name: "Baby Care Requisites", icon: Baby, description: "Safe and gentle infant essentials", image: babycareImg, featured: true },
  { name: "Suitcases & Travel", icon: Briefcase, description: "Premium travel essentials", image: travelImg, featured: true },
  { name: "Textile Trading", icon: Scissors, description: "Quality fabrics & materials", image: textileTradingImg, featured: true },
  { name: "Gifts Trading", icon: Gift, description: "Unique gift items", image: giftsTradingImg, featured: true },
  { name: "Sewing & Embroidery", icon: Scissors, description: "Craft requisites", image: sewingImg, featured: true },
  { name: "Agarwood & Incense", icon: Wind, description: "Arabian fragrances", image: agarwoodImg, featured: true },
  { name: "Shoe Trading", icon: Footprints, description: "Footwear collection", image: shoeImg, featured: true },
  { name: "Toys & Games", icon: Gamepad2, description: "Entertainment items", image: toysImg, featured: true },
];

const Categories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // All categories are now treated as "featured" for display purposes

  return (
    <section id="categories" className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium uppercase tracking-widest text-sm mb-3 animate-fade-in">
            What We Offer
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4 animate-slide-up">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in stagger-2">
            A diverse portfolio of quality merchandise serving businesses across the UAE
          </p>
        </div>

        {/* Categories Grid - All categories with full cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={category.name}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-xl transition-all duration-500 cursor-pointer animate-fade-in opacity-0"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={category.image!}
                    alt={category.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                      }`}
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-80'
                    }`} />

                  {/* Icon Badge */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-gold transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-gold-light transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className={`text-sm text-white/80 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}>
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Bottom Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gold transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />

                {/* Hover Arrow */}
                <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gold flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`}>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <p className="text-muted-foreground mb-4">
            Interested in wholesale or bulk orders?
          </p>
          <Button
            variant="gold"
            size="lg"
            className="group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
