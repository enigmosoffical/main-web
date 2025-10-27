import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

interface FounderCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  expertise?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  stats?: {
    label: string;
    value: string;
  }[];
  quote?: string;
}

const FounderCard = ({ name, role, description, image, expertise, social, stats, quote }: FounderCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-strong p-8 rounded-xl border-2 border-transparent hover:border-primary/30 transition-all h-full flex flex-col"
    >
      <div className="flex flex-col items-center text-center mb-6">
        {/* Avatar with image */}
        <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary p-1 mb-4 group">
          <div className="w-full h-full rounded-full overflow-hidden bg-muted flex items-center justify-center">
            {image && image !== "/placeholder-founder-1.jpg" && image !== "/placeholder-founder-2.jpg" ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-4xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            )}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-medium mb-3">{role}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>

      {/* Quote Section */}
      {quote && (
        <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-l-4 border-primary">
          <p className="text-sm text-foreground italic">"{quote}"</p>
        </div>
      )}

      {/* Expertise */}
      {expertise && expertise.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold mb-3 text-left">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3 rounded-lg bg-muted/30">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Social Links */}
      {social && (
        <div className="flex gap-3 justify-center mt-auto pt-4 border-t border-border/50">
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          )}
          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          )}
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          )}
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="p-2 rounded-full hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default FounderCard;
