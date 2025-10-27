import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  glowColor: string;
}

const ServiceCard = ({ icon: Icon, title, description, glowColor }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${glowColor}` }}
      className="glass p-6 rounded-xl transition-all cursor-pointer"
    >
      <div className="mb-4">
        <Icon className="w-12 h-12" style={{ color: glowColor }} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
        Learn More
      </Button>
    </motion.div>
  );
};

export default ServiceCard;
