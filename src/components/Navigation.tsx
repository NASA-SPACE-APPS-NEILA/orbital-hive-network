import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Customers",
      items: ["Satellite Operators", "Space Agencies", "Startups", "Universities", "Defense"],
      path: "/customers"
    },
    {
      label: "Solutions",
      items: ["Recycling & Manufacturing", "In-Space Biomanufacturing (ISBM)"],
      path: "/solutions"
    },
    {
      label: "Missions",
      items: ["2026-2030 Roadmap", "2031-2040 Vision"],
      path: "/missions"
    },
    {
      label: "Investors",
      items: ["Market Opportunity", "Circular Economy Impact", "ROI Projections"],
      path: "/investors"
    },
    {
      label: "Global",
      items: ["NASA", "ESA", "ISRO", "JAXA"],
      path: "/global"
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morph border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-secondary/20 clip-hexagon flex items-center justify-center animate-hex-glow">
                <div className="w-8 h-8 bg-secondary clip-hexagon"></div>
              </div>
            </div>
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
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[200px]"
                    >
                      <div className="glass-morph rounded-lg p-2 shadow-xl">
                        {item.items.map((subItem, idx) => (
                          <div
                            key={idx}
                            className="px-4 py-2 text-sm text-foreground/80 hover:text-secondary hover:bg-secondary/10 rounded cursor-pointer transition-colors"
                          >
                            {subItem}
                          </div>
                        ))}
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
    </nav>
  );
};

export default Navigation;
