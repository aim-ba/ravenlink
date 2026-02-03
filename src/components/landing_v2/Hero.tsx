import { ArrowRight, CheckCircle2, Users, QrCode, Smartphone, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import QRCodeSVG from "../../config/Enbridge_EI_QR_SVG.svg";

type HeroProps = {
  onBrowseJobs: () => void;
};

export function Hero({ onBrowseJobs }: HeroProps) {
  const [qrOpen, setQrOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);
  return (
    <section className="relative py-16 sm:py-20 lg:py-26 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:space-y-8"
          >
            <Badge variant="outline" className="w-fit px-2 py-2">
              <Users className="w-3 h-3 mr-2" />
              Indigenous Engagement Platform
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building relationships,{" "}
              <span className="text-primary">creating opportunities</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect Indigenous communities with meaningful employment while providing transparent ESG reporting for major infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
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
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Trusted by communities</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                <span>ESG compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
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
            <Card className="p-6 lg:p-8 border-2 shadow-xl">
              <Collapsible open={isDesktop || qrOpen} onOpenChange={isDesktop ? undefined : setQrOpen}>
                <div className="space-y-4 lg:space-y-6">
                  <CollapsibleTrigger asChild disabled={isDesktop}>
                    <div className={`flex items-center justify-between gap-3 pb-3 lg:pb-4 border-b ${!isDesktop ? 'cursor-pointer' : ''}`}>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <QrCode className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-base lg:text-lg">Quick Access</div>
                          <div className="text-xs lg:text-sm text-muted-foreground">Scan to get started</div>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform lg:hidden ${qrOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    {/* QR Code */}
                    <div className="flex justify-center py-2 lg:py-4">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white rounded-xl p-3 lg:p-4 border-2 border-dashed border-border">
                        <img
                          src={QRCodeSVG}
                          alt="Scan to access Raven platform"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 lg:space-y-3 pt-1 lg:pt-2">
                      <div className="flex items-center gap-3 text-xs lg:text-sm text-muted-foreground">
                        <Smartphone className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Open your camera app and point at the code</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs lg:text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>Instant access to opportunities on your mobile device</span>
                      </div>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </Card>

            {/* Floating indicator - desktop only */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="hidden lg:block absolute -top-4 -right-4 bg-card border-2 border-primary/20 rounded-lg p-3 shadow-lg"
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
