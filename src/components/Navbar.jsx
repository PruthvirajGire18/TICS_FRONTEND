import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiInfo, FiBriefcase, FiUsers, FiMail } from 'react-icons/fi'

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navLinks = [
    { path: '/', label: 'Home', icon: FiHome },
    { path: '/about', label: 'About', icon: FiInfo },
    { path: '/services', label: 'Services', icon: FiBriefcase },
    { path: '/careers', label: 'Careers', icon: FiUsers },
    { path: '/contact', label: 'Contact', icon: FiMail }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
              <span className="text-white font-black text-xl">T</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-heading font-black text-cloud-dark block">
                TICS
              </span>
              <span className="text-xs text-gray-500 block -mt-1">
                Engineering the Digital Future
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2.5 font-medium text-sm transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-cloud-dark bg-gray-100'
                      : 'text-gray-600 hover:text-cloud-dark'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {link.label}
                  </span>
                  
                  {/* Active indicator - dark blue underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeLine"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="ml-4 px-6 py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <FiMail className="w-4 h-4" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg text-cloud-dark hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - Beautiful Slide Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-2 border-t border-gray-100">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = location.pathname === link.path
                  
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'bg-gray-100 text-cloud-dark'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-cloud-dark'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                      {isActive && (
                        <div className="ml-auto w-1 h-6 bg-primary rounded-full" />
                      )}
                    </Link>
                  )
                })}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full bg-primary text-white text-center py-4 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FiMail className="w-5 h-5" />
                      Get in Touch
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
