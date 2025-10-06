import { useState } from "react";
import { motion } from "motion/react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Calendar,
  Send,
  Clock,
  User,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScheduleVisit } from "./ScheduleVisit";

export function Contact() {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    interest: "",
    message: "",
  });
  
  const openScheduleModal = () => {
    setIsScheduleModalOpen(true);
  };

  const closeScheduleModal = () => {
    setIsScheduleModalOpen(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 87654 32109",
      action: "tel:+919876543210",
      color: "text-[var(--vine-green)]",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "Chat with us instantly",
      secondary: "Quick responses guaranteed",
      action: "https://wa.me/919876543210",
      color: "text-[var(--warm-gold)]",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@cityvision.in",
      secondary: "sales@cityvision.in",
      action: "mailto:info@cityvision.in",
      color: "text-[var(--navy)]",
    },
    {
      icon: MapPin,
      title: "Visit Office",
      primary: "Nashik Head Office",
      secondary: "Mon-Sat: 9 AM - 7 PM",
      action: "#",
      color: "text-[var(--vine-green)]",
    },
  ];

  const officeLocations = [
    {
      name: "Nashik Head Office",
      address:
        "Shop No. 15, Landmark Complex, College Road, Nashik - 422005",
      timings: "Mon-Sat: 9:00 AM - 7:00 PM",
      phone: "+91 98765 43210",
    },
    {
      name: "Igatpuri Branch",
      address:
        "Near Railway Station, Igatpuri, Nashik - 422403",
      timings: "Mon-Sat: 10:00 AM - 6:00 PM",
      phone: "+91 87654 32109",
    },
  ];

  const quickActions = [
    {
      title: "Schedule Site Visit",
      description: "Book a free guided tour of our projects",
      icon: Calendar,
      action: "Schedule Visit",
      color: "bg-[var(--vine-green)]",
      onClick: openScheduleModal,
    },
    {
      title: "Download Brochure",
      description: "Get detailed project information",
      icon: Send,
      action: "Download Now",
      color: "bg-[var(--warm-gold)]",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[var(--light-gray)] to-white"
    >
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
            Get in{" "}
            <span className="text-[var(--vine-green)]">
              Touch
            </span>
          </h2>
          <p className="text-[var(--medium-gray)] text-lg max-w-3xl mx-auto">
            Ready to start your investment journey? Our expert
            team is here to guide you through every step of the
            process.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
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
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-[var(--navy)] mb-2">
                      {action.title}
                    </h3>
                    <p className="text-[var(--medium-gray)] text-sm mb-4">
                      {action.description}
                    </p>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={action.onClick}
                    >
                      {action.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <h3 className="text-2xl text-[var(--navy)]">
                  Send Us a Message
                </h3>
                <p className="text-[var(--medium-gray)]">
                  Fill out the form below and we'll get back to
                  you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[var(--navy)] mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[var(--navy)] mb-2">
                        Phone Number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[var(--navy)] mb-2">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--navy)] mb-2">
                      Interested In
                    </label>
                    <Input
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      placeholder="e.g., Ghoti Green Valley, Investment guidance"
                    />
                  </div>

                  <div>
                    <label className="block text-[var(--navy)] mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-[var(--vine-green)] hover:bg-[var(--vine-green)]/90"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>

                <div className="mt-6 p-4 bg-[var(--light-gray)] rounded-xl">
                  <div className="flex items-center text-[var(--vine-green)] mb-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Quick Response Guarantee</span>
                  </div>
                  <p className="text-[var(--medium-gray)] text-sm">
                    We respond to all inquiries within 2 hours
                    during business hours
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl text-[var(--navy)] mb-6">
                Contact Information
              </h3>
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
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
                            <h4 className="text-[var(--navy)] mb-1">
                              {info.title}
                            </h4>
                            <p className="text-[var(--vine-green)]">
                              {info.primary}
                            </p>
                            <p className="text-[var(--medium-gray)] text-sm">
                              {info.secondary}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Office Locations */}
            <div>
              <h4 className="text-xl text-[var(--navy)] mb-4">
                Our Offices
              </h4>
              <div className="space-y-4">
                {officeLocations.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 shadow-md">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h5 className="text-[var(--navy)]">
                            {office.name}
                          </h5>
                          <Badge className="bg-[var(--warm-gold)]/10 text-[var(--navy)]">
                            Open Now
                          </Badge>
                        </div>
                        <p className="text-[var(--medium-gray)] text-sm mb-2">
                          {office.address}
                        </p>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-[var(--vine-green)]">
                            {office.timings}
                          </span>
                          <span className="text-[var(--medium-gray)]">
                            {office.phone}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-[var(--navy)] to-[var(--vine-green)] rounded-lg flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="w-16 h-16 mx-auto mb-4 text-[var(--warm-gold)]" />
                      <h4 className="text-xl mb-2">
                        Find Us on Map
                      </h4>
                      <p className="opacity-90">
                        Interactive map coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* WhatsApp Float Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg text-white"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Schedule Visit Modal */}
      <ScheduleVisit isOpen={isScheduleModalOpen} onClose={closeScheduleModal} />
    </section>
  );
}