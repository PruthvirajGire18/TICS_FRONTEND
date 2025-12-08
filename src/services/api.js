import axios from 'axios'

// Get API URL from environment variable
// IMPORTANT: Set VITE_API_URL in Netlify environment variables!
// Go to: Site settings > Build & deploy > Environment variables
// Add: VITE_API_URL = https://your-backend-url.com/api
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Warn if API URL is not set in production
if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
  console.error('❌ VITE_API_URL is not set in production!')
  console.error('   Please set it in Netlify:')
  console.error('   1. Go to Site settings > Build & deploy > Environment variables')
  console.error('   2. Add: VITE_API_URL = https://your-backend-url.onrender.com/api')
  console.error('      (Replace with your actual deployed backend URL)')
  console.error('   3. Redeploy your site')
}

// Warn if using localhost in production
if (import.meta.env.PROD && API_URL.includes('localhost')) {
  console.warn('⚠️ You are using localhost API URL in production!')
  console.warn('   This will not work. Please set VITE_API_URL to your deployed backend URL.')
  console.warn('   Example: https://tics-backend.onrender.com/api')
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
      if (import.meta.env.PROD) {
        if (API_URL.includes('localhost')) {
          console.error('   ⚠️ You are using localhost in production!')
          console.error('   This will not work. Please:')
          console.error('   1. Deploy your backend to Render/Railway/etc')
          console.error('   2. Set VITE_API_URL in Netlify environment variables')
          console.error('   3. Redeploy your frontend')
        } else {
          console.error('   ⚠️ Backend might be down or CORS is not configured correctly')
          console.error('   Check if your backend is deployed and running')
          console.error('   Verify CORS settings allow:', window.location.origin)
        }
      }
    } else if (error.response?.status === 0 || error.code === 'ERR_CORS') {
      console.error('❌ CORS Error: Backend is blocking this origin')
      console.error('   Make sure backend CORS allows:', window.location.origin)
      console.error('   Backend should allow:', 'https://ticss.netlify.app')
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

