import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'CV', 'Features', 'About', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            GLASS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 10, y: 0 }}
                transition={{ duration: 2, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white">
              Get Started
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
