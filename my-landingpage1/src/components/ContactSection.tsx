import { motion } from 'motion/react';
import { GlassCard } from './GlassCard';
import { Mail, MapPin, Phone } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@glass.design' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
  ];

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-white/50">
            Let's create something amazing together
          </p>
        </div>

        <GlassCard>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-3">
                  <info.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-white/50 text-sm mb-1">{info.label}</div>
                  <div className="text-white">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/60 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/60 mb-2 text-sm">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/30 focus:outline-none focus:border-blue-400/50 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white shadow-xl shadow-blue-500/30"
            >
              Send Message
            </motion.button>
          </form>
        </GlassCard>
      </div>
    </section>
  );
}
