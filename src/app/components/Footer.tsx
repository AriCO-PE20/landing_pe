import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full filter blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4">1xBet Perú</h3>
            <p className="text-sm leading-relaxed">
              Red oficial de agentes 1xBet en Perú. Únete a la plataforma líder en apuestas deportivas online.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre nosotros</a></li>
              <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Beneficios</a></li>
              <li><a href="#testimonios" className="hover:text-blue-400 transition-colors">Testimonios</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>agentes@1xbet-peru.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+51 1 234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center"
                  whileHover={{
                    backgroundColor: "rgb(37 99 235)",
                    scale: 1.2,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 1xBet Perú. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Términos y condiciones</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Juego responsable</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>
              Este sitio está destinado exclusivamente para el reclutamiento de agentes en Perú.
              Debe ser mayor de 18 años para participar. Juegue responsablemente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
