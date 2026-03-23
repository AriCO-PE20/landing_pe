import { TrendingUp, Gift, Clock, Users } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Crecimiento profesional y económico',
      description: 'Escala tu negocio sin límites. Sistema de comisiones competitivo y bonos por desempeño que premian tu dedicación y resultados.'
    },
    {
      icon: Gift,
      title: 'Acceso a promociones exclusivas',
      description: 'Bonos especiales para tus clientes, campañas estacionales y ofertas exclusivas que solo los agentes 1xBet pueden ofrecer.'
    },
    {
      icon: Clock,
      title: 'Flexibilidad y autonomía',
      description: 'Trabaja a tu ritmo, desde donde quieras. Tú decides cómo gestionar tu tiempo y hacer crecer tu red de clientes.'
    },
    {
      icon: Users,
      title: 'Red de apoyo completa',
      description: 'Comunidad activa de agentes exitosos, asesoramiento personalizado y recursos compartidos para impulsar tu éxito.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-2 rounded-full text-sm mb-4"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
            Oportunidades disponibles ahora
          </motion.div>
          <h2 className="mb-4 text-white">Ventajas de unirte como agente</h2>
          <motion.div
            className="w-20 h-1 bg-blue-400 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Ser agente 1xBet significa formar parte de una red global con beneficios incomparables
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.3)"
                }}
              >
                <motion.div
                  className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-7 h-7 text-blue-400" />
                </motion.div>
                <h3 className="mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100%', label: 'Soporte garantizado' },
              { value: '24/7', label: 'Disponibilidad' },
              { value: '∞', label: 'Potencial de ingresos' },
              { value: '1000+', label: 'Agentes activos' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="text-4xl text-blue-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
