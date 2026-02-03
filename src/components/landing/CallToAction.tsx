import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

type CallToActionProps = {
  onGetStarted: () => void;
};

export function CallToAction({ onGetStarted }: CallToActionProps) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6">
          Ready to level up your Indigenous engagement?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-12 leading-relaxed">
          Join communities and project leaders building stronger partnerships through transparent tracking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onGetStarted}
            size="lg"
            variant="secondary"
            className="h-12 px-8 text-base"
          >
            Browse opportunities
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            <a href="mailto:lisah.peterson@aimlandandenviro.ca">
              Learn more
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
