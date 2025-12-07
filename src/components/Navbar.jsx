import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Our Services' },
    { path: '/technologies', label: 'Technologies' },
    { path: '/careers', label: 'Careers' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact Us' }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-white/20' 
        : 'bg-black/30 backdrop-blur-md shadow-lg'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all"
            >
              <span className="text-white font-black text-xl">T</span>
            </motion.div>
            <div>
              <span className={`text-2xl font-heading font-black block ${
                scrolled ? 'text-primary' : 'text-white drop-shadow-lg'
              } transition-colors`}>
                TICS
              </span>
              <span className={`text-xs font-medium block -mt-1 ${
                scrolled ? 'text-neo-dark/60' : 'text-white/90 drop-shadow-md'
              } transition-colors`}>
                AI Software Development Company
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  location.pathname === link.path
                    ? scrolled 
                      ? 'text-primary bg-primary/10' 
                      : 'text-white bg-white/20 drop-shadow-md'
                    : scrolled
                      ? 'text-neo-dark hover:text-primary hover:bg-neo-white'
                      : 'text-white/90 hover:text-white hover:bg-white/20 drop-shadow-sm'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                    initial={false}
                  />
                )}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`ml-4 px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                scrolled
                  ? 'bg-gradient-primary text-white hover:shadow-glow'
                  : 'bg-white/40 backdrop-blur-sm text-white border border-white/50 hover:bg-white/50 drop-shadow-lg'
              }`}
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-neo-dark' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : scrolled
                      ? 'text-neo-dark hover:bg-neo-white'
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block btn-primary mt-4 text-center"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
