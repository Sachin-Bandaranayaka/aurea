'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '@/components/Navbar'
import HeroLogo from '@/components/HeroLogo'
import Footer from '@/components/Footer'
import Image from 'next/image'

const products = [
  {
    id: 1,
    title: "Pure Cinnamon Oil",
    description: "100% pure and natural cinnamon bark oil",
    image: "/images/products/cinnamon-1.png",
    alt: "Pure Cinnamon Oil Product Image"
  },
  {
    id: 2,
    title: "Cinnamon Leaf Oil",
    description: "Premium quality leaf-extracted oil",
    image: "/images/products/cinnamon-2.png",
    alt: "Cinnamon Leaf Oil Product Image"
  },
  {
    id: 3,
    title: "Organic Blend",
    description: "Certified organic cinnamon oil blend",
    image: "/images/products/cinnamon-3.png",
    alt: "Organic Cinnamon Oil Blend Product Image"
  }
]

const HomePage = () => {
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <main className="min-h-screen relative bg-white overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-white" />
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative text-center z-10 max-w-3xl mx-auto"
          >
            {/* Hero Logo */}
            <HeroLogo />

            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mt-8 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Aurea Cinnamum
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-accent mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Premium Cinnamon Oil, Crafted for Excellence
            </motion.p>
            <motion.button
              onClick={scrollToProducts}
              className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Discover Our Products</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
            </motion.button>

            {/* Decorative Elements */}
            <div className="relative h-16 w-full">
              {/* Left cinnamon stick */}
              <motion.div
                className="absolute left-1/4 top-0 w-12 h-1 bg-primary/30 rounded-full origin-left"
                animate={{ 
                  rotate: [-10, 10],
                  scale: [0.8, 1.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* Right cinnamon stick */}
              <motion.div
                className="absolute right-1/4 top-0 w-12 h-1 bg-primary/30 rounded-full origin-right"
                animate={{ 
                  rotate: [10, -10],
                  scale: [1.1, 0.8]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />
              
              {/* Oil drops */}
              <motion.div
                className="absolute left-1/3 top-0 w-2 h-2 rounded-full bg-accent/40"
                animate={{
                  y: [0, 20],
                  opacity: [0.4, 0],
                  scale: [1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 1
                }}
              />
              <motion.div
                className="absolute right-1/3 top-0 w-2 h-2 rounded-full bg-accent/40"
                animate={{
                  y: [0, 20],
                  opacity: [0.4, 0],
                  scale: [1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white relative">
          <motion.div
            style={{ scale }}
            className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-primary mb-4">Our Premium Products</h2>
              <p className="text-accent text-lg">Discover our range of high-quality cinnamon oils</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-secondary/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative h-48 rounded-xl mb-4 overflow-hidden bg-white"
                  >
                    {/* Image placeholder until image is uploaded */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-semibold text-primary mb-2"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {product.title}
                  </motion.h3>
                  <p className="text-accent">{product.description}</p>
                  <motion.div
                    className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-tertiary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.h2 
                  className="text-4xl font-bold text-primary mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Our Story
                </motion.h2>
                <motion.p 
                  className="text-accent text-lg mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  With generations of expertise in cinnamon cultivation and oil extraction,
                  we bring you the finest quality cinnamon oil from the heart of the spice gardens.
                </motion.p>
                <motion.p 
                  className="text-accent text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our commitment to quality and sustainability ensures that every drop of oil
                  meets the highest standards while preserving our natural resources.
                </motion.p>
              </div>

              {/* Image Container */}
              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/images/about/story.png"
                  alt="Cinnamon cultivation and oil extraction process"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
              <p className="text-accent text-lg">Let's discuss how we can work together</p>
            </motion.div>
            
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-primary/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomePage
