import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { ParallaxSection } from './ParallaxSection';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ParallaxSection speed={0.2}>
            <GlassCard>
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Redefining Digital Experience
              </h2>
              <p className="text-white/60 mb-6 text-lg">
                Our platform combines cutting-edge design principles with powerful functionality to deliver experiences that are both beautiful and intuitive.
              </p>
              <p className="text-white/60 mb-8 text-lg">
                Every element is carefully crafted to create a seamless journey through your digital space, ensuring that form and function work in perfect harmony.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white shadow-xl shadow-blue-500/30"
              >
                Discover More
              </motion.button>
            </GlassCard>
          </ParallaxSection>

          <ParallaxSection speed={0.4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1619155631589-89db583e0bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBuaWdodHxlbnwxfHx8fDE3NjI3NTQwNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Modern architecture"
                  className="w-full h-[500px] object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: 0.3 }}
                className="absolute -left-4 top-1/4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-3xl mb-1 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  99.999%
                </div>
                <div className="text-white/60 text-sm">Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-3xl mb-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  100K+
                </div>
                <div className="text-white/60 text-sm">Users</div>
              </motion.div>
            </motion.div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}
