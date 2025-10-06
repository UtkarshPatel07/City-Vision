import { motion } from "motion/react";
import {
  Users,
  Award,
  CheckCircle,
  Building,
  Clock,
  Shield,
  Target,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const companyValues = [
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Complete documentation and clear processes for every transaction",
    },
    {
      icon: CheckCircle,
      title: "Trust",
      description:
        "RERA registered projects with verified legal clearances",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "15+ years of delivering quality real estate solutions",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Dedicated support throughout your investment journey",
    },
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years Experience",
      description: "In real estate development",
    },
    {
      number: "1000+",
      label: "Happy Investors",
      description: "Across all projects",
    },
    {
      number: "5",
      label: "Prime Locations",
      description: "In Nashik & Igatpuri",
    },
    {
      number: "100%",
      label: "RERA Compliance",
      description: "All projects registered",
    },
  ];

  const whyCityVision = [
    {
      icon: Award,
      title: "Proven Developer Brand",
      description:
        "Established reputation in Nashik's real estate market",
    },
    {
      icon: Building,
      title: "Exclusive Land Bank",
      description:
        "Ready-to-launch projects with clear titles and regulatory approvals",
    },
    {
      icon: Target,
      title: "Investor-Centric Approach",
      description:
        "Tailored offerings for individuals, families, and institutions looking for secure and appreciating land assets",
    },
  ];



  const teamMembers = [
  ];

  const certifications = [
    "RERA Registration Certificate",
    "NMRDA Approval Letters",
    "ISO 9001:2015 Certified",
    "Member of CREDAI",
    "Environmental Clearance",
    "Fire Safety Certificates",
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About{" "}
            <span className="text-[var(--vine-green)]">
              City Vision
            </span>
          </h2>
          <p className="text-[var(--medium-gray)] text-lg max-w-3xl mx-auto">
            Building trust through transparency, delivering
            quality through experience. Your premier partner for
            real estate investment in Nashik's growth story.
          </p>
        </motion.div>

        {/* Why City Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-[var(--navy)]">
                Why City Vision
              </h3>
              <div className="space-y-6">
                {whyCityVision.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[var(--vine-green)] to-[var(--warm-gold)] rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[var(--navy)] mb-2">
                          {item.title}
                        </h4>
                        <p className="text-[var(--medium-gray)] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl text-[var(--navy)]">
                Our Mission
              </h4>
              <p className="text-[var(--medium-gray)] leading-relaxed">
                To leverage our developer expertise and land
                assets to deliver profitable, transparent, and
                future-ready land investments—whether you want
                to buy a plot, invest for appreciation, or join
                us in a joint venture.
              </p>
              <div className="p-4 bg-gradient-to-r from-[var(--vine-green)]/10 to-[var(--warm-gold)]/10 rounded-xl border-l-4 border-[var(--vine-green)]">
                <p className="text-[var(--navy)] italic">
                  With City Vision, you're not just accessing
                  land—you're partnering with a proven brand in
                  Nashik's growth story.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-[var(--light-gray)] rounded-xl"
                >
                  <div className="text-2xl text-[var(--vine-green)] mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-[var(--navy)] text-sm mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-[var(--medium-gray)] text-xs">
                    {achievement.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758518726324-62bef7c815b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3NTkxMzQ3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="City Vision Team"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h4>Our Dedicated Team</h4>
                <p className="text-sm opacity-90">
                  Experienced professionals committed to your
                  success
                </p>
              </div>
            </div>

            {/* Company Values */}
            <div className="grid grid-cols-2 gap-4">
              {companyValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[var(--vine-green)] to-[var(--warm-gold)] rounded-xl flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h5 className="text-[var(--navy)] mb-2">
                          {value.title}
                        </h5>
                        <p className="text-[var(--medium-gray)] text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>



        {/* Leadership Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[var(--navy)] to-[var(--vine-green)] rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-[var(--navy)] mb-2">
                      {member.name}
                    </h4>
                    <p className="text-[var(--vine-green)] text-sm mb-2">
                      {member.position}
                    </p>
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      {member.experience}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications & Approvals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-[var(--light-gray)] to-white rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl text-[var(--navy)] mb-6">
            Certifications & Approvals
          </h3>
          <p className="text-[var(--medium-gray)] mb-8 max-w-2xl mx-auto">
            Our commitment to legal compliance and quality is
            reflected in our comprehensive certifications
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white p-4 rounded-xl border flex items-center justify-center text-center h-full">
                  <div>
                    <CheckCircle className="w-6 h-6 text-[var(--vine-green)] mx-auto mb-2" />
                    <p className="text-[var(--navy)] text-sm">
                      {cert}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-[var(--navy)] to-[var(--vine-green)] rounded-xl text-white"
          >
            <h4 className="text-xl mb-2">
              Document Transparency
            </h4>
            <p className="mb-4 opacity-90">
              All our project documents, approvals, and
              certificates are available for verification
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[var(--warm-gold)] text-[var(--navy)] rounded-lg hover:bg-[var(--warm-gold)]/90 transition-colors"
            >
              View All Documents
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}