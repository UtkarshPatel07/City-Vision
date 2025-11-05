import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import cityVisionLogo from "../assets/city-vision-logo.jpg";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", type: "route" },
    { name: "Projects", href: "#projects", type: "hash" },
    { name: "About", href: "/about", type: "route" },
    { name: "Why Nashik", href: "#why-nashik", type: "hash" },
    { name: "Contact", href: "#contact", type: "hash" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#2c3e50]/95 backdrop-blur-md shadow-lg"
          : "bg-[#2c3e50]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={cityVisionLogo} 
                alt="City Vision Logo" 
                className="h-12 w-auto object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link key={item.name} to={item.href}>
                  <motion.span
                    className="transition-colors hover:text-[#7dd3c0] cursor-pointer text-white"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="transition-colors hover:text-[#7dd3c0] text-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </div>



          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden transition-colors text-white"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={
          isOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        className="lg:hidden overflow-hidden bg-white border-t"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            item.type === "route" ? (
              <Link
                key={item.name}
                to={item.href}
                className="block text-[var(--navy)] hover:text-[var(--vine-green)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block text-[var(--navy)] hover:text-[var(--vine-green)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}