import { motion } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram, Linkedin, Download, FileText, Shield, Award } from 'lucide-react';
import { Badge } from './ui/badge';

export function Footer() {
  const footerLinks = {
    projects: [
      { name: 'Ghoti Green Valley', href: '#' },
      { name: 'Makhmalabad Heights', href: '#' },
      { name: 'Gonde Industrial Park', href: '#' },
      { name: 'Ozar Township', href: '#' },
      { name: 'Talwade Plots', href: '#' }
    ],
    services: [
      { name: 'Investment Guidance', href: '#' },
      { name: 'Site Visits', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Legal Support', href: '#' },
    ],
    resources: [
      { name: 'Investment Guide', href: '#' },
      { name: 'RERA Documents', href: '#' },
      { name: 'Market Reports', href: '#' },
      { name: 'Blog & News', href: '#' },
      { name: 'FAQ', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', color: 'hover:text-blue-700' }
  ];

  const certifications = [
    { name: 'RERA Registered', icon: Shield },
    { name: 'NMRDA Approved', icon: Award },
    { name: 'CREDAI Member', icon: FileText }
  ];

  const quickContacts = [
    { icon: Phone, text: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: Mail, text: 'info@cityvision.in', href: 'mailto:info@cityvision.in' },
    { icon: MessageCircle, text: 'WhatsApp Us', href: 'https://wa.me/919876543210' }
  ];

  return (
    <footer className="bg-gradient-to-br from-[var(--navy)] via-[var(--navy)] to-[var(--vine-green)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--warm-gold)] to-yellow-500 rounded-xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-[var(--navy)]" />
              </div>
              <div>
                <h2 className="text-xl text-white">City Vision</h2>
                <p className="text-white/70 text-sm">Real Estate Excellence</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Your trusted partner for premium real estate investments in Nashik and Igatpuri. 
              With 15+ years of experience and RERA-approved projects, we deliver transparency, 
              quality, and exceptional returns.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3">
              {quickContacts.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-white/80 hover:text-[var(--warm-gold)] transition-colors group"
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{contact.text}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2 }}
                    className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors ${social.color}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--warm-gold)] mb-6">Our Projects</h3>
            <ul className="space-y-3">
              {footerLinks.projects.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--warm-gold)] mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--warm-gold)] mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 p-4 bg-white/10 rounded-xl"
            >
              <h4 className="text-white mb-2">Free Investment Guide</h4>
              <p className="text-white/70 text-sm mb-3">
                Download our comprehensive guide to investing in Nashik real estate
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-[var(--warm-gold)] hover:text-yellow-300 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">Download PDF</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <h4 className="text-[var(--warm-gold)] mb-4 text-center">Certifications & Memberships</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {cert.name}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="border-t border-white/20 bg-black/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-white/70 text-sm text-center lg:text-left">
              <p>© 2025 City Vision Real Estate. All rights reserved.</p>
              <p className="mt-1">
                RERA Registration No: MP/06/RERA/2023/1234 | 
                Built with transparency and trust
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}