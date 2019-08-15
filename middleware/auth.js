/*
 * @Author: APeng 
 * @Date: 2019-08-08 10:43:27 
 * @Last Modified by: APeng
 * @Last Modified time: 2019-08-14 12:07:54
 */
import Cookie from 'js-cookie'
export default function({ req, redirect, route }) {
  let path, token
  if(process.client) {
    path = route.path
    token = Cookie.get('token') || ''
  }
  if(process.server) {
    path = req.originalUrl
    token = req.cookies.token || ''
  }
    
  // APeng -- 暂时注释
  if(path.indexOf('/login') === -1 && !token) {
    redirect(`/login?origin=${encodeURIComponent(path)}`)
  }
    
}