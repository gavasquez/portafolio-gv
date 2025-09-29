const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "573004406300"
    const message = "Hola! Me interesa conocer más sobre tus servicios de desarrollo de software."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          📞 Contacto
        </h2>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <span className="text-blue-400 text-xl">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Teléfono</p>
                  <p className="text-gray-400">+57 300 440 6300</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <span className="text-purple-400 text-xl">✉️</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-gray-400">gustavovasquez15@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <span className="text-green-400 text-xl">📍</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Ubicación</p>
                  <p className="text-gray-400">Neiva, Huila, Colombia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                  <span className="text-yellow-400 text-xl">🌐</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Redes Sociales</p>
                  <div className="flex space-x-4 mt-1">
                    <a href="https://linkedin.com/in/gustavo-andres-vasquez-rojas-72818a15a" 
                       className="text-blue-400 hover:text-blue-300 transition-colors hover:scale-110 transform">
                      💼 LinkedIn
                    </a>
                    <a href="https://github.com/gavasquez" 
                       className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
                      🐙 GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10">
            <p className="text-lg text-gray-300 mb-6">
              ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él! 🚀
            </p>
            <button 
              onClick={handleWhatsAppClick}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:rotate-1 cursor-pointer"
            >
              💬 Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
