import { motion } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function FloatingElement({ 
  className = "", 
  children, 
  delay = 0, 
  duration = 4 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

export function PulsingElement({ 
  className = "", 
  children, 
  delay = 0 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 3,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}