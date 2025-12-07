import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { contactAPI } from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      await contactAPI.submitMessage(formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting message:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Address',
      content: '39th floor, Kohinoor Square, Ram Ganesh Gadkari Chowk, Dadar West, Dadar, Mumbai, Maharashtra 400028, India'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      content: '+91 22 4123 4567'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'info@tics.it.com'
    }
  ]

  return (
    <div>
      {/* Hero Section - Premium */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-20"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-6 leading-tight">
              Get In <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Premium */}
      <section className="section-padding bg-cloud-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-heading font-bold mb-8" data-aos="fade-up">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-card p-6 group cursor-pointer card-3d"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 shadow-glow-lg group-hover:shadow-glow-accent transition-all">
                        <Icon className="text-2xl text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2 text-cloud-dark">{info.title}</h3>
                      <p className="text-cloud-dark/70 leading-relaxed">{info.content}</p>
                    </motion.div>
                  )
                })}
              </div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="mt-8 glass-card p-8 bg-gradient-primary text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent-glow rounded-full blur-3xl opacity-30"></div>
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-2xl mb-4">Business Hours</h3>
                  <p className="mb-2 text-white/90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="mb-2 text-white/90">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-white/90">Sunday: Closed</p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form - Futuristic */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-10 md:p-12 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent-glow rounded-full blur-3xl opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 text-cloud-dark">
                    Send us a <span className="gradient-text-accent">Message</span>
                  </h2>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-6 mb-8 bg-gradient-to-r from-accent/20 to-secondary/20 border-2 border-accent/40"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow-accent"
                    >
                      <FiSend className="text-3xl text-cloud-dark" />
                    </motion.div>
                    <p className="text-center text-cloud-dark font-semibold text-lg">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="glass-card p-6 mb-8 bg-red-500/10 border-2 border-red-500/40"
                  >
                    <p className="text-center text-red-600 font-semibold">
                      Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-cloud-dark font-semibold mb-3 text-lg">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-cloud-gray/30 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-cloud-dark placeholder-cloud-dark/50 font-light"
                      />
                    </div>
                    <div>
                      <label className="block text-cloud-dark font-semibold mb-3 text-lg">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-cloud-gray/30 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-cloud-dark placeholder-cloud-dark/50 font-light"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cloud-dark font-semibold mb-3 text-lg">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-cloud-gray/30 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all text-cloud-dark placeholder-cloud-dark/50 font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-cloud-dark font-semibold mb-3 text-lg">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-cloud-gray/30 rounded-2xl focus:ring-2 focus:ring-accent focus:border-accent/50 transition-all resize-none text-cloud-dark placeholder-cloud-dark/50 font-light"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full flex items-center justify-center gap-3 text-lg py-5"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        ></motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="text-xl" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-heading font-semibold mb-4">Find Us on Map</h3>
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500">Map integration can be added here (Google Maps, Mapbox, etc.)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

