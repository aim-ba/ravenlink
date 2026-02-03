import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "Enbridge",
    logo: "/logos/enbridge.png"
  },
  {
    name: "AiM Land and Environment",
    logo: "/logos/AIM-Logo-Black.png"
  }
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group w-64"
            >
              <div className="w-full h-20 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
