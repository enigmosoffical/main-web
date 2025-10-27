import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Home, Info, Briefcase, FolderOpen, Users, Contact } from "lucide-react";
import { Button } from "./ui/button";
import { MenuBar } from "./ui/glow-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
      gradient:
        "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "text-blue-500",
    },
    {
      icon: Info,
      label: "About",
      href: "/about",
      gradient:
        "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "text-orange-500",
    },
    {
      icon: Briefcase,
      label: "Services",
      href: "/services",
      gradient:
        "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "text-green-500",
    },
    {
      icon: FolderOpen,
      label: "Works",
      href: "/works",
      gradient:
        "radial-gradient(circle, rgba(251,146,60,0.15) 0%, rgba(249,115,22,0.06) 50%, rgba(234,88,12,0) 100%)",
      iconColor: "text-amber-500",
    },
    {
      icon: Users,
      label: "Founders",
      href: "/founders",
      gradient:
        "radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(124,58,237,0.06) 50%, rgba(91,33,182,0) 100%)",
      iconColor: "text-purple-500",
    },
    {
      icon: Contact,
      label: "Contact",
      href: "/contact",
      gradient:
        "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "text-red-500",
    },
  ];
  
  const handleItemClick = (label: string) => {
    const item = menuItems.find((item) => item.label === label);
    if (item) {
      navigate(item.href);
      setIsMobileMenuOpen(false);
    }
  };
  
  const getActiveItem = () => {
    const currentPath = location.pathname;
    const item = menuItems.find((item) => item.href === currentPath);
    return item ? item.label : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Works", path: "/works" },
    { name: "Founders", path: "/founders" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong border-b border-border/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ENIGMOS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <MenuBar
              items={menuItems}
              activeItem={getActiveItem()}
              onItemClick={handleItemClick}
              className="bg-background/40 backdrop-blur-md"
            />
            <Link to="/collaborate">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-subtle">
                Let's Collaborate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/collaborate" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Let's Collaborate
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
