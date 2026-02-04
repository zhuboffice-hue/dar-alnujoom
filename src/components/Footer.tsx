import { Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Star className="w-6 h-6 text-gold fill-gold/20" />
            <div>
              <span className="font-display text-lg font-semibold text-primary-foreground">
                DAR ALNUJOOM
              </span>
              <span className="text-primary-foreground/60 text-sm ml-2">
                Trading L.L.C
              </span>
            </div>
          </div>

          {/* Arabic Name */}
          <p className="text-gold text-lg" dir="rtl">
            دار النجوم للتجارة
          </p>

          {/* Copyright */}
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} DAR ALNUJOOM TRADING L.L.C S.O.C. All rights reserved.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="text-center text-primary-foreground/50 text-xs">
            Licensed by Department of Economic Development, UAE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
