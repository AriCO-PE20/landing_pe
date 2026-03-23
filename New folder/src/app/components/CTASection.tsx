import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          className="mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Únete ahora y comienza tu crecimiento
        </motion.h2>

        <motion.p
          className="text-xl mb-10 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Da el primer paso hacia tu independencia financiera. Miles de agentes ya confían en 1xBet.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg flex items-center gap-3 shadow-xl group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-6 h-6" />
            <span>Reserva tu reunión</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            className="bg-blue-900 text-white px-8 py-4 rounded-lg flex items-center gap-3 shadow-xl group"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>Chatea con nosotros</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="mb-4 text-white">¿Por qué empezar hoy?</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              { title: 'Proceso rápido:', desc: 'Comienza en menos de 48 horas después de tu reunión inicial' },
              { title: 'Sin riesgos:', desc: 'No hay inversión inicial obligatoria ni costos ocultos' },
              { title: 'Soporte inmediato:', desc: 'Equipo dedicado disponible desde el primer día' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-sm text-gray-200">
                  <strong>{item.title}</strong> {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
