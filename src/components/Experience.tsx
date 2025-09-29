const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador de Software",
      company: "NarvalDreams, México",
      period: "abril 2024 – Actualidad",
      color: "blue",
      icon: "💼",
      responsibilities: [
        "Desarrollo y mantenimiento de aplicaciones en Python, Django, Angular, React y HTML",
        "Integración de sistemas internos con Odoo, MySQL y phpMyAdmin",
        "Mejora de eficiencia en procesos internos y experiencia de usuario"
      ]
    },
    {
      title: "Profesional TIC",
      company: "CORHUILA, Neiva – Huila, Colombia",
      period: "Julio 2022 – Actualidad",
      color: "purple",
      icon: "🏢",
      responsibilities: [
        "Gestión de sistemas académicos y financieros",
        "Desarrollo de soluciones internas con PHP, JavaScript, Angular y React",
        "Administración de bases de datos Oracle, MySQL y PostgreSQL"
      ]
    },
    {
      title: "Desarrollador Frontend",
      company: "CORHUILA, Neiva – Huila, Colombia",
      period: "mayo 2024 – junio 2024",
      color: "green",
      icon: "🎨",
      responsibilities: [
        "Desarrollo de interfaz frontend con Angular y TypeScript",
        "Integración con backend en Laravel y PostgreSQL vía REST APIs"
      ]
    },
    {
      title: "Ingeniero de Redes y Web Máster",
      company: "Hospital San Vicente de Paúl, Garzón – Huila, Colombia",
      period: "enero 2022 – agosto 2022",
      color: "yellow",
      icon: "🏥",
      responsibilities: [
        "Administración de infraestructura de red y sitios web institucionales",
        "Implementación de mejoras técnicas y soporte a usuarios"
      ]
    },
    {
      title: "Desarrollador de Software",
      company: "Editora Surcolombiana S.A.S, Neiva – Huila, Colombia",
      period: "septiembre 2021 – enero 2022",
      color: "pink",
      icon: "📚",
      responsibilities: [
        "Desarrollo de sistemas de inventario y suscripciones en PHP (Laravel)",
        "Administración de bases de datos MySQL y PostgreSQL"
      ]
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-400/50 hover:border-blue-400 text-blue-400',
      purple: 'border-purple-400/50 hover:border-purple-400 text-purple-400',
      green: 'border-green-400/50 hover:border-green-400 text-green-400',
      yellow: 'border-yellow-400/50 hover:border-yellow-400 text-yellow-400',
      pink: 'border-pink-400/50 hover:border-pink-400 text-pink-400'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          💼 Experiencia Profesional
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 ${getColorClasses(exp.color)} transition-all duration-500 transform hover:scale-105 hover:rotate-1 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{exp.icon}</div>
                  <div>
                    <h3 className={`text-xl sm:text-2xl font-bold ${getColorClasses(exp.color).split(' ')[2]} group-hover:text-current transition-colors`}>
                      {exp.title}
                    </h3>
                    <p className="text-lg text-gray-300 mt-1">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 mt-2 lg:mt-0 lg:ml-4 bg-white/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <li 
                    key={respIndex}
                    className="text-gray-300 flex items-start space-x-2 group-hover:text-white transition-colors"
                    style={{ animationDelay: `${(index * 200) + (respIndex * 100)}ms` }}
                  >
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
