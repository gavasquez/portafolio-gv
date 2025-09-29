const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          👨‍💻 Sobre Mí
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-blue-400 flex items-center">
                👤 Información Personal
              </h3>
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold mr-2">🎂 Edad:</span> 29 años</p>
                <p className="flex items-center"><span className="font-semibold mr-2">📍 Ubicación:</span> Neiva, Huila, Colombia</p>
                <p className="flex items-center"><span className="font-semibold mr-2">🇨🇴 Nacionalidad:</span> Colombiana</p>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-purple-400 flex items-center">
                💼 Perfil Profesional
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Ingeniero de Sistemas con más de 3 años de experiencia en desarrollo de software, 
                especializado en la creación de aplicaciones web y móviles escalables. Experto en PHP, 
                JavaScript, TypeScript, Python y Dart, con dominio en frameworks modernos como Laravel, 
                Angular, Nest.js, React, Vue y Flutter.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-400 flex items-center">
                📞 Contacto
              </h3>
              <div className="space-y-3">
                <p className="flex items-center"><span className="font-semibold mr-2">📱 Teléfono:</span> +57 300 440 6300</p>
                <p className="flex items-center"><span className="font-semibold mr-2">✉️ Email:</span> gustavovasquez15@gmail.com</p>
                <div className="flex flex-wrap gap-4 mt-4">
                  <a href="https://linkedin.com/in/gustavo-andres-vasquez-rojas-72818a15a" 
                     className="text-blue-400 hover:text-blue-300 transition-colors flex items-center">
                    💼 LinkedIn
                  </a>
                  <a href="https://github.com/gavasquez" 
                     className="text-gray-400 hover:text-white transition-colors flex items-center">
                    🐙 GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-yellow-400 flex items-center">
                🌍 Idiomas
              </h3>
              <div className="space-y-2">
                <p className="flex items-center"><span className="font-semibold mr-2">🇪🇸 Español:</span> Nativo</p>
                <p className="flex items-center"><span className="font-semibold mr-2">🇺🇸 Inglés:</span> Intermedio (B1)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
