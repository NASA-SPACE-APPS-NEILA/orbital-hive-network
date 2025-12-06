import Navigation from "@/components/Navigation";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";

const NasaSpaceApps = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Galaxy Background */}
      <div className="fixed inset-0 z-0">
        <Galaxy transparent={false} />
      </div>

      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              NASA <span className="text-secondary">Space Apps</span> Challenge
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-foreground/70 mb-12"
            >
              Coming Soon
            </motion.p>

            {/* Skeleton Placeholder */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Skeleton blocks */}
              <div className="glass-morph rounded-2xl p-8 animate-pulse">
                <div className="h-6 bg-foreground/10 rounded w-3/4 mx-auto mb-4"></div>
                <div className="h-4 bg-foreground/10 rounded w-full mb-2"></div>
                <div className="h-4 bg-foreground/10 rounded w-5/6 mx-auto mb-2"></div>
                <div className="h-4 bg-foreground/10 rounded w-4/6 mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-morph rounded-2xl p-6 animate-pulse">
                  <div className="h-5 bg-foreground/10 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-foreground/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
                </div>
                <div className="glass-morph rounded-2xl p-6 animate-pulse">
                  <div className="h-5 bg-foreground/10 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-foreground/10 rounded w-full mb-2"></div>
                  <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
                </div>
              </div>

              <div className="glass-morph rounded-2xl p-8 animate-pulse">
                <div className="h-6 bg-foreground/10 rounded w-1/3 mx-auto mb-6"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-foreground/10 rounded"></div>
                  <div className="h-20 bg-foreground/10 rounded"></div>
                  <div className="h-20 bg-foreground/10 rounded"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NasaSpaceApps;
