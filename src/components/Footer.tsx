'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-secondary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo />
              <span className="text-primary font-bold text-xl">Aurea Cinnamum</span>
            </div>
            <p className="text-accent mb-6 max-w-md">
              Delivering premium quality cinnamon oil worldwide, crafted with expertise and care for your aromatic needs.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Links */}
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Products', 'About Us', 'Export', 'Contact'].map((item) => (
                <motion.li key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween" }}
                >
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} 
                     className="text-accent hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-accent">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                <a href="mailto:info@aureacinnamum.com" className="hover:text-primary transition-colors">
                  info@aureacinnamum.com
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                123 Spice Garden Street,
                <br />
                Colombo, Sri Lanka
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-accent text-sm">
              © {currentYear} Aurea Cinnamum. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <motion.a
                href="#privacy"
                className="text-accent hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#terms"
                className="text-accent hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
                transition={{ type: "tween" }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 