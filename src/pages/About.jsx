import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiBriefcase, FiGlobe, FiTarget, FiZap, FiHeart, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const stats = [
    { icon: FiUsers, value: '98%+', label: 'Client Retention Rate', color: 'text-accent' },
    { icon: FiBriefcase, value: '500+', label: 'Projects Delivered', color: 'text-primary' },
    { icon: FiAward, value: '5 ★', label: 'Client Satisfaction', color: 'text-accent' },
    { icon: FiGlobe, value: '100%', label: 'Quality Assured', color: 'text-secondary' }
  ]

  const timeline = [
    {
      year: '2015',
      title: 'Company Founded',
      description: 'TICS was established with a vision to revolutionize IT solutions and digital transformation',
      icon: FiZap
    },
    {
      year: '2017',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 company, marking our entry into enterprise solutions',
      icon: FiTarget
    },
    {
      year: '2019',
      title: 'International Expansion',
      description: 'Opened offices in 5 countries across 3 continents, establishing global presence',
      icon: FiGlobe
    },
    {
      year: '2021',
      title: 'Cloud Services Launch',
      description: 'Introduced comprehensive cloud solutions division with AWS, Azure, and GCP expertise',
      icon: FiTrendingUp
    },
    {
      year: '2023',
      title: 'AI Integration',
      description: 'Launched AI-powered solutions for enterprise clients, leading innovation in the industry',
      icon: FiAward
    }
  ]

  const values = [
    {
      icon: FiTarget,
      title: 'Your Success is Our Goal',
      description: 'We measure our achievements by the success of our clients. With a sharp focus on tangible results and unwavering quality, our mission is to craft digital solutions that leave a lasting impact.'
    },
    {
      icon: FiZap,
      title: 'Masters of Digital Innovation',
      description: 'At the heart of our agency lies a dedication to creativity and excellence. We specialize in designing digital experiences that not only meet your goals but elevate your brand to new heights.'
    },
    {
      icon: FiTrendingUp,
      title: 'Revolutionizing the Digital World',
      description: 'With a commitment to creativity and cutting-edge solutions, we help you navigate the ever-evolving digital landscape. Our expertise goes beyond expectations to amplify your brand\'s presence.'
    },
    {
      icon: FiHeart,
      title: 'Empowering Brands to Thrive Online',
      description: 'Our mission is clear: to guide brands to success in the digital era. Passionate about collaboration, we build strong partnerships and create personalized strategies that drive meaningful results.'
    }
  ]

  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: 'https://ui-avatars.com/api/?name=John+Doe&background=003BA4&color=fff&size=300',
      bio: 'Visionary leader with 15+ years in tech'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      image: 'https://ui-avatars.com/api/?name=Jane+Smith&background=00A2FF&color=fff&size=300',
      bio: 'Cloud architecture expert and innovation driver'
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Development',
      image: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=00FFC4&color=000&size=300',
      bio: 'Full-stack wizard and team builder'
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Design',
      image: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=003BA4&color=fff&size=300',
      bio: 'Award-winning UX designer and creative director'
    }
  ]

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
              About <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">TICS</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Award-winning AI and Software Development company with a focus on People, Culture, and Technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story - Visual Storytelling */}
      <section className="section-padding bg-cloud-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <h2 className="text-5xl md:text-6xl font-heading font-black mb-8">
                About Our <span className="gradient-text-accent">Agency</span>
              </h2>
              <div className="space-y-6 text-lg text-cloud-dark/80 leading-relaxed font-light">
                <p>
                  TICS is an <strong className="font-semibold text-cloud-dark">award-winning digital agency</strong> with a focus on our People, Culture, and Technology. We specialize in <strong className="font-semibold text-cloud-dark">Staff Augmentation</strong>, helping businesses scale up with the right talent instantly, without the need for upskilling.
                </p>
                <p>
                  We are <strong className="font-semibold text-cloud-dark">masters of digital innovation</strong>, dedicated to creativity and excellence. We specialize in designing digital experiences that not only meet your goals but elevate your brand to new heights.
                </p>
                <p>
                  With a commitment to <strong className="font-semibold text-cloud-dark">revolutionizing the digital world</strong>, we help you navigate the ever-evolving digital landscape. Our expertise goes beyond expectations to amplify your brand's presence and empower brands to thrive online.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="glass-card p-12 relative overflow-hidden glow-effect"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-accent-glow rounded-full blur-3xl opacity-30"></div>
              <div className="relative z-10">
                <h3 className="text-4xl font-heading font-black mb-8 text-cloud-dark">
                  Staff Augmentation
                </h3>
                <p className="text-2xl font-light text-cloud-dark/80 mb-6 leading-relaxed">
                  Scale up, not upskill – get the right talent now
                </p>
                <p className="text-lg text-cloud-dark/70 leading-relaxed mb-8">
                  Hiring external talent to temporarily augment an organization's existing workforce, typically to fill skill gaps or scale up projects. At TICS, we help you scale up with the right talent instantly.
                </p>
                <div className="flex items-center gap-3 text-accent font-semibold">
                  <FiZap className="text-2xl" />
                  <span>Instant Talent Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Our <span className="gradient-text-accent">Values</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass-card p-10 card-3d"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-glow-lg">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-cloud-dark">
                    {value.title}
                  </h3>
                  <p className="text-cloud-dark/70 leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
        <div className="absolute inset-0 network-bg opacity-20"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6 text-white">
              Our Numbers Speak
              <br />
              <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent to-white">
                for Themselves
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-card p-8 text-center card-3d"
                >
                  <Icon className={`text-4xl ${stat.color} mx-auto mb-4`} />
                  <div className="text-5xl md:text-6xl font-heading font-black text-white mb-3">
                    {stat.value}
                  </div>
                  <div className="text-white/80 font-medium text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline - Scroll Animation */}
      <section className="section-padding bg-cloud-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Our <span className="gradient-text-accent">Journey</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              Milestones that shaped our growth and innovation
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2"></div>

            {timeline.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring" }}
                  className={`relative mb-16 flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow-lg border-4 border-cloud-white"
                    >
                      <Icon className="text-2xl text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-20 md:ml-0`}>
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass-card p-8 card-3d"
                    >
                      <div className="text-4xl font-heading font-black text-primary mb-3">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-heading font-bold mb-3 text-cloud-dark">
                        {item.title}
                      </h3>
                      <p className="text-cloud-dark/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Our <span className="gradient-text-accent">Leadership</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              Meet the experts driving innovation at TICS
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="glass-card p-8 text-center card-3d group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6 mx-auto w-32 h-32"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-accent/30 shadow-glow-accent"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-2 text-cloud-dark">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-cloud-dark/60">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
