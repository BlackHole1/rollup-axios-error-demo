import axios from 'axios'
export default class Demo {
  http() {
    axios.get('https://raw.githubusercontent.com/BlackHole1/JavaScript-Polyfill/master/Array/from.js')
      .then(data => {
        console.log('success')
        console.log(data)
      })
      .catch(data => {
        console.log('error')
        console.log(data)
      })
  }
}
