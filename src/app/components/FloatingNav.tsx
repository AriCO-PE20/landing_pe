import { motion, useScroll, useTransform } from 'motion/react';
import { Calendar, MessageCircle } from 'lucide-react';

export function FloatingNav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [100, 200], [0, 1]);
  const y = useTransform(scrollY, [100, 200], [-100, 0]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      style={{ opacity, y }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 px-6 py-4"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">1x</span>
              </div>
              <span className="text-lg text-gray-900 hidden sm:block">1xBet Perú</span>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-4 h-4" />
                <span className="hidden sm:inline">Reservar</span>
              </motion.button>

              <motion.button
                className="bg-white/50 hover:bg-white/80 text-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm border border-blue-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Chat</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
