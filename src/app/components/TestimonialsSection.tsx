import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Carlos Mendoza',
      location: 'Lima, Perú',
      role: 'Agente 1xBet desde 2023',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
      text: 'Empecé sin conocimientos previos y en 6 meses ya tengo una red sólida de clientes. El soporte del equipo es increíble, siempre están disponibles para resolver cualquier duda. Los ingresos superaron mis expectativas.',
      rating: 5
    },
    {
      name: 'María Rodríguez',
      location: 'Bogota, Colombia',
      role: 'Agente 1xBet desde 2022',
      photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
      text: 'La flexibilidad de horarios me permite combinar esto con mis otras actividades. El material de marketing que proporcionan es de primera calidad y las comisiones son muy competitivas. Totalmente recomendado.',
      rating: 5
    },
    {
      name: 'Jorge Fernández',
      location: 'Buenos Aires, Argentina',
      role: 'Agente 1xBet desde 2024',
      text: 'Lo mejor es la capacitación inicial y continua. Te enseñan todo desde cero. Ahora manejo mi propio negocio y cada mes veo crecimiento. La plataforma es muy intuitiva tanto para mí como para mis clientes.',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Ellos ya crecieron con nosotros</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-700">
            Historias reales de agentes que transformaron su futuro con 1xBet
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
              >
                <div className="flex items-center mb-4">
                  <motion.img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <h4 className="mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-blue-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.5 + i * 0.05 }}
                    >
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-gray-600 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="bg-white p-8 rounded-xl shadow-lg"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonials[currentIndex].photo}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="mb-1">{testimonials[currentIndex].name}</h4>
                      <p className="text-sm text-gray-500">{testimonials[currentIndex].location}</p>
                      <p className="text-xs text-blue-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </motion.button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-gray-700">
            <strong>+500 agentes</strong> activos en toda Latino America ya están creciendo con nosotros
          </p>
        </motion.div>
      </div>
    </section>
  );
}
