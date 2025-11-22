import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  const socials = [
    { icon: Github, label: 'GitHub' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              GLASS
            </div>
            <p className="text-white/50 mb-6 max-w-md">
              Crafting beautiful digital experiences with modern glassmorphic design and seamless interactions.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Updates', 'Beta'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2025 Norbert Design. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
