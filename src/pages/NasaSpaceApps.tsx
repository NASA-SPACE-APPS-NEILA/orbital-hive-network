import Navigation from "@/components/Navigation";
import Galaxy from "@/components/Galaxy";
import { motion } from "framer-motion";
import { Download, Maximize2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const NasaSpaceApps = () => {
  const googleSlidesUrl = "https://docs.google.com/presentation/d/1ePLRQCM5eqopvZgoVH5s7rfAMRak8ScU/edit?usp=share_link&ouid=106266782570871511142&rtpof=true&sd=true";
  
  // Convert to embed URL for iframe
  const embedUrl = "https://docs.google.com/presentation/d/1ePLRQCM5eqopvZgoVH5s7rfAMRak8ScU/embed?start=false&loop=false&delayms=3000";
  
  // Download URL (export as PDF)
  const downloadUrl = "https://docs.google.com/presentation/d/1ePLRQCM5eqopvZgoVH5s7rfAMRak8ScU/export/pptx";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Galaxy Background - matching landing page config */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Galaxy
          mouseInteraction={true}
          mouseRepulsion={false}
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={180}
          transparent={true}
        />
      </div>

      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-5xl text-center">
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
              Our Presentation
            </motion.p>

            {/* Presentation Tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-morph rounded-2xl p-6 md:p-8"
            >
              {/* Iframe Preview */}
              <div className="relative rounded-xl overflow-hidden mb-6 aspect-video border border-foreground/10">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title="NASA Space Apps Challenge Presentation"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="group border-secondary/50 text-foreground hover:bg-secondary/10 hover:border-secondary"
                >
                  <a href={googleSlidesUrl} target="_blank" rel="noopener noreferrer">
                    <Maximize2 className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    View Full Presentation
                  </a>
                </Button>
                
                <Button
                  asChild
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                >
                  <a href={downloadUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download PPT
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Video Tile */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-morph rounded-2xl p-6 md:p-8 mt-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Project Video</h2>
              
              {/* Video Placeholder */}
              <div className="relative rounded-xl overflow-hidden aspect-video border border-foreground/10 bg-foreground/5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-foreground/50">Video coming soon</p>
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
