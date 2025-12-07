import axios from 'axios'

// Get API URL from environment variable
// IMPORTANT: Set VITE_API_URL in Netlify environment variables!
// Go to: Site settings > Build & deploy > Environment variables
// Add: VITE_API_URL = https://your-backend-url.com/api
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Warn if API URL is not set in production
if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
  console.error('⚠️ VITE_API_URL is not set!')
  console.error('   Please set it in Netlify:')
  console.error('   1. Go to Site settings > Build & deploy > Environment variables')
  console.error('   2. Add: VITE_API_URL = https://your-backend-url.com/api')
  console.error('   3. Redeploy your site')
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 second timeout
})

// Add response interceptor for better error messages
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
      console.error('❌ Network Error: Cannot connect to backend API')
      console.error('   Current API URL:', API_URL)
      if (import.meta.env.PROD && API_URL.includes('localhost')) {
        console.error('   ⚠️ You are using localhost in production!')
        console.error('   Please set VITE_API_URL in Netlify environment variables')
      }
    }
    return Promise.reject(error)
  }
)

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

