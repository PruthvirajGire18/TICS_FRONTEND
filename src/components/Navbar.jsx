import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiInfo, 
  FiBriefcase, 
  FiCode, 
  FiUsers, 
  FiFileText, 
  FiHelpCircle, 
  FiMail,
  FiArrowRight
} from 'react-icons/fi'

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/60 backdrop-blur-[18px] shadow-2xl' 
        : 'bg-black/50 backdrop-blur-[12px]'
    }`}
    style={{
      backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0.5)',
    }}>
      {/* Subtle top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Premium 3D Glossy Style */}
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="relative"
            >
              {/* Outer glow */}
              <div className="absolute -inset-3 bg-gradient-to-br from-accent via-secondary to-accent rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow" />
              
              {/* 3D Box with glossy premium effect */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-secondary via-accent to-secondary rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-glow-accent transition-all duration-500 border border-white/20">
                {/* Top glossy highlight */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-t-xl" />
                
                {/* Letter T - Bold & Sharp */}
                <span className="relative z-10 text-white font-black text-2xl md:text-3xl drop-shadow-2xl tracking-tight">
                  T
                </span>
                
                {/* Bottom depth shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/40 rounded-b-xl" />
                
                {/* Inner shine */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-50" />
              </div>
            </motion.div>
            
            {/* Brand Name - High Contrast */}
            <div className="relative">
              <motion.span 
                className="text-2xl md:text-3xl font-heading font-black block tracking-tight text-white drop-shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                TICS
              </motion.span>
              <span className="text-[10px] md:text-xs font-semibold block -mt-1 tracking-widest uppercase text-accent/90 drop-shadow-md">
                Tech Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Menu - High Contrast with Icons */}
          <div className="hidden xl:flex items-center space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = location.pathname === link.path
              
              return (
                <motion.div
                  key={link.path}
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={link.path}
                    className="relative group px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-white rounded-lg transition-all duration-300"
                  >
                    {/* Icon with fade effect */}
                    <motion.div
                      animate={{ opacity: isActive ? 1 : 0.8 }}
                      whileHover={{ opacity: 1, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                    
                    {/* Label - Bold & High Contrast */}
                    <span className="relative z-10 font-semibold">{link.label}</span>
                    
                    {/* Glowing Underline - Fluid Slide Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent via-secondary to-accent rounded-full"
                      initial={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      animate={{ 
                        scaleX: isActive ? 1 : (group => group ? 1 : 0),
                        opacity: isActive ? 1 : (group => group ? 0.8 : 0)
                      }}
                      whileHover={{ scaleX: 1, opacity: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25,
                        duration: 0.3
                      }}
                      style={{ transformOrigin: 'left' }}
                    />
                    
                    {/* Glow effect for underline */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-20 h-3 blur-md bg-accent/60 rounded-full"
                        animate={{ 
                          opacity: [0.4, 0.8, 0.4],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {/* Hover background fade */}
                    <motion.div
                      className="absolute inset-0 rounded-lg bg-white/5"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
            
            {/* CTA Button - Round Pill with Neon Glow */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="ml-4"
            >
              <Link 
                to="/contact" 
                className="relative group px-6 py-3 rounded-full font-bold text-sm text-white overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #00FFC4 0%, #00A2FF 50%, #00FFC4 100%)',
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% 0%',
                  boxShadow: '0 0 20px rgba(0, 255, 196, 0.4), 0 4px 14px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  transition: 'background-position 0.5s ease, box-shadow 0.3s ease, transform 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 0%'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 196, 0.6), 0 4px 14px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%'
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 196, 0.4), 0 4px 14px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                {/* Pulse glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent opacity-50"
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Inner depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                
                <span className="relative z-10 flex items-center gap-2">
                  Get Quote
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiArrowRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Neon Glowing */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={`xl:hidden relative p-3 rounded-xl transition-all duration-300 text-white ${
              isOpen 
                ? 'bg-accent/20 shadow-glow-accent' 
                : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            style={{
              boxShadow: isOpen ? '0 0 20px rgba(0, 255, 196, 0.5)' : 'none'
            }}
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

        {/* Mobile Menu - Right Side Slide-In Drawer */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="xl:hidden fixed inset-0 top-20 bg-black/60 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Drawer */}
              <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.4
                }}
                className="xl:hidden fixed top-20 right-0 bottom-0 w-80 bg-black/90 backdrop-blur-xl border-l border-accent/20 shadow-2xl z-50 overflow-y-auto"
                style={{
                  boxShadow: '-4px 0 24px rgba(0, 255, 196, 0.2)'
                }}
              >
                <div className="p-6 space-y-3">
                  {/* Drawer Header */}
                  <div className="pb-4 border-b border-accent/20">
                    <h3 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="w-1 h-6 bg-gradient-accent rounded-full" />
                      Menu
                    </h3>
                  </div>
                  
                  {/* Menu Items */}
                  {navLinks.map((link, index) => {
                    const Icon = link.icon
                    const isActive = location.pathname === link.path
                    
                    return (
                      <motion.div
                        key={link.path}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-accent/20 to-secondary/20 text-white border border-accent/30 shadow-glow-accent'
                              : 'text-white/80 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${isActive ? 'text-accent' : ''}`} />
                          {link.label}
                          {isActive && (
                            <motion.div
                              layoutId="mobileActive"
                              className="ml-auto w-2 h-2 bg-accent rounded-full shadow-glow-accent"
                              initial={false}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                  
                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                    className="pt-6"
                  >
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="relative block w-full text-white text-center py-4 rounded-full font-bold overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #00FFC4 0%, #00A2FF 50%, #00FFC4 100%)',
                        backgroundSize: '200% 100%',
                        backgroundPosition: '0% 0%',
                        boxShadow: '0 0 20px rgba(0, 255, 196, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                        transition: 'background-position 0.5s ease, box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundPosition = '100% 0%'
                        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 196, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundPosition = '0% 0%'
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 196, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent opacity-50"
                        animate={{ 
                          scale: [1, 1.15, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent" />
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Get Quote
                        <FiArrowRight className="w-5 h-5" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
