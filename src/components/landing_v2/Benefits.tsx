import { Target, Sparkles, BarChart3, Shield, Users, Award } from 'lucide-react';
import { Card } from '../ui/card';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    icon: Target,
    title: "Build relationships",
    description: "Strengthen partnerships with Indigenous communities through meaningful engagement and inclusion",
    gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Sparkles,
    title: "Increase certainty",
    description: "Develop and operate projects within Traditional Territories through collaborative partnerships",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600"
  },
  {
    icon: BarChart3,
    title: "Meet ESG targets",
    description: "Create a strong framework for standardized reporting across all projects",
    gradient: "bg-gradient-to-br from-green-500 to-green-600",
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600"
  },
  {
    icon: Shield,
    title: "Ensure compliance",
    description: "Automated tracking and reporting ensures regulatory requirements are met",
    gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600"
  },
  {
    icon: Users,
    title: "Support communities",
    description: "Direct economic benefits and employment opportunities for Indigenous communities",
    gradient: "bg-gradient-to-br from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    iconColor: "text-pink-600"
  },
  {
    icon: Award,
    title: "Quality assurance",
    description: "Pre-qualified vendors with verified capabilities for project success",
    gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-600"
  }
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-semibold text-primary mb-4 tracking-wider uppercase">
            Benefits
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Why organizations choose Raven
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete solution for Indigenous engagement and ESG reporting
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colors = [
              { bg: "bg-blue-500/10", icon: "text-blue-600", gradient: "bg-gradient-to-br from-blue-500 to-blue-600" },
              { bg: "bg-purple-500/10", icon: "text-purple-600", gradient: "bg-gradient-to-br from-purple-500 to-purple-600" },
              { bg: "bg-green-500/10", icon: "text-green-600", gradient: "bg-gradient-to-br from-green-500 to-green-600" },
              { bg: "bg-orange-500/10", icon: "text-orange-600", gradient: "bg-gradient-to-br from-orange-500 to-orange-600" },
              { bg: "bg-pink-500/10", icon: "text-pink-600", gradient: "bg-gradient-to-br from-pink-500 to-pink-600" },
              { bg: "bg-indigo-500/10", icon: "text-indigo-600", gradient: "bg-gradient-to-br from-indigo-500 to-indigo-600" }
            ];
            const color = colors[index];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.05 + index * 0.05 }}
              >
                <Card className="p-6 h-full border hover:border-primary/50 transition-all hover:shadow-lg group">
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${color.bg}`}>
                      <Icon className={`w-6 h-6 ${color.icon} transition-colors`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
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
