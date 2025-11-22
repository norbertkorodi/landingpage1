import { GlassCard } from './GlassCard';
import { ParallaxSection } from './ParallaxSection';
import { Zap, Shield, Layers, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensures smooth interactions and instant responses',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security keeps your data protected at all times',
    },
    {
      icon: Layers,
      title: 'Modern Stack',
      description: 'Built with cutting-edge technologies for maximum reliability',
    },
    {
      icon: Sparkles,
      title: 'Beautiful Design',
      description: 'Stunning glassmorphic interface that adapts to your needs',
    },
  ];

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background Image with Parallax */}
      <ParallaxSection speed={0.3} className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1652212976547-16d7e2841b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwYWJzdHJhY3QlMjBibHVlfGVufDF8fHx8MTc2Mjc4NDQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Abstract technology"
          className="w-full h-full object-cover"
        />
      </ParallaxSection>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Everything you need to build amazing experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} delay={index * 0.1}>
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-white/50">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
