import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function WelcomeOverlay() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('hasVisited', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="bg-background rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center space-y-6 border border-white/10"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-tr from-pink-300 to-cyan-300 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/20">
              <span className="text-4xl">✨</span>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
                Zen Scroll
              </h1>
              <p className="text-muted-foreground">
                The dopamine of scrolling without the toxicity. No posts, no news, just pure satisfaction.
              </p>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground/80">
              <div className="flex items-center gap-3 bg-secondary/50 p-3 rounded-xl">
                <span className="text-xl">👆</span>
                <span>Scroll to soothe your mind</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/50 p-3 rounded-xl">
                <span className="text-xl">⬇️</span>
                <span>Pull down to refresh the vibe</span>
              </div>
            </div>

            <Button 
              onClick={handleDismiss}
              className="w-full rounded-full h-12 text-lg font-medium bg-gradient-to-r from-pink-400 to-cyan-400 hover:opacity-90 transition-opacity border-none text-white shadow-lg shadow-cyan-500/20"
            >
              Start Scrolling
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
