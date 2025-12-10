import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Proyecto E-commerce",
      description: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pagos",
      tech: ["React", "Node.js", "MongoDB"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interactivo con visualización de datos en tiempo real",
      tech: ["React", "D3.js", "Firebase"],
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "App Móvil Social",
      description: "Red social con chat en tiempo real y compartición de multimedia",
      tech: ["React Native", "WebSocket", "AWS"],
      gradient: "from-red-600 to-pink-500"
    }
  ];

  const skills = [
    { name: "React", icon: Code, description: "Desarrollo de aplicaciones web modernas" },
    { name: "JavaScript", icon: Zap, description: "ES6+ y programación funcional" },
    { name: "CSS/Tailwind", icon: Palette, description: "Diseño responsive y moderno" },
    { name: "Node.js", icon: Code, description: "APIs RESTful y backend" },
    { name: "Git", icon: Github, description: "Control de versiones y colaboración" },
    { name: "UI/UX", icon: Palette, description: "Interfaces intuitivas y atractivas" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent">
              felv-developer
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['inicio', 'proyectos', 'habilidades', 'contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setActiveSection(item)}
                  className={`capitalize hover:text-red-400 transition-colors ${activeSection === item ? 'text-red-400' : ''}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 px-4 py-4 space-y-3">
            {['inicio', 'proyectos', 'habilidades', 'contacto'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => {
                  setActiveSection(item);
                  setIsMenuOpen(false);
                }}
                className="block capitalize hover:text-red-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-gray-900 to-orange-900/20"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-20"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s linear infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Soy{' '}
            <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Franklin loaiza
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-9">
            desarrollador de software y me apasiona transformar ideas en proyectos reales que funcionan.</p>
          <div className="flex justify-center space-x-4">
            <a
              href="#proyectos"
              className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Ver Proyectos
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 border-2 border-red-500 rounded-full font-semibold hover:bg-red-500/10 transition-colors"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Proyectos <span className="text-red-400">Destacados</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="p-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} mb-4 flex items-center justify-center`}>
                    <ExternalLink className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Habilidades <span className="text-red-400">Técnicas</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            ¿Trabajamos <span className="text-red-400">Juntos?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Estoy disponible para proyectos freelance o colaboraciones
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/FRANKLIN399"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:franklinesteban2408@gmail.com"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <a
            href="mailto:franklinesteban2408@gmail.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
          >
            Enviar Mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <p>© 2025 Tu Nombre. Todos los derechos reservados.</p>
      </footer>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}} />
    </div>
  );
}
