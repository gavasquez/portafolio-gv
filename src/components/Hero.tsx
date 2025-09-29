import { useState, useEffect } from 'react'

interface HeroProps {
  scrollToSection: (sectionId: string) => void
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className={`relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
         <div className="mb-8 mt-10">
           <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 animate-bounce">
             <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
               <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                 <span className="text-6xl">👨‍💻</span>
               </div>
             </div>
           </div>
         </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Gustavo Andrés Vásquez Rojas
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-300">
          Desarrollador de Software | Full Stack
        </p>
        
        <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ingeniero de Sistemas con más de 3 años de experiencia creando aplicaciones web y móviles escalables. 
          Especializado en PHP, JavaScript, TypeScript, Python y Dart.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <button 
             onClick={() => scrollToSection('contact')}
             className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:rotate-1 cursor-pointer"
           >
             💬 Contactar
           </button>
           <button 
             onClick={() => scrollToSection('projects')}
             className="px-6 sm:px-8 py-3 border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:rotate-1 cursor-pointer"
           >
             🚀 Ver Proyectos
           </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
