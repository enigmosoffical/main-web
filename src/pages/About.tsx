import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, Target, Zap, Award, Shield, Globe2, Briefcase, Sparkles } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2025", event: "Founded", icon: Rocket, color: "from-blue-500 to-cyan-500" },
    { year: "100+", event: "Projects Completed", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
    { year: "Global", event: "Client Base", icon: Users, color: "from-orange-500 to-red-500" },
    { year: "AI-Powered", event: "Solutions", icon: Sparkles, color: "from-green-500 to-emerald-500" },
  ];

  const values = [
    { 
      title: "Innovation First", 
      desc: "We leverage cutting-edge technology and creative solutions to solve complex problems.",
      icon: Zap,
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      title: "Client Excellence", 
      desc: "Your success is our priority. We deliver beyond expectations, every single time.",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      title: "Transparent Partnership", 
      desc: "Building lasting relationships through clear communication and honest collaboration.",
      icon: Shield,
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ENIGMOS
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a next-generation digital agency blending cutting-edge technology, creative design, and strategic thinking 
            to create impactful digital experiences that drive real results.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="glass-strong p-8 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6">
              <Target className="w-8 h-8 text-background" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To empower businesses with transformative digital solutions that unlock their full potential. 
              We bridge the gap between innovative technology and creative excellence.
            </p>
          </div>
          <div className="glass-strong p-8 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
              <Globe2 className="w-8 h-8 text-background" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground text-lg">
              To become the go-to partner for forward-thinking companies seeking to redefine their digital presence. 
              We envision a world where every business can leverage cutting-edge technology.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">
            By The{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={milestone.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center glass p-6 rounded-xl hover:scale-105 transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${milestone.color} mb-4`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{milestone.year}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.event}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-8 rounded-xl hover:glow-subtle transition-all"
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${value.gradient} mb-4`}>
                    <Icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* What Makes Us Different */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong p-8 md:p-12 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Award className="w-8 h-8 text-background" />
            </div>
            <h2 className="text-3xl font-bold">What Makes Us Different</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">AI-Powered Solutions</h4>
                  <p className="text-muted-foreground text-sm">
                    We integrate advanced AI and automation to streamline workflows and boost efficiency.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Briefcase className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Full-Service Excellence</h4>
                  <p className="text-muted-foreground text-sm">
                    From concept to execution, we handle every aspect of your digital transformation.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Results-Driven Approach</h4>
                  <p className="text-muted-foreground text-sm">
                    Every solution is designed with measurable outcomes and ROI in mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Global Perspective</h4>
                  <p className="text-muted-foreground text-sm">
                    Our diverse team brings international best practices to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
