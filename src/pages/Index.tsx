import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Calendar as CalendarIcon, Clock, Video, CheckCircle2, Globe, ShoppingCart, TrendingUp, Check } from "lucide-react";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { format } from "date-fns";

const Index = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const testimonials = [
    {
      author: {
        name: "Varshith Merugu",
        handle: "@varshith",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      text: "ENIGMOS transformed our e-commerce platform. The AI-powered solutions increased our revenue by 300% within the first quarter. Absolutely phenomenal work!",
      href: "https://twitter.com/varshith"
    },
    {
      author: {
        name: "Trey Gustafson",
        handle: "@treyg",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      text: "Working with ENIGMOS was a game-changer. Their development team delivered a SaaS platform that now generates 1M$ ARR. The quality and professionalism is unmatched.",
    },
    {
      author: {
        name: "Suhair",
        handle: "@suhair_academy",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      text: "Phenomenal. We got what we needed and more! The digital transformation exceeded all expectations. Spain Academy owes its success to ENIGMOS.",
    },
    {
      author: {
        name: "Sarah Johnson",
        handle: "@sarahj",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
      },
      text: "Their AI automation solutions cut our operational costs by 40%. The integration was seamless and the support outstanding. Highly recommend!",
    },
    {
      author: {
        name: "Michael Chen",
        handle: "@mchen",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
      },
      text: "Best digital agency we've worked with. They delivered our fintech platform ahead of schedule and beyond our expectations.",
    },
  ];

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-preview");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScheduleClick = () => {
    navigate("/schedule-meeting");
  };

  const plans = [
    {
      name: "Website & Branding",
      description: "For launches that need a strong online presence and a clear identity. Includes landing pages, full websites, and complete brand design.",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Landing pages or full websites",
        "Complete brand identity",
        "Mobile-optimized, fast-loading build",
        "Consistent UI/UX system",
        "Copywriting support for clarity",
        "2 revision rounds included",
        "Fast comms: 48h update turnaround",
        "One senior team, one point of contact"
      ]
    },
    {
      name: "E-Commerce & Web Apps",
      description: "For growing businesses that need flexibility, scalability, and custom solutions. Covers e-commerce platforms, MVPs, and full web app development.",
      icon: ShoppingCart,
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Custom e-commerce platforms",
        "Product pages + CMS setup",
        "Secure payments and integrations",
        "Quick MVP builds for testing",
        "Scalable web app development",
        "Mobile-first, high-performance design",
        "2 revision rounds included",
        "Ongoing support available on retainer"
      ]
    },
    {
      name: "Marketing & Growth",
      description: "For teams looking to scale with structure and impact. Includes content marketing, personal branding strategy, and enterprise-level execution.",
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Content marketing strategies",
        "Campaign execution across channels",
        "Personal branding for founders",
        "Fast comms: 48h update turnaround",
        "Engaging social templates and assets",
        "SEO + growth optimization",
        "Monthly reporting and tracking",
        "Flexible retainers for ongoing work"
      ]
    }
  ];

  const faqs = [
    {
      question: "What services does ENIGMOS offer?",
      answer: "We offer comprehensive digital solutions including Web Development, Brand Design, Video Editing, Digital Marketing, AI & Automation, and Security & Compliance services. Our team specializes in creating custom solutions tailored to your business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while comprehensive digital transformations can take 2-6 months. We provide detailed timelines during our initial consultation based on your specific requirements."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing is determined by project scope, timeline, and complexity. Contact us for a customized quote tailored to your needs and budget."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital assets remain updated, secure, and performing optimally. This includes updates, security patches, monitoring, and technical support."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We excel at collaborating with in-house teams. We can integrate seamlessly with your existing workflows, provide training for your team, or work as an extension of your development department."
    },
    {
      question: "What makes ENIGMOS different from other agencies?",
      answer: "We combine cutting-edge AI technology with creative excellence. Our unique approach blends technical expertise with innovative design thinking, ensuring solutions that are both powerful and user-friendly. Plus, our proven track record includes clients generating $81K to $1M+ in revenue."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Shader Animation Background */}
        <ShaderAnimation />
        
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Where Creativity Meets{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We empower brands to grow, engage, and dominate in the digital era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToServices}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2" />
            </Button>
            <Link to="/collaborate">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg"
              >
                Let's Collaborate
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-secondary/20 blur-xl"
        />
      </section>

      {/* Services Preview Section */}
      <section id="services-preview" className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            What We{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Create
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From web development to AI solutions, we deliver excellence across all digital domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Web Development", desc: "Cutting-edge websites and applications" },
            { title: "Brand Design", desc: "Visual identity that stands out" },
            { title: "AI & Automation", desc: "Intelligent solutions for modern problems" },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover:glow-subtle transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
              View All Services
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Trusted by Industry Leaders"
        description="Join successful businesses worldwide who have transformed their digital presence with ENIGMOS"
        testimonials={testimonials}
      />

      {/* Plans Section */}
      <section className="py-20 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Plans
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect solution for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-strong p-8 rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all flex flex-col h-full"
                >
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${plan.gradient}`}>
                      <Icon className="w-7 h-7 text-background" />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`mt-1 shrink-0 p-1 rounded-full bg-gradient-to-br ${plan.gradient}`}>
                          <Check className="w-3 h-3 text-background" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link to="/collaborate">
                    <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary">
                      Get Started
                      <ArrowRight className="ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Let's Discuss Your Project Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Info & Calendar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Let's Discuss Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Project
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Schedule a free discovery call with me!
                </p>
              </div>

              

              {/* Testimonial */}
              <div className="glass-strong p-6 rounded-2xl">
                <p className="text-muted-foreground italic mb-2">
                  "Phenomenal. We got what we needed!"
                </p>
                <p className="text-sm font-semibold">- Manoj, Co-Founder at Xovaxy</p>
              </div>

              {/* Booking Info */}
              <div className="glass-strong p-6 rounded-2xl space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">30m</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <span className="font-medium">Google Meet</span>
                </div>
                <div className="flex items-center gap-3">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span className="font-medium">Asia/Kolkata</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Calendar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="glass-strong p-6 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Choose a Date & Time</h3>
                
                {/* Calendar */}
                <div className="mb-6">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    className="rounded-md mx-auto"
                  />
                </div>

                {date && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="glass"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Time</label>
                      <Input
                        type="time"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        className="glass"
                      />
                    </div>
                    <Button
                      onClick={handleScheduleClick}
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary"
                      size="lg"
                    >
                      <CheckCircle2 className="mr-2" />
                      Schedule Meeting
                    </Button>
                  </div>
                )}

                {!date && (
                  <div className="text-center text-muted-foreground">
                    <p className="text-sm">Select a date to continue</p>
                  </div>
                )}
              </div>

              {date && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass p-4 rounded-xl text-center"
                >
                  <p className="text-sm text-muted-foreground">Selected</p>
                  <p className="font-semibold">{format(date, "EEEE, MMMM d, yyyy")}</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="glass-strong rounded-2xl p-6 md:p-8">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border/50 rounded-lg px-4 py-2 hover:bg-muted/30 transition-colors"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mt-8"
            >
              <p className="text-muted-foreground mb-4">Still have questions?</p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                  Contact Us
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
