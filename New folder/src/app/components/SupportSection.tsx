import { GraduationCap, Megaphone, Users, MessageSquare } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function SupportSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const supports = [
    {
      icon: GraduationCap,
      title: 'Capacitación y tutoriales completos',
      description: 'Acceso a nuestra plataforma de formación con tutoriales en video, guías paso a paso y certificaciones para dominar todos los aspectos del negocio.'
    },
    {
      icon: Megaphone,
      title: 'Material de marketing y promoción',
      description: 'Banners, plantillas de redes sociales, contenido pre-diseñado y estrategias probadas para atraer y retener clientes.'
    },
    {
      icon: Users,
      title: 'Asesoramiento personalizado',
      description: 'Conexión directa con un asesor dedicado que conoce tu mercado local y te ayudará a optimizar tu estrategia de crecimiento.'
    },
    {
      icon: MessageSquare,
      title: 'Soporte constante 24/7',
      description: 'Chat en vivo, WhatsApp, email y reuniones programadas. Siempre tendrás a alguien disponible para resolver tus dudas.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full filter blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
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
          <h2 className="mb-4">Apoyo en cada paso de tu camino</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            No estás solo en este viaje. Te proporcionamos todas las herramientas y el apoyo necesario para que tengas éxito desde el primer día.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {supports.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <motion.div
                  className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7 text-blue-600" />
                </motion.div>
                <h3 className="mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
