import { ArrowRight, CheckCircle2, Users, QrCode, Smartphone } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import QRCodeSVG from "../../config/Enbridge_EI_QR_SVG.svg";

type HeroProps = {
  onBrowseJobs: () => void;
};

export function Hero({ onBrowseJobs }: HeroProps) {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="w-fit px-2 py-2">
              <Users className="w-3 h-3 mr-2" />
              Indigenous Engagement Platform
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building relationships,{" "}
              <span className="text-primary">creating opportunities</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect Indigenous communities with meaningful employment while providing transparent ESG reporting for major infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={onBrowseJobs} className="group">
                Browse opportunities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="https://www.fastfieldwebforms.com/us/webforms/a7353059-48e7-4359-a410-7b12a14ae137?fffcb=1764964351277" target="_blank" rel="noopener noreferrer">
                  Match Me
                </a>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Trusted by communities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>ESG compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Transparent tracking</span>
              </div>
            </div>
          </motion.div>

          {/* Right: QR Code Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Card className="p-8 border-2 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <QrCode className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Quick Access</div>
                    <div className="text-sm text-muted-foreground">Scan to get started</div>
                  </div>
                </div>

                {/* QR Code */}
                <div className="flex justify-center py-4">
                  <div className="w-64 h-64 bg-white rounded-xl p-4 border-2 border-dashed border-border">
                    <img
                      src={QRCodeSVG}
                      alt="Scan to access Raven platform"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Open your camera app and point at the code</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Instant access to opportunities on your mobile device</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating indicator */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card border-2 border-primary/20 rounded-lg p-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Mobile ready</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
