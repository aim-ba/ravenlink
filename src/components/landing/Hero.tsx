import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

type HeroProps = {
  onBrowseJobs: () => void;
};

export function Hero({ onBrowseJobs }: HeroProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT: Content */}
          <div className="space-y-10">
            <h1 className="text-6xl sm:text-7xl font-bold text-foreground leading-[1.1] tracking-tight">
              Building relationships, creating opportunities.
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Connect Indigenous communities with meaningful employment while providing
              transparent ESG reporting for infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={onBrowseJobs} size="lg" className="h-12 px-8 text-base">
                Browse opportunities
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Trusted by communities</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>ESG compliant</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="w-full max-w-md p-8 border-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🏔️</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Raven Platform</div>
                    <div className="text-sm text-muted-foreground">Indigenous Engagement</div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <div className="text-sm text-muted-foreground mb-1">Active Opportunities</div>
                    <div className="text-3xl font-bold text-foreground">247</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <div className="text-sm text-muted-foreground mb-1">Communities Served</div>
                    <div className="text-3xl font-bold text-foreground">50+</div>
                  </div>
                  <div className="p-4 rounded-lg bg-primary text-primary-foreground">
                    <div className="text-sm opacity-90 mb-1">Projects Tracked</div>
                    <div className="text-3xl font-bold">150+</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
