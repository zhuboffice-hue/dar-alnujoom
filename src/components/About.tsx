import { CheckCircle, Star, Building2, Award } from "lucide-react";

const features = [
  "Licensed by UAE Department of Economic Development",
  "Wide range of 14+ product categories",
  "Quality assurance on all merchandise",
  "Reliable supply chain partnerships",
  "Competitive wholesale pricing",
  "Professional customer service",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-3">
              About Us
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Your Trusted Trading Partner in the{" "}
              <span className="text-gradient-gold">UAE</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              DAR ALNUJOOM TRADING L.L.C S.O.C is a licensed trading company based in the
              United Arab Emirates. We specialize in wholesale and retail trading of a
              diverse range of quality products, from textiles and garments to luxury
              items and everyday essentials.
            </p>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Arabic Name */}
            <div className="inline-flex items-center gap-3 bg-card rounded-lg px-6 py-4 shadow-elegant border border-border/50">
              <Star className="w-6 h-6 text-gold fill-gold/20" />
              <div>
                <p className="text-xl font-medium text-foreground" dir="rtl">
                  دار النجوم للتجارة ذ.م.م ش.ش.و
                </p>
                <p className="text-sm text-muted-foreground">
                  "House of Stars" Trading
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Building2 className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-4xl font-bold text-foreground mb-2">UAE</h3>
              <p className="text-muted-foreground text-sm">Licensed & Based</p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50 text-center group hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-display text-4xl font-bold text-foreground mb-2">14+</h3>
              <p className="text-muted-foreground text-sm">Product Categories</p>
            </div>

            <div className="bg-navy rounded-2xl p-8 shadow-elegant text-center group hover:shadow-lg transition-all duration-300 col-span-2">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-center px-6 border-r border-primary-foreground/20">
                  <h3 className="font-display text-3xl font-bold text-primary-foreground mb-1">Quality</h3>
                  <p className="text-primary-foreground/70 text-sm">Products</p>
                </div>
                <div className="text-center px-6 border-r border-primary-foreground/20">
                  <h3 className="font-display text-3xl font-bold text-gold mb-1">Trust</h3>
                  <p className="text-primary-foreground/70 text-sm">Partnership</p>
                </div>
                <div className="text-center px-6">
                  <h3 className="font-display text-3xl font-bold text-primary-foreground mb-1">Value</h3>
                  <p className="text-primary-foreground/70 text-sm">Pricing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
