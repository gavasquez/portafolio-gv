const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: "💻",
      color: "blue",
      skills: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'Dart', 'Java']
    },
    {
      title: "Frameworks",
      icon: "⚡",
      color: "purple",
      skills: ['Laravel', 'Angular', 'React', 'Nest.js', 'Vue.js', 'Flutter', 'Next.js', 'Symfony']
    },
    {
      title: "Bases de Datos",
      icon: "🗄️",
      color: "green",
      skills: ['Oracle', 'PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase']
    },
    {
      title: "DevOps",
      icon: "🚀",
      color: "yellow",
      skills: ['Docker', 'AWS', 'Git', 'GitHub', 'GitLab']
    },
    {
      title: "Web & CMS",
      icon: "🌐",
      color: "pink",
      skills: ['WordPress', 'Joomla', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: "Metodologías",
      icon: "📋",
      color: "cyan",
      skills: ['Scrum', 'Kanban', 'Agile']
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'border-blue-400/50 text-blue-400 bg-blue-500/20 text-blue-300',
      purple: 'border-purple-400/50 text-purple-400 bg-purple-500/20 text-purple-300',
      green: 'border-green-400/50 text-green-400 bg-green-500/20 text-green-300',
      yellow: 'border-yellow-400/50 text-yellow-400 bg-yellow-500/20 text-yellow-300',
      pink: 'border-pink-400/50 text-pink-400 bg-pink-500/20 text-pink-300',
      cyan: 'border-cyan-400/50 text-cyan-400 bg-cyan-500/20 text-cyan-300'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="skills" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🛠️ Habilidades Técnicas
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:${getColorClasses(category.color).split(' ')[0]} transition-all duration-500 transform hover:scale-110 hover:rotate-2 hover:shadow-2xl group`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-lg sm:text-xl font-bold mb-4 ${getColorClasses(category.color).split(' ')[1]} flex items-center`}>
                <span className="mr-2 text-2xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 ${getColorClasses(category.color).split(' ')[2]} rounded-full text-sm transition-all duration-300 hover:scale-110 hover:rotate-1 group-hover:shadow-lg`}
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
