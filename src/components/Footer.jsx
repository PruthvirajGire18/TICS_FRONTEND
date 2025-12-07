import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter', color: 'hover:text-[#1DA1F2]' },
    { icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram', color: 'hover:text-[#E4405F]' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub', color: 'hover:text-white' }
  ]

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact us' }
  ]

  const services = [
    'AI & Software Development',
    'Staff Augmentation',
    'Cloud Solutions',
    'Cybersecurity Solutions',
    'Digital Transformation'
  ]

  return (
    <footer className="relative bg-cloud-dark text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/15 to-primary/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-30"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-black text-xl">T</span>
              </div>
              <div>
                <span className="text-2xl font-heading font-black block">TICS</span>
                <span className="text-xs text-white/60">Engineering the Digital Future</span>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Leading IT solutions provider delivering innovation, excellence, and transformative technology services to enterprises worldwide.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-11 h-11 glass-card flex items-center justify-center ${social.color} transition-colors`}
                    aria-label={social.label}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-accent mt-1 flex-shrink-0" />
                <span className="text-white/70">39th floor, Kohinoor Square, Ram Ganesh Gadkari Chowk, Dadar West, Dadar, Mumbai, Maharashtra 400028, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-accent flex-shrink-0" />
                <a href="tel:+912241234567" className="text-white/70 hover:text-accent transition-colors">
                  +91 22 4123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-accent flex-shrink-0" />
                <a href="mailto:info@tics.it.com" className="text-white/70 hover:text-accent transition-colors">
                  info@tics.it.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-white font-semibold mb-3">Newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-gradient-primary rounded-lg hover:shadow-glow transition-all"
                >
                  <FiSend className="text-white" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} TICS - Tech Innovative IT Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <Link to="/" className="hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/" className="hover:text-accent transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
