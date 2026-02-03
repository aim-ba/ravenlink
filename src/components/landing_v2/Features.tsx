import { Heart, Sparkles, Shield, GraduationCap, Target } from 'lucide-react';
import { Card } from '../ui/card';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const pillars = [
  {
    letter: "R",
    icon: Heart,
    title: "Relationship-Driven",
    description: "Built on strong, ongoing relationships with Indigenous Nations, grounded in trust, early engagement, and consistent communication.",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-600"
  },
  {
    letter: "A",
    icon: Sparkles,
    title: "Access & Opportunity",
    description: "Creates clear, equitable pathways to employment and training while reducing barriers and improving awareness of opportunities.",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    textColor: "text-purple-600"
  },
  {
    letter: "V",
    icon: Shield,
    title: "Verified & Transparent Tracking",
    description: "Uses standardized, verifiable tracking to ensure accountability, consistency, and transparent reporting to Nations and partners.",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    textColor: "text-green-600"
  },
  {
    letter: "E",
    icon: GraduationCap,
    title: "Employment & Training",
    description: "Supports meaningful employment and skills-based training that lead to real, transferable job outcomes.",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    textColor: "text-orange-600"
  },
  {
    letter: "N",
    icon: Target,
    title: "Nation-Centered Outcomes",
    description: "Measures success based on Indigenous Nation priorities, supporting community-defined economic and workforce goals.",
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
    textColor: "text-red-600"
  }
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-semibold text-primary mb-6 tracking-wider uppercase">
            The RAVEN Framework
          </div>

          {/* Large RAVEN letters */}
          <div className="flex justify-center items-center gap-3 mb-8">
            {pillars.map((pillar, index) => {
              const gradients = {
                R: "bg-gradient-to-br from-blue-500 to-blue-600",
                A: "bg-gradient-to-br from-purple-500 to-purple-600",
                V: "bg-gradient-to-br from-green-500 to-green-600",
                E: "bg-gradient-to-br from-orange-500 to-orange-600",
                N: "bg-gradient-to-br from-red-500 to-red-600"
              };
              return (
                <motion.div
                  key={pillar.letter}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${gradients[pillar.letter as keyof typeof gradients]}`}
                >
                  <span className="text-3xl font-bold text">
                    {pillar.letter}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Five pillars of{" "}
            <span className="text-primary">Indigenous engagement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive methodology that puts Indigenous Nations at the center of every decision
          </p>
        </motion.div>

        {/* Grid layout for pillars */}
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const gradients = {
              R: "bg-gradient-to-br from-blue-500 to-blue-600",
              A: "bg-gradient-to-br from-purple-500 to-purple-600",
              V: "bg-gradient-to-br from-green-500 to-green-600",
              E: "bg-gradient-to-br from-orange-500 to-orange-600",
              N: "bg-gradient-to-br from-red-500 to-red-600"
            };
            const borderColors = {
              R: "border-blue-500",
              A: "border-purple-500",
              V: "border-green-500",
              E: "border-orange-500",
              N: "border-red-500"
            };
            const textColors = {
              R: "text-blue-600",
              A: "text-purple-600",
              V: "text-green-600",
              E: "text-orange-600",
              N: "text-red-600"
            };
            return (
              <motion.div
                key={pillar.letter}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={index === 4 ? "md:col-span-2 md:max-w-xl md:mx-auto md:w-full" : ""}
              >
                <Card className={`p-6 h-full border-2 transition-all duration-300 ${
                  hoveredIndex === index
                    ? `${borderColors[pillar.letter as keyof typeof borderColors]} shadow-2xl scale-[1.02]`
                    : 'border-border hover:border-primary/30'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 flex items-center justify-center ${gradients[pillar.letter as keyof typeof gradients]}`}>
                      <span className="text-2xl font-bold text">
                        {pillar.letter}
                      </span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${textColors[pillar.letter as keyof typeof textColors]}`} />
                        <h3 className="text-lg font-bold text-foreground">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <p className="text-base font-semibold text-foreground">
              Together, these pillars create a <span className="text-primary">sustainable framework</span> for meaningful Indigenous participation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
