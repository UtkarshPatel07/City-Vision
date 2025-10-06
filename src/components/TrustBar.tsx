import { motion } from 'motion/react';
import { Shield, Award, FileCheck, Users, Star, CheckCircle } from 'lucide-react';
import { Badge } from './ui/badge';

export function TrustBar() {
  const trustElements = [
    {
      icon: Shield,
      title: 'RERA Registered',
      subtitle: 'All projects registered',
      color: 'text-[var(--vine-green)]'
    },
    {
      icon: FileCheck,
      title: 'NMRDA Approved',
      subtitle: 'Clear land titles',
      color: 'text-[var(--warm-gold)]'
    },
    {
      icon: Award,
      title: '15+ Years',
      subtitle: 'Industry experience',
      color: 'text-[var(--navy)]'
    },
    {
      icon: Users,
      title: '500+ Investors',
      subtitle: 'Trust our expertise',
      color: 'text-[var(--vine-green)]'
    },
    {
      icon: Star,
      title: '4.8/5 Rating',
      subtitle: 'Customer satisfaction',
      color: 'text-[var(--warm-gold)]'
    }
  ];

  const testimonialHighlights = [
    "Excellent land documentation process",
    "Transparent pricing with no hidden costs",
    "Great ROI potential in growing locations"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[var(--light-gray)] to-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 mb-12"
        >
          {trustElements.map((element, index) => {
            const IconComponent = element.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow">
                    <IconComponent className={`w-8 h-8 ${element.color}`} />
                  </div>
                </div>
                <h3 className="text-[var(--navy)] mb-1">{element.title}</h3>
                <p className="text-[var(--medium-gray)] text-sm">{element.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-[var(--navy)] mb-6">Why Investors Choose City Vision</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {testimonialHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary"
                  className="px-4 py-2 bg-white border border-[var(--vine-green)]/20 text-[var(--navy)] hover:bg-[var(--vine-green)]/5 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 mr-2 text-[var(--vine-green)]" />
                  {highlight}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[var(--medium-gray)] mb-4">
            Ready to invest in Nashik's growing real estate market?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[var(--warm-gold)] text-[var(--navy)] rounded-xl hover:bg-[var(--warm-gold)]/90 transition-colors"
            >
              Download Investment Guide
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-[var(--vine-green)] text-[var(--vine-green)] rounded-xl hover:bg-[var(--vine-green)] hover:text-white transition-colors"
            >
              View RERA Certificates
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}