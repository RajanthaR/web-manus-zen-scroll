import { motion, useTransform, useMotionValue, useAnimation } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ScrollFeed() {
  const { items, loadMore, refresh } = useInfiniteScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const pullY = useMotionValue(0);
  const controls = useAnimation();

  // Physics for pull-to-refresh
  const pullProgress = useTransform(pullY, [0, 100], [0, 1]);
  const rotate = useTransform(pullY, [0, 100], [0, 360]);
  
  const triggerHaptic = () => {
    if (navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      loadMore();
    }
  };

  const handlePanEnd = async (_: any, info: any) => {
    if (pullY.get() > 80) {
      triggerHaptic();
      setIsRefreshing(true);
      
      // Confetti burst on refresh
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.2 },
        colors: ['#FFB7B2', '#A0E7E5', '#E2F0CB'],
        disableForReducedMotion: true
      });

      await refresh();
      setIsRefreshing(false);
      triggerHaptic();
    }
    controls.start({ y: 0 });
    pullY.set(0);
  };

  return (
    <div 
      className="relative h-screen w-full overflow-hidden bg-background"
      ref={containerRef}
    >
      {/* Pull to Refresh Indicator */}
      <motion.div 
        className="absolute top-0 left-0 right-0 flex justify-center pt-8 z-10 pointer-events-none"
        style={{ y: pullY, opacity: pullProgress }}
      >
        <motion.div style={{ rotate }} className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg">
          <Loader2 className={`w-6 h-6 text-primary ${isRefreshing ? 'animate-spin' : ''}`} />
        </motion.div>
      </motion.div>

      {/* Scrollable Content */}
      <motion.div
        className="h-full overflow-y-scroll scrollbar-hide touch-pan-y"
        onScroll={handleScroll}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handlePanEnd}
        style={{ y: pullY }}
        animate={controls}
      >
        <div className="flex flex-col gap-4 p-4 pb-32">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full rounded-3xl shadow-sm overflow-hidden relative"
              style={{ 
                height: item.height,
                background: item.data,
                ...item.style
              }}
            >
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
            </motion.div>
          ))}
          
          <div className="h-20 flex items-center justify-center text-muted-foreground">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
