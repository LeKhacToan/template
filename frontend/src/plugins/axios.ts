import axios from 'axios'

const token: string = localStorage.getItem('token') || ''

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Authorization: token ? `Bearer ${token}` : ''
  }
})

export default api
