const Projects = () => {
      const projects = [
        {
          id: 1,
          title: "Sistema de Votaciones CORHUILA",
          description: "Sistema completo de votaciones electrónicas desarrollado para la Corporación Universitaria del Huila. Permite la creación de tarjetones, planchas, usuarios y votantes con autenticación de dos pasos y validación OTP.",
          technologies: ["Angular", "Laravel", "MySQL", "phpMyAdmin"],
          image: "🗳️",
          status: "Completado",
          link: "https://votaciones.corhuila.edu.co/login",
          color: "blue",
          features: [
            "Creación de tarjetones y planchas",
            "Gestión de usuarios y votantes",
            "Autenticación de dos pasos",
            "Envío y validación de OTP",
            "Sistema de votación electrónica",
            "Gráficas y reportes en tiempo real"
          ]
        },
        {
          id: 2,
          title: "Sistema de Biotecnología CORHUILA",
          description: "Plataforma a la medida para la gestión del laboratorio de biotecnología en CORHUILA: permite la toma de muestras, generación de reportes, creación de clientes y administración mediante módulos de roles y usuarios. El sistema también genera códigos de barras para marcar y rastrear las muestras.",
          technologies: ["Angular", "TypeScript", "PHP", "Laravel", "MySQL", "Postman", "phpMyAdmin"],
          image: "🧬",
          status: "Completado",
          link: "http://192.168.20.84/login",
          color: "green",
          features: [
            "Toma y registro de muestras",
            "Generación de códigos de barras para identificación",
            "Creación y gestión de clientes",
            "Módulo de roles y usuarios",
            "Arquitectura cliente-servidor con API en Laravel"
          ]
        }
      ]

      const getColorClasses = (color: string) => {
        const colorMap = {
          blue: 'border-blue-400/50 hover:border-blue-400 text-blue-400 bg-blue-500/20',
          purple: 'border-purple-400/50 hover:border-purple-400 text-purple-400 bg-purple-500/20',
          green: 'border-green-400/50 hover:border-green-400 text-green-400 bg-green-500/20',
          yellow: 'border-yellow-400/50 hover:border-yellow-400 text-yellow-400 bg-yellow-500/20',
          pink: 'border-pink-400/50 hover:border-pink-400 text-pink-400 bg-pink-500/20',
          cyan: 'border-cyan-400/50 hover:border-cyan-400 text-cyan-400 bg-cyan-500/20'
        }
        return colorMap[color as keyof typeof colorMap] || colorMap.blue
      }

      const getStatusColor = (status: string) => {
        return status === 'Completado' ? 'text-green-400 bg-green-500/20' : 'text-yellow-400 bg-yellow-500/20'
      }
    
      return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🚀 Proyectos Realizados
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${getColorClasses(project.color)} transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group mt-10`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl">{project.image}</div>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-current transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">🚀 Características Principales:</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features?.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center space-x-2 text-gray-300"
                      style={{ animationDelay: `${(index * 150) + (featureIndex * 100)}ms` }}
                    >
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-sm font-semibold text-white mb-2 w-full">🛠️ Tecnologías Utilizadas:</span>
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full hover:scale-110 transition-transform cursor-pointer"
                    style={{ animationDelay: `${(index * 150) + (techIndex * 50)}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={project.link}
                  className="flex-1 text-center py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  👁️ Ver Proyecto
                </a>
                <button className="px-6 py-3 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  📁 Código
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 cursor-pointer">
            🎯 Ver Todos los Proyectos
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
