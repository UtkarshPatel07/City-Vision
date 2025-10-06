import { motion } from "motion/react";
import { Zap, Building, Handshake } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function WhatWeOffer() {
  const whatWeOffer = [
    {
      icon: Zap,
      title: "Direct Land Bank Access",
      description: "Invest with confidence in plots owned and developed by us",
    },
    {
      icon: Building,
      title: "Premium & Affordable Layouts",
      description: "From strategic parcels inside Nashik city to high-growth corridors in the NMRDA belt",
    },
    {
      icon: Handshake,
      title: "Joint Venture Partnerships",
      description: "Collaborations with investors and developers to unlock the full potential of prime land",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[var(--light-gray)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[var(--navy)] mb-6">
              What We <span className="text-[var(--vine-green)]">Offer</span>
            </h2>
            <p className="text-[var(--medium-gray)] text-lg max-w-3xl mx-auto">
              Our comprehensive range of services designed to meet every real estate investment need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whatWeOffer.map((offer, index) => {
              const IconComponent = offer.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--navy)] to-[var(--vine-green)] rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-[var(--navy)] mb-4">{offer.title}</h3>
                      <p className="text-[var(--medium-gray)] leading-relaxed">
                        {offer.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}