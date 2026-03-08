import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <AuroraBackground className="!h-auto py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeInOut' }}
        className="relative flex flex-col items-center justify-center text-center px-6 z-10"
      >
        <p className="text-sm font-medium tracking-widest text-slate-500 uppercase mb-4">
          Ready to grow?
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6 max-w-3xl">
          Ready to Build Your AI Growth System?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 dark:text-neutral-200 max-w-xl mb-10">
          Book a free 30-minute strategy call and discover how AI-powered marketing can scale your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            data-cal-link="pixonx-ai-rr9on1/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Book Strategy Call
          </button>
          <button
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-slate-300 text-slate-900 dark:text-white px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform"
          >
            View Our Work
          </button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default CTASection;
