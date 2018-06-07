import axios from 'axios'

const api = {
  login (username, password) {
    let url = '/login/?username=' + username + '&password=' + password
    return axios.get(url)
  }
}

export default api
