const Education = () => {
  const educationData = [
    {
      title: "Especialización en Ingeniería de Software",
      institution: "Corporación Universitaria del Huila – CORHUILA (En curso)",
      type: "education",
      icon: "🎓"
    },
    {
      title: "Ingeniería de Sistemas",
      institution: "Corporación Universitaria del Huila – CORHUILA (2017 – 2022)",
      type: "education",
      icon: "🎓"
    },
    {
      title: "Diplomado en Python",
      institution: "CORHUILA (2021)",
      type: "education",
      icon: "🐍"
    },
    {
      title: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      institution: "SENA (2016 – 2017)",
      type: "education",
      icon: "💻"
    },
    {
      title: "Técnico en Sistemas",
      institution: "SENA (2011 – 2012)",
      type: "education",
      icon: "⚙️"
    }
  ]

  const certifications = [
    {
      title: "Master en Webs Full Stack",
      description: "Angular, Node, Laravel, Symfony",
      icon: "🏆"
    },
    {
      title: "Angular: De cero a experto",
      description: "Angular Avanzado: MEAN Stack",
      icon: "🅰️"
    },
    {
      title: "React: De Cero a Experto",
      description: "Hooks y MERN",
      icon: "⚛️"
    },
    {
      title: "Flutter: Desarrollo iOS y Android",
      description: "",
      icon: "📱"
    },
    {
      title: "Node.js: De Cero a Experto",
      description: "",
      icon: "🟢"
    },
    {
      title: "JavaScript Moderno",
      description: "",
      icon: "🟨"
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🎓 Educación y Certificaciones
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
              <span className="mr-2">🎓</span>
              Educación
            </h3>
            <div className="space-y-4">
              {educationData.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 mt-1">{item.institution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
              <span className="mr-2">🏆</span>
              Certificaciones
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{cert.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                        {cert.title}
                      </h4>
                      {cert.description && (
                        <p className="text-gray-400 mt-1">{cert.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
