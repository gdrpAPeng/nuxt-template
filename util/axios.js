import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:8081',
  timeout: 10000,
})

instance.interceptors.request.use(function(config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function(res) {
  return res
}, function(error) {
  const { config, response } = error
  if (response) {
    console.log(config)
  } else {
    console.log(config)
  }
  return Promise.reject(error)
})

export default instance