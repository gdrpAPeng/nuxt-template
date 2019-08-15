
/*
 * @Author: APeng 
 * @Date: 2019-08-08 10:43:27 
 * @Last Modified by: APeng
 * @Last Modified time: 2019-08-14 11:56:13
 */
export default function({ store }) {
  console.log(store.state, 'test==================')
  if(process.client) {
    console.log(store.state, 'test client==================')
  }
  if(process.server) {
    console.log(store.state, 'test server==================')
  }
    
}