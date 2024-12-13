'use client'

import { motion } from 'framer-motion'

export default function Logo() {
  return (
    <motion.div
      className="w-12 h-12 relative"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Outer circle with gradient */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-tertiary to-accent"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner content */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full p-2"
      >
        {/* Background circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
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
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Leaf elements */}
        <motion.path
          d="M60,35 C70,25 40,25 50,35"
          stroke="#B1C29E"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        />
        <motion.path
          d="M35,60 C25,70 25,40 35,50"
          stroke="#B1C29E"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        
        {/* Oil drops */}
        <motion.circle
          cx="65"
          cy="65"
          r="3"
          fill="#659287"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
        <motion.circle
          cx="35"
          cy="35"
          r="3"
          fill="#659287"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.3, delay: 1.7 }}
        />
      </svg>
    </motion.div>
  )
} 