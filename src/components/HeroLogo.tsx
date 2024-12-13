'use client'

import { motion } from 'framer-motion'

export default function HeroLogo() {
  return (
    <motion.div
      className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative mx-auto"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Outer decorative rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-primary/30"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full border-4 border-tertiary/30"
        animate={{ 
          scale: [1.1, 1, 1.1],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Main logo content */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full p-4"
      >
        {/* Background circle with gradient */}
        <defs>
          <radialGradient id="logoGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE6A9" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#DEAA79" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="url(#logoGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Cinnamon stick */}
        <motion.path
          d="M35,35 C45,45 55,55 65,65"
          stroke="#DEAA79"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        
        {/* Animated leaf elements */}
        <motion.g
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <motion.path
            d="M60,35 C70,25 40,25 50,35"
            stroke="#B1C29E"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />
        </motion.g>
        <motion.g
          initial={{ rotate: 10 }}
          animate={{ rotate: -10 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
          <motion.path
            d="M35,60 C25,70 25,40 35,50"
            stroke="#B1C29E"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />
        </motion.g>
        
        {/* Animated oil drops */}
        <motion.circle
          cx="65"
          cy="65"
          r="3"
          fill="#659287"
          initial={{ scale: 0, y: -10 }}
          animate={{ 
            scale: [0, 1.2, 1],
            y: [0, 10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="35"
          cy="35"
          r="3"
          fill="#659287"
          initial={{ scale: 0, y: 10 }}
          animate={{ 
            scale: [0, 1.2, 1],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </svg>
    </motion.div>
  )
} 