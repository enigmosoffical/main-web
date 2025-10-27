import { motion } from "framer-motion";
import { Code, Palette, Video, TrendingUp, Brain, Rocket, Settings, Shield } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
      features: ["React & Next.js", "Full-Stack Solutions", "Responsive Design", "Performance Optimization"],
      glowColor: "rgba(108, 99, 255, 0.5)",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "Brand Design",
      description: "Comprehensive brand identity design including logos, color schemes, and visual guidelines.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Packaging Design"],
      glowColor: "rgba(0, 224, 255, 0.5)",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Video,
      title: "Video Editing",
      description: "Professional video editing services for marketing, social media, and corporate communications.",
      features: ["Motion Graphics", "Color Grading", "Social Media Content", "Commercial Production"],
      glowColor: "rgba(255, 107, 107, 0.5)",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns to boost your online presence and drive conversions.",
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics & Insights"],
      glowColor: "rgba(78, 205, 196, 0.5)",
      gradient: "from-teal-500 to-emerald-500",
    },
    {
      icon: Brain,
      title: "AI & Automation",
      description: "Intelligent automation solutions and AI-powered tools to streamline your business processes.",
      features: ["Chatbots & AI", "Workflow Automation", "Data Analytics", "Machine Learning"],
      glowColor: "rgba(199, 125, 255, 0.5)",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security solutions to protect your data and ensure compliance with industry standards.",
      features: ["Security Audits", "Data Protection", "GDPR Compliance", "Threat Monitoring"],
      glowColor: "rgba(59, 130, 246, 0.5)",
      gradient: "from-blue-500 to-indigo-500",
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
              Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        {/* Services Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-xl transition-all cursor-pointer hover:scale-105 h-full flex flex-col"
                style={{ boxShadow: `0 0 20px ${service.glowColor}40` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                
                {/* Features List */}
                <div className="space-y-2 mb-4 flex-grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/collaborate">
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10 w-full">
                    Get Started
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ENIGMOS?
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                title: "Fast Delivery",
                desc: "Agile methodology ensures quick turnarounds without compromising quality.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Settings,
                title: "Tailored Solutions",
                desc: "Every project is customized to meet your unique business needs and goals.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Guaranteed Results",
                desc: "We're committed to delivering measurable outcomes and continuous support.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl text-center hover:glow-subtle transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-strong p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <Rocket className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's collaborate to build something extraordinary. Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collaborate">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/works">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  View Our Works
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
