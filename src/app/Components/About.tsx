"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Brain } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <Code2 className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
              <p className="text-muted-foreground">
                Passionate about creating elegant solutions to complex problems using modern technologies.
              </p>
            </Card>
            <Card className="p-6">
              <Rocket className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground">
                Love tackling challenging problems and finding innovative solutions through code.
              </p>
            </Card>
            <Card className="p-6">
              <Brain className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
              <p className="text-muted-foreground">
                Always exploring new technologies and staying up-to-date with industry trends.
              </p>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}