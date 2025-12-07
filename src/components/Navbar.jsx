import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiInfo, FiBriefcase, FiCode, FiUsers, FiFileText, FiHelpCircle, FiMail } from 'react-icons/fi'

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
    { path: '/about', label: 'About Us', icon: FiInfo },
    { path: '/services', label: 'Our Services', icon: FiBriefcase },
    { path: '/technologies', label: 'Technologies', icon: FiCode },
    { path: '/careers', label: 'Careers', icon: FiUsers },
    { path: '/blog', label: 'Blog', icon: FiFileText },
    { path: '/faq', label: 'FAQ', icon: FiHelpCircle },
    { path: '/contact', label: 'Contact Us', icon: FiMail }
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b border-primary/10' 
        : 'bg-gradient-to-b from-black/40 via-black/30 to-transparent backdrop-blur-xl'
    }`}>
      {/* Animated gradient border on scroll */}
      {scrolled && (
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-primary"
        />
      )}

      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo Section - Enhanced */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <motion.div 
              whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-500 border-2 border-white/20">
                <span className="text-white font-black text-2xl relative z-10">T</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-2xl border-2 border-accent/30 border-t-transparent"
                />
              </div>
            </motion.div>
            <div className="relative">
              <motion.span 
                className={`text-2xl md:text-3xl font-heading font-black block bg-gradient-primary bg-clip-text text-transparent ${
                  !scrolled && 'drop-shadow-2xl'
                } transition-all duration-500`}
                whileHover={{ scale: 1.05 }}
              >
                TICS
              </motion.span>
              <span className={`text-[10px] md:text-xs font-semibold block -mt-1 tracking-wider uppercase ${
                scrolled 
                  ? 'text-primary/70' 
                  : 'text-white/90 drop-shadow-lg'
              } transition-colors duration-500`}>
                Tech Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Premium Design */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              
              return (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`relative group px-4 py-2.5 font-semibold text-sm transition-all duration-300 rounded-xl ${
                      isActive
                        ? scrolled 
                          ? 'text-primary' 
                          : 'text-white'
                        : scrolled
                          ? 'text-cloud-dark/80 hover:text-primary'
                          : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {/* Active indicator with glow */}
                    {isActive && (
                      <>
                        <motion.div
                          layoutId="activeIndicator"
                          className={`absolute inset-0 rounded-xl ${
                            scrolled 
                              ? 'bg-primary/10 border border-primary/20' 
                              : 'bg-white/20 backdrop-blur-sm border border-white/30'
                          }`}
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                        <motion.div
                          className="absolute -inset-1 bg-gradient-primary rounded-xl opacity-20 blur-md"
                          animate={{ opacity: [0.2, 0.4, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </>
                    )}
                    
                    {/* Hover effect */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                      !isActive && (scrolled ? 'bg-primary/5 group-hover:bg-primary/10' : 'bg-white/5 group-hover:bg-white/15')
                    }`} />
                    
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </span>
                    
                    {/* Bottom accent line for active */}
                    {isActive && (
                      <motion.div
                        layoutId="activeLine"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-accent rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
            
            {/* CTA Button - Premium */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className={`relative ml-4 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-500 overflow-hidden group ${
                  scrolled
                    ? 'bg-gradient-primary text-white shadow-glow hover:shadow-glow-lg'
                    : 'bg-white/20 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white/30 hover:border-white/60'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <FiMail className="w-4 h-4" />
                  GET QUOTE
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`lg:hidden relative p-3 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-primary bg-primary/10 hover:bg-primary/20' 
                : 'text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
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
              <div className={`py-6 space-y-2 border-t ${
                scrolled ? 'border-primary/10' : 'border-white/20'
              }`}>
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  const isActive = location.pathname === link.path
                  
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-gradient-primary text-white shadow-glow'
                            : scrolled
                              ? 'text-cloud-dark hover:bg-primary/10 hover:text-primary'
                              : 'text-white/90 hover:bg-white/15 hover:text-white'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {link.label}
                        {isActive && (
                          <motion.div
                            layoutId="mobileActive"
                            className="ml-auto w-2 h-2 bg-accent rounded-full"
                            initial={false}
                          />
                        )}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full btn-primary text-center py-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FiMail className="w-5 h-5" />
                      Get in Touch
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
