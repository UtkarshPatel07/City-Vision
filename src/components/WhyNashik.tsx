import { motion } from 'motion/react';
import { TrendingUp, MapPin, Plane, Factory, GraduationCap, Wine, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhyNashik() {
  const advantages = [
    {
      icon: TrendingUp,
      title: 'Smart City Initiative',
      description: 'Nashik is part of India\'s Smart Cities Mission with ₹2,000+ crore investment in infrastructure',
      stats: '₹2,000 Cr Investment',
      color: 'text-[var(--vine-green)]'
    },
    {
      icon: MapPin,
      title: 'Samruddhi Expressway',
      description: 'Direct connectivity to Mumbai in 2.5 hours, revolutionizing trade and commerce',
      stats: '2.5 hrs to Mumbai',
      color: 'text-[var(--warm-gold)]'
    },
    {
      icon: Plane,
      title: 'Aviation Hub',
      description: 'International airport with growing cargo operations and passenger traffic',
      stats: '50+ Daily Flights',
      color: 'text-[var(--navy)]'
    },
    {
      icon: Factory,
      title: 'Industrial Growth',
      description: 'Major pharmaceutical and automotive manufacturing hub with expanding MIDC areas',
      stats: '200+ Industries',
      color: 'text-[var(--vine-green)]'
    },
    {
      icon: Wine,
      title: 'Wine Tourism Capital',
      description: 'India\'s largest wine-producing region attracting premium tourism and hospitality',
      stats: '50+ Wineries',
      color: 'text-[var(--warm-gold)]'
    },
    {
      icon: GraduationCap,
      title: 'Education Center',
      description: 'Home to prestigious institutions creating skilled workforce and research opportunities',
      stats: '25+ Colleges',
      color: 'text-[var(--navy)]'
    }
  ];

  const growthTimeline = [
    {
      year: '2019',
      event: 'Smart City Selection',
      impact: 'Infrastructure development begins'
    },
    {
      year: '2022',
      event: 'Samruddhi Expressway',
      impact: 'Mumbai connectivity enhanced'
    },
    {
      year: '2024',
      event: 'MIDC Expansion',
      impact: 'Industrial growth accelerates'
    },
    {
      year: '2025',
      event: 'Metro Phase 1',
      impact: 'Urban transport revolution'
    },
    {
      year: '2026',
      event: 'IT Park Development',
      impact: 'Tech hub establishment'
    }
  ];

  const investmentMetrics = [
    { label: 'Land Appreciation', value: '25-35%', trend: 'yearly' },
    { label: 'Infrastructure Projects', value: '₹15,000 Cr', trend: 'ongoing' },
    { label: 'Population Growth', value: '8.2%', trend: 'CAGR' },
    { label: 'Industrial Output', value: '₹45,000 Cr', trend: 'annually' }
  ];

  return (
    <section id="why-nashik" className="py-20 bg-gradient-to-b from-[var(--light-gray)] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-[var(--navy)] mb-6">
            Why <span className="text-[var(--vine-green)]">Nashik</span>, Why <span className="text-[var(--warm-gold)]">Now</span>?
          </h2>
          <p className="text-[var(--medium-gray)] text-lg max-w-4xl mx-auto">
            As one of India's fastest-emerging cities, Nashik is on the cusp of transformation—with Ring Roads, Metro Neo, industrial corridors, and Kumbh Mela infrastructure driving rapid growth. Our land bank sits at the heart of this opportunity.
          </p>
        </motion.div>

        {/* Investment Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {investmentMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border"
            >
              <div className="text-2xl lg:text-3xl text-[var(--vine-green)] mb-2">{metric.value}</div>
              <div className="text-[var(--navy)] mb-1">{metric.label}</div>
              <Badge variant="secondary" className="text-xs">{metric.trend}</Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Advantages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl text-[var(--navy)] mb-8">Strategic Advantages</h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <Card className="border-l-4 border-l-[var(--vine-green)] hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-[var(--vine-green)] to-[var(--warm-gold)] rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-[var(--navy)]">{advantage.title}</h4>
                              <Badge className="bg-[var(--warm-gold)]/10 text-[var(--navy)]">
                                {advantage.stats}
                              </Badge>
                            </div>
                            <p className="text-[var(--medium-gray)] text-sm leading-relaxed">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Featured Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758633995074-56c9990fdb9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjaXR5JTIwaW5mcmFzdHJ1Y3R1cmUlMjBoaWdod2F5fGVufDF8fHx8MTc1OTEzNDcxOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nashik Infrastructure Development"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4>Samruddhi Expressway</h4>
                <p className="text-sm opacity-90">Connecting Nashik to Mumbai</p>
              </div>
            </div>

            {/* Growth Timeline */}
            <div>
              <h3 className="text-2xl text-[var(--navy)] mb-6">Development Timeline</h3>
              <div className="space-y-4">
                {growthTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-12 h-12 bg-[var(--vine-green)] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-[var(--navy)]">{item.event}</h5>
                          <p className="text-[var(--medium-gray)] text-sm">{item.impact}</p>
                        </div>
                        <Badge variant="outline" className="text-[var(--vine-green)] border-[var(--vine-green)]">
                          {item.year}
                        </Badge>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[var(--navy)] via-[var(--vine-green)] to-[var(--navy)] rounded-2xl p-8 lg:p-12 text-white"
        >
          <h3 className="text-2xl lg:text-3xl mb-4">
            The Time to Invest is <span className="text-[var(--warm-gold)]">Now</span>
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            With infrastructure projects worth ₹15,000+ crores underway, land values are set to appreciate significantly. 
            Secure your investment before prices escalate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[var(--warm-gold)] text-[var(--navy)] rounded-xl hover:bg-[var(--warm-gold)]/90 transition-colors flex items-center justify-center group"
            >
              Download Investment Report
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/30 text-white rounded-xl hover:bg-white hover:text-[var(--navy)] transition-colors"
            >
              Speak with Investment Advisor
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}