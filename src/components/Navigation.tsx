import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "@/assets/orbital-hive-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const navItems = [
    {
      label: "Customers",
      items: [
        { label: "Satellite Operators" },
        { label: "Space Agencies" },
        { label: "Startups" },
        { label: "Universities" },
        { label: "Defense" },
      ],
      path: "/customers",
    },
    {
      label: "Solutions",
      items: [
        {
          label: "Recycling & Manufacturing",
          path: "/solutions/recycling-manufacturing",
        },
        {
          label: "In-Space Biomanufacturing (ISBM)",
          path: "/solutions/biomanufacturing",
        },
      ],
      path: "/solutions",
    },
    {
      label: "Missions",
      items: [],
      path: "/missions",
    },
    {
      label: "Investors",
      items: [],
      path: "/investors",
    },
    {
      label: "Global",
      items: [],
      path: "/global",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4">
      <motion.nav
        animate={{
          width: isScrolled ? "90%" : "100%",
          marginTop: isScrolled ? "1rem" : "0",
          borderRadius: isScrolled ? "50px" : "20px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className="mx-auto glass-morph border-b border-border/20"
        style={{
          boxShadow: isScrolled ? "0 10px 40px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Orbital Hive Logo" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className="text-2xl font-bold text-foreground tracking-tight">
              Orbital<span className="text-secondary">Hive</span>
            </span>
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 text-foreground/80 hover:text-secondary transition-colors cursor-pointer"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>

                  <AnimatePresence>
                    {activeDropdown === item.label && item.items.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px]"
                      >
                        <div className="glass-morph rounded-lg p-2 shadow-xl">
                          {item.items.map((subItem, idx) =>
                            subItem.path ? (
                              <Link
                                key={idx}
                                to={subItem.path}
                                className="block px-4 py-2 text-sm text-foreground/80 hover:text-secondary hover:bg-secondary/10 rounded cursor-pointer transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {subItem.label}
                              </Link>
                            ) : (
                              <div
                                key={idx}
                                className="px-4 py-2 text-sm text-foreground/80 hover:text-secondary hover:bg-secondary/10 rounded cursor-pointer transition-colors"
                              >
                                {subItem.label}
                              </div>
                            )
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="flex items-center gap-4">
                <button className="text-sm text-foreground/80 hover:text-secondary transition-colors">
                  ENG
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 text-foreground/80 hover:text-secondary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
