import { motion } from "motion/react";
import { ArrowRight, Play, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1594628871799-08c8fbc8d8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNoaWslMjB2aW5leWFyZCUyMGFlcmlhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTkxMzQ3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
        >
          <source
            src="https://player.vimeo.com/external/452169385.hd.mp4?s=10f6d5a0e5e0e5b0c4a4b4f4e4c4a4b4&profile_id=175"
            type="video/mp4"
          />
        </video>

        {/* Fallback for mobile or when video fails */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1594628871799-08c8fbc8d8c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXNoaWslMjB2aW5leWFyZCUyMGFlcmlhbCUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTkxMzQ3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Nashik Vineyard Landscape"
          className="w-full h-full object-cover md:hidden"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <div className="w-2 h-2 bg-[var(--vine-green)] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm">
                RERA & NMRDA Approved Projects
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight"
              >
                Invest in
                <span className="block text-[var(--warm-gold)]">
                  Nashik's Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg lg:text-xl text-white/80 max-w-2xl"
              >
                As one of India's fastest-emerging cities, Nashik is on the cusp of transformation—with Ring Roads, Metro Neo, industrial corridors, and Kumbh Mela infrastructure driving rapid growth.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 lg:gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-[var(--warm-gold)]">
                  15+
                </div>
                <div className="text-white/70 text-sm">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-[var(--warm-gold)]">
                  1000+
                </div>
                <div className="text-white/70 text-sm">
                  Happy Investors
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl text-[var(--warm-gold)]">
                  5
                </div>
                <div className="text-white/70 text-sm">
                  Prime Locations
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-[var(--warm-gold)] hover:bg-[var(--warm-gold)]/90 text-[var(--navy)] group"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explore Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/30 hover:bg-white hover:text-[var(--navy)] backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Site Visit
              </Button>
            </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}