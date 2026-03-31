import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';

export function FloatingNav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 200], [0, 1]);
  const y = useTransform(scrollY, [100, 200], [-50, 0]);

  return (
    <motion.div
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
      style={{ opacity, y }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 px-6 py-3 flex items-center justify-between"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Título minimalista */}
          <span className="text-white text-lg font-semibold">1xBet Latino America</span>

          {/* Botones con enlaces */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://calendly.com/arianliendro2005/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium shadow-md shadow-blue-900/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Reservar</span>
            </motion.a>

            <motion.a
              href="https://t.me/UsAri20"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium shadow-md shadow-blue-900/30 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Chat</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
