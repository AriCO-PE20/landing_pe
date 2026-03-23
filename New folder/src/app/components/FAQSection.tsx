import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const faqs = [
    {
      question: '¿Cómo puedo empezar como agente?',
      answer: 'El proceso es simple: primero agenda una reunión con nuestro equipo o contáctanos por chat. Te explicaremos los requisitos, el proceso de registro y te daremos acceso a nuestra plataforma de capacitación. Una vez completada la formación inicial, estarás listo para comenzar a operar como agente oficial de 1xBet.'
    },
    {
      question: '¿Qué beneficios obtengo?',
      answer: 'Como agente 1xBet recibes comisiones competitivas por cada cliente activo, acceso a promociones exclusivas, material de marketing profesional, capacitación continua, soporte 24/7 y la oportunidad de formar parte de una red global de agentes exitosos. Además, tienes total flexibilidad para gestionar tu tiempo y escalar tu negocio.'
    },
    {
      question: '¿Qué soporte recibiré?',
      answer: 'Recibirás soporte completo en múltiples canales: chat en vivo disponible 24/7, asesor personal dedicado, reuniones de seguimiento programadas, acceso a comunidad de agentes, material educativo actualizado y asistencia técnica inmediata. Nunca estarás solo en el proceso.'
    },
    {
      question: '¿Necesito experiencia previa?',
      answer: 'No es necesario tener experiencia previa en apuestas o ventas. Nuestra plataforma de capacitación está diseñada para personas de todos los niveles. Te enseñaremos todo lo que necesitas saber, desde los conceptos básicos hasta estrategias avanzadas de marketing y gestión de clientes.'
    },
    {
      question: '¿Cuánto puedo ganar como agente?',
      answer: 'Tus ingresos dependen de tu dedicación y la cantidad de clientes activos que gestiones. Nuestros agentes más exitosos han logrado generar ingresos significativos en poco tiempo. Durante la reunión inicial te mostraremos casos reales y proyecciones basadas en diferentes niveles de actividad.'
    },
    {
      question: '¿Hay algún costo inicial?',
      answer: 'No hay costos de franquicia ni inversión inicial obligatoria. Te proporcionamos todo el material de marketing básico sin costo. Algunos agentes eligen invertir en publicidad adicional para acelerar su crecimiento, pero esto es completamente opcional y depende de tus objetivos.'
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">¿Tienes dudas? Tenemos respuestas</h2>
          <motion.div
            className="w-20 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-gray-700">
            Resolvemos las preguntas más frecuentes sobre cómo convertirte en agente 1xBet
          </p>
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Accordion.Item
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-100 transition-colors group">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-6 pb-4 text-gray-600 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
