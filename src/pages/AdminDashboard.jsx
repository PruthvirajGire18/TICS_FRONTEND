import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMail, FiBriefcase, FiDownload, FiLogOut, FiMessageSquare } from 'react-icons/fi'
import { adminAPI } from '../services/api'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('contacts')
  const [contactMessages, setContactMessages] = useState([])
  const [jobApplications, setJobApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin/login')
      return
    }
    fetchData()
  }, [navigate])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [contactsRes, applicationsRes] = await Promise.all([
        adminAPI.getContactMessages(),
        adminAPI.getJobApplications()
      ])
      // Backend returns { success: true, data: [...] }
      setContactMessages(contactsRes.data.data || contactsRes.data || [])
      setJobApplications(applicationsRes.data.data || applicationsRes.data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  const handleDownloadResume = async (filename) => {
    try {
      const response = await adminAPI.downloadResume(filename)
      const url = window.URL.createObjectURL(new Blob([response.data]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', filename)
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error('Error downloading resume:', error)
      alert('Failed to download resume')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">Admin Dashboard</h1>
              <p className="text-gray-600">Manage contact messages and job applications</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-4 md:mt-0 flex items-center gap-2 text-red-600 hover:text-red-700 font-medium"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'contacts'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <FiMessageSquare />
                Contact Messages ({contactMessages.length})
              </div>
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                activeTab === 'applications'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <FiBriefcase />
                Job Applications ({jobApplications.length})
              </div>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Contact Messages</h2>
              {contactMessages.length === 0 ? (
                <div className="text-center py-12">
                  <FiMail className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No contact messages yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {contactMessages.map((message, index) => (
                    <motion.div
                      key={message._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{message.name}</h3>
                            <span className="text-sm text-gray-500">{message.email}</span>
                            {message.phone && (
                              <span className="text-sm text-gray-500">• {message.phone}</span>
                            )}
                          </div>
                          <p className="text-gray-700 mb-2">{message.message}</p>
                          <p className="text-sm text-gray-500">{formatDate(message.createdAt)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Job Applications</h2>
              {jobApplications.length === 0 ? (
                <div className="text-center py-12">
                  <FiBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No job applications yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {jobApplications.map((application, index) => (
                    <motion.div
                      key={application._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{application.name}</h3>
                            <span className="text-sm text-gray-500">{application.email}</span>
                            {application.phone && (
                              <span className="text-sm text-gray-500">• {application.phone}</span>
                            )}
                          </div>
                          <p className="text-primary font-medium mb-2">Position: {application.position}</p>
                          <p className="text-sm text-gray-500 mb-4">{formatDate(application.createdAt)}</p>
                          {application.resumeURL && (
                            <button
                              onClick={() => handleDownloadResume(application.resumeURL)}
                              className="flex items-center gap-2 text-primary hover:text-primary-dark font-medium"
                            >
                              <FiDownload />
                              Download Resume
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

