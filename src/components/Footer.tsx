const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10 bg-black/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400">
            © 2024 Gustavo Andrés Vásquez Rojas. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/gustavo-andres-vasquez-rojas-72818a15a" 
               className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
              💼 LinkedIn
            </a>
            <a href="https://github.com/gavasquez" 
               className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform">
              🐙 GitHub
            </a>
            <a href="mailto:gustavovasquez15@gmail.com" 
               className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              ✉️ Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
