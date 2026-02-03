import { ArrowRight, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type CTAProps = {
  onGetStarted: () => void;
};

export function CTA({ onGetStarted }: CTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-primary">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary/90 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] -z-10" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Ready to build stronger partnerships?
          </h2>
          <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto">
            Join communities and project leaders creating meaningful opportunities through transparent tracking and ESG compliance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={onGetStarted}
              className="h-12 px-8 text-base group bg-white text-primary hover:bg-white/90"
            >
              Browse opportunities
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base bg-transparent border-2 border-white text-white hover:bg-white/10"
            >
              <a href="mailto:lisah.peterson@aimlandandenviro.ca">
                <Mail className="w-4 h-4" />
                Contact us
              </a>
            </Button>
          </div>

          <div className="pt-8 text-sm text-white">
            Powered by AiM Land and Environment • Trusted by Indigenous Communities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
