import axios from 'axios'
class HttpClient {
  constructor(client) {
    this.client = client
  }
  async get(url, params, headers = {}) {
    const response = await this.client.get(url, {params, headers })
      .catch((err) => {
        throw new err
      })
    return response.data
  }
  
  async post(url, body, headers = {}) {
    const response = await this.client.post(url, body, {headers })
      .catch((err) => {
        throw new err
      })
    return response.data
  }
  async put(url, body, headers = {}) {
    const response = await this.client.put(url, body, { headers })
      .catch((err) => {
        throw new err
      })
    return response.data
  }
  async delete(url, headers = {}) {
    const response = await this.client.delete(url, { headers })
      .catch((err) => {
        throw new err
      })
    return response.data
  }
}

export default new HttpClient(axios)