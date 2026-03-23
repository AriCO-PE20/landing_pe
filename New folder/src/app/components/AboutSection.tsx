import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-3xl text-blue-600 mb-2">
      {count}{suffix}
    </div>
  );
}

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"
        animate={{
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-30"
        animate={{
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Sobre 1xBet y nuestra red de agentes en Perú</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="Equipo colaborando"
              className="rounded-lg shadow-xl w-full h-auto"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <strong>1xBet</strong> es líder global en apuestas online, con presencia en más de 50 países
              y millones de usuarios activos diariamente. Ofrecemos una plataforma completa, segura y
              confiable que ha revolucionado la industria de las apuestas deportivas.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              En <strong>Perú</strong>, estamos construyendo una red de agentes comprometidos con el éxito
              mutuo. Como agente 1xBet, tendrás acceso a herramientas de última generación, capacitación
              continua y el respaldo de una marca reconocida mundialmente.
            </motion.p>

            <motion.p
              className="text-lg text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Nuestro enfoque está en el <strong>crecimiento sostenible</strong> de cada agente. No solo
              te damos acceso a la plataforma, te acompañamos con soporte personalizado, estrategias de
              marketing y una comunidad de agentes exitosos dispuestos a compartir su experiencia.
            </motion.p>

            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.2 }}>
                  <AnimatedCounter end={50} suffix="+" />
                  <div className="text-sm text-gray-600">Países</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.2 }}>
                  <AnimatedCounter end={10} suffix="M+" />
                  <div className="text-sm text-gray-600">Usuarios</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1, y: -5 }} transition={{ duration: 0.2 }}>
                  <AnimatedCounter end={15} suffix="+" />
                  <div className="text-sm text-gray-600">Años</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
