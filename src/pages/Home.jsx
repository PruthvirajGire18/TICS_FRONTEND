import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  FiCode, FiSmartphone, FiCloud, FiShield, FiLayers,
  FiZap, FiGlobe, FiTrendingUp, FiAward, FiArrowRight, FiCheck
} from 'react-icons/fi'
import { FaReact, FaNode, FaAws, FaDocker, FaPython, FaJava } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiKubernetes } from 'react-icons/si'

const Home = () => {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  // Keep hero visible longer - fade to 0.5 instead of 0, and extend scroll range
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.5])
  // Stats should stay visible even when hero fades
  const statsOpacity = useTransform(scrollY, [0, 600], [1, 1])

  const services = [
    {
      icon: FiCode,
      title: 'AI & Software Development',
      description: 'Cutting-edge AI solutions and custom software development engineered for enterprise excellence',
      gradient: 'from-blue-500 via-cyan-500 to-accent',
      features: ['Machine Learning', 'Custom Software', 'AI Integration', 'Enterprise Apps']
    },
    {
      icon: FiZap,
      title: 'Staff Augmentation',
      description: 'Scale up instantly with expert talent. No upskilling needed—get the right skills now',
      gradient: 'from-purple-500 via-pink-500 to-accent',
      features: ['Expert Talent', 'Quick Scaling', 'Flexible Models', 'Skill Matching']
    },
    {
      icon: FiCloud,
      title: 'Cloud Solutions',
      description: 'Embrace scalable cloud infrastructure that grows with your business needs',
      gradient: 'from-orange-500 via-red-500 to-accent',
      features: ['Cloud Migration', 'Multi-Cloud', 'Cost Optimization', 'Scalable Infrastructure']
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services protecting your digital assets and data',
      gradient: 'from-indigo-500 via-blue-500 to-accent',
      features: ['Risk Assessment', 'Threat Monitoring', 'Data Protection', '24/7 Support']
    },
    {
      icon: FiLayers,
      title: 'Digital Transformation',
      description: 'Future-ready solutions driving efficiency and exceptional customer experiences',
      gradient: 'from-green-500 via-emerald-500 to-accent',
      features: ['Digital Strategy', 'Process Automation', 'Innovation Adoption', 'Future-Ready']
    },
    {
      icon: FiTrendingUp,
      title: 'Data Analytics & BI',
      description: 'Transform data into actionable insights for informed decision-making',
      gradient: 'from-yellow-500 via-orange-500 to-accent',
      features: ['Business Intelligence', 'Predictive Analytics', 'Data Visualization', 'Performance Optimization']
    }
  ]

  const technologies = [
    { name: 'React', icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', icon: FaNode, color: '#339933' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Express', icon: SiExpress, color: '#000000' },
    { name: 'AWS', icon: FaAws, color: '#FF9900' },
    { name: 'Docker', icon: FaDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    { name: 'Python', icon: FaPython, color: '#3776AB' },
    { name: 'Java', icon: FaJava, color: '#ED8B00' },
    { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' }
  ]

  const testimonials = [
    {
      name: 'Youness L.',
      role: 'Client',
      content: 'Thanks to this agency, our website traffic grew by 50% in just three months. Their expertise in SEO and PPC has delivered real results. Highly recommended!',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Youness+L&background=003BA4&color=fff&size=200'
    },
    {
      name: 'Emily T.',
      role: 'Client',
      content: 'Our social media engagement increased by 40%, and brand awareness has soared. This team knows how to deliver impactful results.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=Emily+T&background=00A2FF&color=fff&size=200'
    },
    {
      name: 'James R.',
      role: 'Client',
      content: 'After a year of working together, our paid campaigns\' ROI has improved significantly. The team is proactive, communicative, and always focused on results.',
      rating: 5,
      avatar: 'https://ui-avatars.com/api/?name=James+R&background=00FFC4&color=000&size=200'
    }
  ]

  const partners = [
    'Microsoft', 'Google Cloud', 'Amazon AWS', 'IBM', 'Oracle', 'Salesforce'
  ]

  const stats = [
    { value: '98%+', label: 'Client Retention Rate', icon: FiAward },
    { value: '500+', label: 'Projects Delivered', icon: FiTrendingUp },
    { value: '5 ★', label: 'Client Satisfaction', icon: FiAward },
    { value: '100%', label: 'Quality Assured', icon: FiCheck }
  ]

  const usps = [
    { icon: FiAward, title: 'Award-Winning Agency', desc: 'Focus on People, Culture, and Technology', color: 'text-accent' },
    { icon: FiZap, title: 'Staff Augmentation', desc: 'Scale up with the right talent instantly', color: 'text-primary' },
    { icon: FiTrendingUp, title: 'Proven Results', desc: '98%+ client retention rate', color: 'text-secondary' },
    { icon: FiGlobe, title: 'Digital Excellence', desc: 'Empowering brands to thrive online', color: 'text-accent' }
  ]

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section - Visionary Premium Experience */}
      <motion.section 
        style={{ opacity: heroOpacity }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Network Background */}
        <div className="absolute inset-0 network-bg opacity-30"></div>
        
        {/* Gradient Background with Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
          <motion.div
            style={{ y: heroY }}
            className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent"
          />
        </div>

        {/* Floating Tech Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full blur-sm"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Central Glow Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-accent-glow rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>

        <div className="container-custom relative z-10 section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
            className="max-w-6xl mx-auto text-center"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-xl rounded-full text-accent text-sm font-semibold border-2 border-accent/40 shadow-glow-accent">
                <FiZap className="text-accent" />
                AI Software Development Company
              </span>
            </motion.div>

            {/* Hero Headline - Bold & Premium */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-7xl md:text-8xl lg:text-9xl font-heading font-black mb-8 text-white leading-[1.1] tracking-tight"
            >
              <span className="block">We Help You</span>
              <span className="block bg-gradient-to-r from-accent via-white to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Align IT Strategy
              </span>
              <span className="block">with Business Goals</span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Our experts assess your current technology landscape and provide a roadmap to optimize your IT investments for maximum impact.
            </motion.p>

            {/* Premium CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link to="/contact" className="btn-primary group">
                <span className="relative z-10 flex items-center gap-3">
                  Get Solutions
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight />
                  </motion.span>
                </span>
              </Link>
              <Link to="/contact" className="btn-secondary group">
                <span className="relative z-10">Schedule Call</span>
              </Link>
            </motion.div>

            {/* Stats Bar - Premium Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ opacity: 1, position: 'relative', zIndex: 30 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card p-6 text-center card-3d"
                  >
                    <Icon className="text-3xl text-accent mx-auto mb-3" />
                    <div className="text-4xl md:text-5xl font-heading font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/80 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Transition Spacer - ensures smooth visibility between sections */}
      <div className="h-10 bg-white relative z-20"></div>

      {/* Why Choose Us - Premium Glass Cards */}
      <section className="section-padding relative bg-white -mt-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cloud-white/50 via-white to-cloud-white/50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-cloud-dark">
              Why Choose <span className="gradient-text-accent">TICS</span>?
            </h2>
            <p className="text-2xl text-cloud-dark/80 max-w-3xl mx-auto font-light">
              Excellence through innovation, expertise, and unwavering dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usps.map((usp, index) => {
              const Icon = usp.icon
              return (
                <motion.div
                  key={usp.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="glass-card p-10 group cursor-pointer card-3d glow-effect"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mb-6 shadow-glow-lg`}
                  >
                    <Icon className={`text-4xl ${usp.color}`} />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-cloud-dark group-hover:text-primary transition-colors">
                    {usp.title}
                  </h3>
                  <p className="text-cloud-dark/90 leading-relaxed font-medium">{usp.desc}</p>
                  <div className="mt-6 h-1 w-0 bg-gradient-accent group-hover:w-full transition-all duration-700 rounded-full"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section - Modular Premium Cards */}
      <section className="section-padding bg-gradient-to-b from-white via-cloud-white/50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-accent-glow rounded-full blur-3xl opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-cloud-dark">
              Our <span className="gradient-text-accent">Services</span>
            </h2>
            <p className="text-2xl text-cloud-dark/80 max-w-3xl mx-auto font-light">
              Comprehensive IT solutions engineered for enterprise excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -15, rotateY: 5 }}
                  className="glass-card p-10 group relative overflow-hidden cursor-pointer card-3d"
                >
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mb-8 shadow-glow-lg group-hover:shadow-glow-accent transition-all duration-500`}
                    >
                      <Icon className="text-5xl text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-heading font-bold mb-4 text-cloud-dark group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cloud-dark/90 mb-6 leading-relaxed text-lg font-medium">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-cloud-dark/90">
                          <FiCheck className="text-accent flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-3 text-primary font-semibold group-hover:gap-5 transition-all"
                    >
                      Learn More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FiArrowRight className="text-xl" />
                      </motion.span>
                    </Link>
                  </div>

                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-accent/40 transition-all duration-700"></div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technologies - Auto-Scroll Marquee */}
      <section className="section-padding bg-cloud-dark relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-10"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-white">
              Technologies We <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-secondary">Master</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-light">
              Cutting-edge tools and frameworks powering innovation
            </p>
          </motion.div>

          {/* Infinite Marquee */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-slide-fast" style={{ width: 'max-content' }}>
              {[...technologies, ...technologies, ...technologies].map((tech, index) => {
                const Icon = tech.icon
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{ scale: 1.15, y: -8 }}
                    className="flex-shrink-0 glass-card p-8 min-w-[160px] flex flex-col items-center justify-center group cursor-pointer"
                  >
                    <Icon 
                      className="text-6xl mb-4 transition-transform group-hover:rotate-12 group-hover:scale-110" 
                      style={{ color: tech.color }}
                    />
                    <span className="text-white/90 font-semibold text-sm">{tech.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Glassmorphic Slider */}
      <section className="section-padding relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-cloud-white/30 via-white to-cloud-white/30"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-cloud-dark">
              Trusted by <span className="gradient-text-accent">Leaders</span>
            </h2>
            <p className="text-2xl text-cloud-dark/80 max-w-3xl mx-auto font-light">
              What industry leaders say about working with TICS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="glass-card p-10 relative overflow-hidden group card-3d"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-accent-glow rounded-full blur-3xl opacity-20"></div>
                
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="text-accent text-2xl mr-1"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  
                  <p className="text-cloud-dark/90 mb-8 italic text-lg leading-relaxed font-medium">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-3 border-accent/30 shadow-glow-accent"
                    />
                    <div>
                      <p className="font-bold text-cloud-dark text-lg">{testimonial.name}</p>
                      <p className="text-sm text-cloud-dark/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners - Premium Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-heading font-bold text-cloud-dark mb-12">
              Trusted Partners
            </h3>
          </motion.div>

          <div className="flex gap-8 items-center justify-center flex-wrap">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5 }}
                className="glass-card px-10 py-6 text-center min-w-[180px]"
              >
                <p className="text-cloud-dark font-bold text-lg">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Final */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary">
          <div className="absolute inset-0 network-bg opacity-20"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-accent-glow rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-heading font-black mb-10 text-white leading-tight">
              Ready to Transform
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent animate-shimmer bg-[length:200%_auto]">
                Your Business?
              </span>
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              Let's discuss how TICS can transform your business with cutting-edge technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-cloud-white inline-flex items-center gap-3">
                <span>Get Solutions</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiArrowRight />
                </motion.span>
              </Link>
              <Link to="/contact" className="btn-secondary border-white/40 text-white hover:bg-white/20">
                Schedule Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
