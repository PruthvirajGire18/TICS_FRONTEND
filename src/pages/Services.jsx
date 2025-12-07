import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, FiSmartphone, FiCloud, FiShield, FiLayers,
  FiCheck, FiArrowRight, FiZap, FiTrendingUp
} from 'react-icons/fi'
import { servicesAPI } from '../services/api'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [showProposalForm, setShowProposalForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const services = [
    {
      id: 'ai-software',
      icon: FiCode,
      title: 'AI & Software Development',
      description: 'Cutting-edge AI solutions and custom software development tailored to your business needs',
      features: [
        'AI Integration & Development',
        'Custom Software Solutions',
        'Machine Learning Models',
        'Enterprise Applications',
        'API Development',
        'System Architecture'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS', 'Docker']
    },
    {
      id: 'staff-augmentation',
      icon: FiZap,
      title: 'Staff Augmentation',
      description: 'Scale up, not upskill – get the right talent now to fill skill gaps and accelerate projects',
      features: [
        'Expert Talent On-Demand',
        'Flexible Engagement Models',
        'Quick Team Scaling',
        'Skill Gap Filling',
        'Project-Based Hiring',
        'Long-term Partnerships'
      ],
      technologies: ['Full Stack', 'DevOps', 'Cloud', 'AI/ML', 'Mobile', 'QA']
    },
    {
      id: 'cybersecurity',
      icon: FiShield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business from evolving cyber threats with comprehensive security services',
      features: [
        'Risk Assessments',
        'Security Implementation',
        'Threat Monitoring',
        'Data Protection Protocols',
        'Compliance Management',
        '24/7 Security Support'
      ],
      technologies: ['SIEM', 'Firewall', 'Encryption', 'MFA', 'OWASP']
    },
    {
      id: 'cloud',
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Embrace the cloud with tailored solutions that improve scalability, flexibility, and cost-effectiveness',
      features: [
        'Cloud Migration',
        'Cloud Management',
        'Cloud Strategy',
        'Multi-Cloud Solutions',
        'Cost Optimization',
        'Scalable Infrastructure'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 'it-planning',
      icon: FiLayers,
      title: 'Strategic IT Planning',
      description: 'Align your IT strategy with business goals and optimize technology investments for maximum impact',
      features: [
        'Technology Assessment',
        'IT Roadmap Development',
        'Investment Optimization',
        'Digital Strategy',
        'Technology Consulting',
        'Business Alignment'
      ],
      technologies: ['Strategy', 'Architecture', 'Planning', 'Consulting']
    },
    {
      id: 'systems-integration',
      icon: FiCode,
      title: 'Systems Integration',
      description: 'Streamline operations by integrating diverse systems and applications seamlessly',
      features: [
        'API Integration',
        'Legacy System Integration',
        'Data Synchronization',
        'Workflow Automation',
        'System Connectivity',
        'Seamless Operations'
      ],
      technologies: ['REST APIs', 'SOAP', 'Middleware', 'ETL', 'Integration Platforms']
    },
    {
      id: 'it-support',
      icon: FiShield,
      title: 'IT Support & Management',
      description: 'Ensure smooth IT operations with ongoing support and management services',
      features: [
        'Technical Support',
        'Network Management',
        'IT Helpdesk Services',
        'System Maintenance',
        'Performance Monitoring',
        'Proactive Management'
      ],
      technologies: ['Helpdesk', 'Monitoring', 'Ticketing', 'Remote Support']
    },
    {
      id: 'data-analytics',
      icon: FiTrendingUp,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable insights to make informed decisions and optimize performance',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Reporting & Dashboards',
        'Data Warehousing',
        'Performance Optimization'
      ],
      technologies: ['Power BI', 'Tableau', 'Python', 'SQL', 'Big Data']
    },
    {
      id: 'digital-transformation',
      icon: FiLayers,
      title: 'Digital Transformation',
      description: 'Stay ahead by embracing innovative technologies that drive efficiency and enhance customer experiences',
      features: [
        'Digital Strategy',
        'Process Automation',
        'Customer Experience',
        'Innovation Adoption',
        'Efficiency Optimization',
        'Future-Ready Solutions'
      ],
      technologies: ['Automation', 'AI/ML', 'Cloud', 'IoT', 'Blockchain']
    },
    {
      id: 'engagement-design',
      icon: FiLayers,
      title: 'Engagement Design',
      description: 'Create captivating user experiences through thoughtful design and user journey optimization',
      features: [
        'User Interface Design',
        'User Journey Mapping',
        'Design Framework',
        'Sketch & Mockup',
        'Web and Mobile Applications',
        'iOS and Android Platforms'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
    },
    {
      id: 'branding-visuals',
      icon: FiLayers,
      title: 'Branding Visuals',
      description: 'Build a strong brand identity with compelling visuals that resonate with your audience',
      features: [
        'Brand Identity Design',
        'Visual Design System',
        'Logo & Brand Guidelines',
        'Marketing Materials',
        'Brand Strategy',
        'Visual Communication'
      ],
      technologies: ['Adobe Creative Suite', 'Figma', 'Illustrator', 'Photoshop']
    },
    {
      id: 'design-development',
      icon: FiCode,
      title: 'Design & Development',
      description: 'End-to-end design and development services from concept to deployment',
      features: [
        'UI/UX Design',
        'Frontend Development',
        'Backend Development',
        'Full-Stack Solutions',
        'Responsive Design',
        'Performance Optimization'
      ],
      technologies: ['React', 'Node.js', 'Figma', 'MongoDB', 'AWS']
    },
    {
      id: 'ecommerce',
      icon: FiSmartphone,
      title: 'eCommerce Development',
      description: 'Build powerful eCommerce platforms that drive sales and enhance customer experience',
      features: [
        'Online Store Development',
        'Payment Integration',
        'Shopping Cart Solutions',
        'Inventory Management',
        'Order Processing',
        'Mobile Commerce'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js']
    }
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setShowProposalForm(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleProposalSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    try {
      await servicesAPI.requestProposal({
        ...formData,
        service: selectedService?.title || formData.service
      })
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      })
      setTimeout(() => {
        setShowProposalForm(false)
        setSubmitStatus(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting proposal:', error)
    } finally {
      setLoading(false)
    }
  }

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
              Our <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Comprehensive IT solutions engineered for enterprise excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Premium Modular Cards */}
      <section className="section-padding bg-cloud-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-accent-glow rounded-full blur-3xl opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Comprehensive <span className="gradient-text-accent">Solutions</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              End-to-end IT services designed to drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isSelected = selectedService?.id === service.id
              const gradients = [
                'from-blue-500 via-cyan-500 to-accent',
                'from-purple-500 via-pink-500 to-accent',
                'from-orange-500 via-red-500 to-accent',
                'from-indigo-500 via-blue-500 to-accent',
                'from-green-500 via-emerald-500 to-accent',
                'from-yellow-500 via-orange-500 to-accent',
                'from-pink-500 via-rose-500 to-accent',
                'from-teal-500 via-cyan-500 to-accent',
                'from-violet-500 via-purple-500 to-accent'
              ]
              const gradient = gradients[index % gradients.length]
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -15, rotateY: 5 }}
                  onClick={() => handleServiceClick(service)}
                  className={`glass-card p-10 group cursor-pointer card-3d relative overflow-hidden ${
                    isSelected ? 'ring-2 ring-accent shadow-glow-accent' : ''
                  }`}
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-24 h-24 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center mb-8 shadow-glow-lg group-hover:shadow-glow-accent transition-all duration-500`}
                    >
                      <Icon className="text-5xl text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-heading font-bold mb-4 text-cloud-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cloud-dark/70 mb-6 leading-relaxed text-lg font-light">{service.description}</p>
                    
                    {/* Quick Features Preview */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-cloud-dark/60">
                          <FiCheck className="text-accent flex-shrink-0 text-sm" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 text-primary font-semibold group-hover:gap-5 transition-all">
                      Learn More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight className="text-xl" />
                      </motion.span>
                    </div>
                  </div>

                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 ${
                    isSelected ? 'border-accent/60' : 'border-transparent group-hover:border-accent/40'
                  }`}></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      {selectedService && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="flex items-center mb-6">
                  {(() => {
                    const Icon = selectedService.icon
                    return (
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                        <Icon className="text-3xl text-white" />
                      </div>
                    )
                  })()}
                  <h2 className="text-4xl font-heading font-bold">{selectedService.title}</h2>
                </div>
                <p className="text-xl text-gray-600 mb-8">{selectedService.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <FiCheck className="text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-semibold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowProposalForm(true)
                    setFormData({ ...formData, service: selectedService.title })
                  }}
                  className="btn-primary w-full md:w-auto"
                >
                  Request Proposal
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Proposal Form Modal */}
      {showProposalForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-heading font-bold">Request Proposal</h2>
              <button
                onClick={() => {
                  setShowProposalForm(false)
                  setSubmitStatus(null)
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Thank you! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleProposalSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Service *</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex-1"
                >
                  {loading ? 'Submitting...' : 'Submit Request'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowProposalForm(false)
                    setSubmitStatus(null)
                  }}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Services

