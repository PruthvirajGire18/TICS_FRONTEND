import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaReact, FaNode, FaAws, FaDocker, FaPython, FaJava } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiKubernetes, SiTypescript, SiNextdotjs, SiGraphql, SiVuedotjs, SiAngular } from 'react-icons/si'
import { FiArrowRight } from 'react-icons/fi'

const Technologies = () => {
  const [hoveredTech, setHoveredTech] = useState(null)

  const technologies = [
    { 
      name: 'React', 
      icon: FaReact, 
      color: '#61DAFB',
      description: 'Modern UI library for building interactive user interfaces',
      category: 'Frontend'
    },
    { 
      name: 'Node.js', 
      icon: FaNode, 
      color: '#339933',
      description: 'JavaScript runtime for building scalable server-side applications',
      category: 'Backend'
    },
    { 
      name: 'MongoDB', 
      icon: SiMongodb, 
      color: '#47A248',
      description: 'NoSQL database for modern applications with flexible schema',
      category: 'Database'
    },
    { 
      name: 'Express', 
      icon: SiExpress, 
      color: '#000000',
      description: 'Fast, unopinionated web framework for Node.js',
      category: 'Backend'
    },
    { 
      name: 'AWS', 
      icon: FaAws, 
      color: '#FF9900',
      description: 'Comprehensive cloud computing platform with global infrastructure',
      category: 'Cloud'
    },
    { 
      name: 'Docker', 
      icon: FaDocker, 
      color: '#2496ED',
      description: 'Containerization platform for consistent deployments',
      category: 'DevOps'
    },
    { 
      name: 'Kubernetes', 
      icon: SiKubernetes, 
      color: '#326CE5',
      description: 'Container orchestration for automated deployment and scaling',
      category: 'DevOps'
    },
    { 
      name: 'Python', 
      icon: FaPython, 
      color: '#3776AB',
      description: 'Versatile programming language for AI, data science, and web development',
      category: 'Language'
    },
    { 
      name: 'Java', 
      icon: FaJava, 
      color: '#ED8B00',
      description: 'Enterprise-grade programming language for large-scale applications',
      category: 'Language'
    },
    { 
      name: 'TypeScript', 
      icon: SiTypescript, 
      color: '#3178C6',
      description: 'Typed superset of JavaScript for better code quality',
      category: 'Language'
    },
    { 
      name: 'Next.js', 
      icon: SiNextdotjs, 
      color: '#000000',
      description: 'React framework for production with server-side rendering',
      category: 'Frontend'
    },
    { 
      name: 'Tailwind CSS', 
      icon: SiTailwindcss, 
      color: '#06B6D4',
      description: 'Utility-first CSS framework for rapid UI development',
      category: 'Frontend'
    },
    { 
      name: 'GraphQL', 
      icon: SiGraphql, 
      color: '#E10098',
      description: 'Query language for APIs with precise data fetching',
      category: 'API'
    },
    { 
      name: 'Vue.js', 
      icon: SiVuedotjs, 
      color: '#4FC08D',
      description: 'Progressive JavaScript framework for building UIs',
      category: 'Frontend'
    },
    { 
      name: 'Angular', 
      icon: SiAngular, 
      color: '#DD0031',
      description: 'Platform for building mobile and desktop web applications',
      category: 'Frontend'
    },
    { 
      name: 'JavaScript', 
      icon: SiJavascript, 
      color: '#F7DF1E',
      description: 'Core programming language of the web',
      category: 'Language'
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'DevOps', 'Language', 'API']

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-tight">
              Technologies We
              <br />
              <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">
                Master
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Cutting-edge tools and frameworks powering innovation and excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technologies Grid with Tooltips */}
      <section className="section-padding bg-cloud-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Our <span className="gradient-text-accent">Tech Stack</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              Comprehensive technology expertise across the entire development stack
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon
              const isHovered = hoveredTech === tech.name
              
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.1 }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="glass-card p-8 flex flex-col items-center justify-center group cursor-pointer relative card-3d"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon 
                      className="text-6xl mb-4 transition-all group-hover:scale-110" 
                      style={{ color: tech.color }}
                    />
                  </motion.div>
                  <span className="text-cloud-dark font-semibold text-sm text-center">{tech.name}</span>
                  
                  {/* Tooltip on Hover */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-50 w-64"
                    >
                      <div className="glass-card p-4 shadow-premium-lg border border-accent/30">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-1 rounded">
                            {tech.category}
                          </span>
                        </div>
                        <p className="text-sm text-cloud-dark/80 leading-relaxed">
                          {tech.description}
                        </p>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white/12 backdrop-blur-xl border-l border-t border-white/25 rotate-45"></div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Auto-Scroll Marquee Section */}
      <section className="section-padding bg-cloud-dark relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-heading font-bold text-white/80 mb-8">
              Continuously Evolving Technology Stack
            </h3>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-slide" style={{ width: 'max-content' }}>
              {[...technologies, ...technologies, ...technologies].map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={`${tech.name}-marquee-${index}`}
                    whileHover={{ scale: 1.2, y: -10 }}
                    className="flex-shrink-0 glass-card p-6 min-w-[140px] flex flex-col items-center justify-center group"
                  >
                    <Icon 
                      className="text-5xl mb-3 transition-transform group-hover:rotate-12" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-white/90 font-medium text-xs">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-8">
              Ready to Build with
              <br />
              <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">
                Cutting-Edge Tech?
              </span>
            </h2>
            <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto font-light">
              Let's discuss how our technology expertise can power your next project
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-cloud-white inline-flex items-center gap-3">
              <span>Get Started</span>
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Technologies

