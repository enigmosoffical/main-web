import { motion } from "framer-motion";
import { Target, Rocket, Users, Award, Sparkles } from "lucide-react";
import FounderCard from "@/components/FounderCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "Beemari Buchi Babu",
      role: "Founder",
      description: "Visionary leader driving strategic growth and innovative digital transformations for global enterprises.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format",
      quote: "Innovation happens when strategy meets execution. Our mission is to bridge that gap for businesses worldwide.",
      expertise: ["Strategic Leadership", "Business Development", "Digital Transformation", "AI Integration"],
      stats: [
        { label: "Projects Led", value: "50+" },
        { label: "Years Experience", value: "8+" }
      ],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "buchi@enigmos.ai"
      }
    },
    {
      name: "Mohamed Ayaz",
      role: "Founder ",
      description: "Technical architect crafting cutting-edge solutions that scale seamlessly across platforms and industries.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format",
      quote: "Technology is an enabler. Our goal is to make complex systems intuitive and powerful solutions accessible to everyone.",
      expertise: ["Full-Stack Development", "AI & Machine Learning", "Cloud Architecture", "System Design"],
      stats: [
        { label: "Lines of Code", value: "500K+" },
        { label: "Systems Built", value: "30+" }
      ],
      social: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        email: "ayaz@enigmos.ai"
      }
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
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Founders
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The visionary leaders and technical architects driving innovation and excellence at Enigmos.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <FounderCard {...founder} />
            </motion.div>
          ))}
        </div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="glass-strong p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-background" />
              </div>
              <h2 className="text-3xl font-bold">Our Story</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Founded with a vision to bridge the gap between cutting-edge technology and creative excellence, 
                ENIGMOS was born from the belief that every business deserves transformative digital solutions.
              </p>
              <p>
                What started as a passion project between two innovative minds has evolved into a global 
                digital agency trusted by industry leaders. With a commitment to innovation, quality, and 
                measurable results, we've built a reputation for delivering solutions that don't just meet 
                expectations—they exceed them.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Drives{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Innovation",
                desc: "Continuously pushing boundaries with cutting-edge technology and creative solutions.",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: Target,
                title: "Excellence",
                desc: "Delivering quality in every project with meticulous attention to detail.",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "Building lasting relationships and growing together with our clients.",
                gradient: "from-green-500 to-emerald-500"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 rounded-xl hover:glow-subtle transition-all text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${value.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-6">
              <Award className="w-8 h-8 text-background" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's transform your digital presence together. Reach out and let's discuss how we can help 
              your business achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collaborate">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                  Start a Project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Founders;
