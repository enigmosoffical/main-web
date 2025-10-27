import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          animate={{
            textShadow: [
              "0 0 20px rgba(108, 99, 255, 0.5)",
              "0 0 40px rgba(108, 99, 255, 0.8)",
              "0 0 20px rgba(108, 99, 255, 0.5)",
            ],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ENIGMOS
        </motion.h1>
        <motion.div
          className="mt-4 h-1 w-48 mx-auto rounded-full bg-gradient-to-r from-primary to-secondary"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
