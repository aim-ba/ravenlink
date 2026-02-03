import { UserPlus, Search, Briefcase, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create your profile",
    description: "Register and complete your profile with skills, certifications, and Indigenous community affiliation."
  },
  {
    icon: Search,
    number: "02",
    title: "Discover opportunities",
    description: "Browse available positions across infrastructure projects in your area and Traditional Territories."
  },
  {
    icon: Briefcase,
    number: "03",
    title: "Get matched",
    description: "Our platform connects you with relevant opportunities based on your qualifications and preferences."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Track your progress",
    description: "Monitor your applications, track work hours, and access ongoing training opportunities."
  }
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get started in four simple steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From registration to employment, we guide you through the entire process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                <Card className="p-6 h-full border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-muted-foreground/10">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
