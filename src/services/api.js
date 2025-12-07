import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const contactAPI = {
  submitMessage: (data) => api.post('/contact', data)
}

export const careersAPI = {
  getJobs: () => api.get('/careers/jobs'),
  applyJob: (formData) => api.post('/careers/apply', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export const servicesAPI = {
  requestProposal: (data) => api.post('/services/proposal', data)
}

export const adminAPI = {
  login: (credentials) => api.post('/admin/login', credentials),
  getContactMessages: () => api.get('/admin/contacts'),
  getJobApplications: () => api.get('/admin/applications'),
  downloadResume: (filename) => api.get(`/admin/resume/${filename}`, { responseType: 'blob' })
}

export default api

