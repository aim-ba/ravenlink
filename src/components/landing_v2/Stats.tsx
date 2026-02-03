import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import EnbridgeLogo from "../../assets/logos/Enbridge-Logo.svg?react";

const partners = [
  {
    name: "Enbridge",
    type: "svg" as const,
    LogoComponent: EnbridgeLogo
  },
  {
    name: "AiM Land and Environment",
    type: "img" as const,
    lightSrc: "/logos/AIM-Logo-Black.png",
    darkSrc: "/logos/AIM-Logo-White.png"
  }
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-26 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
              Trusted Partners
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Working with industry leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proudly partnering with organizations committed to Indigenous reconciliation and economic development
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-3xl mx-auto">
          {partners.map((partner, index) => {
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group w-64"
              >
                <div className="w-full h-20 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full">
                  {partner.type === 'svg' ? (
                    <partner.LogoComponent
                      className="max-w-full max-h-full transition-transform group-hover:scale-105"
                      aria-label={partner.name}
                    />
                  ) : (
                    <img
                      src={isDark ? partner.darkSrc : partner.lightSrc}
                      alt={partner.name}
                      className="max-w-full max-h-full transition-transform group-hover:scale-105 object-contain"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
