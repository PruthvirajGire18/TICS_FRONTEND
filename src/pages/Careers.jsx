import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiBriefcase, FiMapPin, FiClock, FiUpload } from 'react-icons/fi'
import { careersAPI } from '../services/api'

const Careers = () => {
  const [jobs, setJobs] = useState([])
  const [selectedJob, setSelectedJob] = useState(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  })
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await careersAPI.getJobs()
      // Backend returns { success: true, data: jobs }
      setJobs(response.data.data || response.data || [])
    } catch (error) {
      console.error('Error fetching jobs:', error)
      // Fallback data if API fails
      setJobs([
        {
          _id: '1',
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          location: 'Remote / New York, NY',
          type: 'Full-time',
          description: 'We are looking for an experienced Full Stack Developer to join our team.',
          requirements: [
            '5+ years of experience in web development',
            'Proficiency in React, Node.js, and MongoDB',
            'Strong problem-solving skills',
            'Experience with cloud platforms (AWS/Azure)'
          ]
        },
        {
          _id: '2',
          title: 'UI/UX Designer',
          department: 'Design',
          location: 'San Francisco, CA',
          type: 'Full-time',
          description: 'Join our design team to create beautiful and intuitive user experiences.',
          requirements: [
            '3+ years of UI/UX design experience',
            'Proficiency in Figma, Adobe XD',
            'Strong portfolio showcasing design skills',
            'Understanding of user research methodologies'
          ]
        },
        {
          _id: '3',
          title: 'Cloud Solutions Architect',
          department: 'Engineering',
          location: 'Remote',
          type: 'Full-time',
          description: 'Design and implement scalable cloud infrastructure solutions.',
          requirements: [
            '7+ years of cloud architecture experience',
            'Expertise in AWS, Azure, or GCP',
            'Kubernetes and Docker experience',
            'Strong understanding of DevOps practices'
          ]
        }
      ])
    } finally {
      setFetching(false)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    })
  }

  const handleApply = (job) => {
    setSelectedJob(job)
    setFormData({
      ...formData,
      position: job.title
    })
    setShowApplicationForm(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setSubmitStatus(null)

    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('phone', formData.phone)
    formDataToSend.append('position', formData.position)
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume)
    }

    try {
      await careersAPI.applyJob(formDataToSend)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        resume: null
      })
      setTimeout(() => {
        setShowApplicationForm(false)
        setSubmitStatus(null)
        setSelectedJob(null)
      }, 3000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error submitting application:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pt-20">
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
              Join Our <span className="gradient-text-accent bg-clip-text text-transparent bg-gradient-to-r from-accent via-white to-accent">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light">
              Build your career with TICS and be part of the digital transformation journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Listings - Premium Cards */}
      <section className="section-padding bg-cloud-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-heading font-black mb-6">
              Open <span className="gradient-text-accent">Positions</span>
            </h2>
            <p className="text-xl text-cloud-dark/70 max-w-3xl mx-auto font-light">
              Explore exciting career opportunities with TICS
            </p>
          </motion.div>

          {fetching ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              <p className="mt-4 text-gray-600">Loading job openings...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No open positions at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-6">
              {jobs.map((job, index) => (
                <motion.div
                  key={job._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-10 group cursor-pointer card-3d hover:shadow-premium-lg transition-all duration-500"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-heading font-bold text-cloud-dark group-hover:text-primary transition-colors">{job.title}</h3>
                        <span className="bg-gradient-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-glow">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-6 text-cloud-dark/70 mb-6">
                        <div className="flex items-center gap-2">
                          <FiMapPin className="text-accent" />
                          <span className="font-medium">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FiClock className="text-accent" />
                          <span className="font-medium">{job.type}</span>
                        </div>
                      </div>
                      <p className="text-cloud-dark/80 mb-6 leading-relaxed text-lg font-light">{job.description}</p>
                      {job.requirements && (
                        <div>
                          <h4 className="font-semibold mb-2">Key Requirements:</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li key={idx}>{req}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="md:ml-6">
                      <button
                        onClick={() => handleApply(job)}
                        className="btn-primary whitespace-nowrap"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-3xl font-heading font-bold">Apply for Position</h2>
                {selectedJob && (
                  <p className="text-primary font-medium mt-1">{selectedJob.title}</p>
                )}
              </div>
              <button
                onClick={() => {
                  setShowApplicationForm(false)
                  setSubmitStatus(null)
                  setSelectedJob(null)
                }}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6">
                Thank you for your application! We'll review it and get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-lg mb-6">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
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
                  <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Position *</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Resume (PDF/DOC) *
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 btn-secondary cursor-pointer">
                    <FiUpload />
                    {formData.resume ? formData.resume.name : 'Choose File'}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="hidden"
                    />
                  </label>
                  {formData.resume && (
                    <span className="text-sm text-gray-600">{formData.resume.name}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-2">Maximum file size: 5MB</p>
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary flex-1"
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowApplicationForm(false)
                    setSubmitStatus(null)
                    setSelectedJob(null)
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

export default Careers

