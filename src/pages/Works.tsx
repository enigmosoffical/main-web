import { motion } from "framer-motion";
import { Sparkles, Code, Palette, Video, Briefcase, Globe } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";

const Works = () => {
  // Limit to 3 cards for proper stacking
  const projectCards = [
    {
      icon: <Code className="size-4 text-blue-300" />,
      title: "E-Commerce Platform",
      description: "Full-stack solution with AI recommendations",
      date: "Completed",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-full before:outline before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Palette className="size-4 text-orange-300" />,
      title: "Brand Identity Design",
      description: "Complete rebrand for fintech startup",
      date: "2024",
      iconClassName: "text-orange-500",
      titleClassName: "text-orange-500",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-full before:outline before:outline-1 before:rounded-xl before:outline-border before:h-full before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Globe className="size-4 text-green-300" />,
      title: "SaaS Dashboard",
      description: "Analytics platform with real-time data",
      date: "In Progress",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  const clientCards = [
    {
      icon: <Sparkles className="size-4 text-blue-300" />,
      title: "Varshith Merugu",
      description: "Built $81K revenue e-commerce platform",
      date: "Client Project",
      iconClassName: "text-blue-500",
      titleClassName: "text-blue-500",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-green-300" />,
      title: "Trey Gustafson",
      description: "Achieved 1M$ ARR in SaaS platform",
      date: "Success Story",
      iconClassName: "text-green-500",
      titleClassName: "text-green-500",
      className:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="size-4 text-purple-300" />,
      title: "Spain Academy",
      description: "Complete digital transformation",
      date: "Featured",
      iconClassName: "text-purple-500",
      titleClassName: "text-purple-500",
      className:
        "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our expertise through successful projects and client collaborations.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="flex min-h-[400px] w-full items-center justify-center overflow-hidden px-4">
            <div className="w-full max-w-5xl">
              <DisplayCards cards={projectCards} />
            </div>
          </div>
        </motion.div>

        {/* Client Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            Client{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <div className="flex min-h-[300px] w-full items-center justify-center overflow-hidden px-4">
            <div className="w-full max-w-4xl">
              <DisplayCards cards={clientCards} />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-strong p-8 rounded-2xl inline-block max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-muted-foreground mb-6">
              Let's build something amazing together. Share your vision with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/collaborate">
                <button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary px-8 py-3 rounded-lg font-semibold transition-all">
                  Start Your Project
                </button>
              </a>
              <a href="/contact">
                <button className="border-2 border-primary/30 hover:bg-primary/10 px-8 py-3 rounded-lg font-semibold transition-all">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;

