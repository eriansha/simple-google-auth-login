import axios from 'axios'

const LoginsApi = {

  /**
   * Verify if usesr is valid by use email and password. 
   * return `_session_id` if valid
   * @param {String} email User's email
   * @param {String} password User's password
   */
  academyLogin: async ({ email, password }) => {
    const payload = { 
      email: email, 
      password: password 
    }
    const url = `${process.env.API_URL_V1}/users/logins/academy`
    const response = axios.post(url, payload)
    return response
  },

  /**
   * Verify if Google `tokenId` is valid. 
   * If user not exists, it will automatically register new user.
   * return `_session_id` if valid
   * @param {String} tokenId Goolgle Token ID
   */
  googleLogin: async (tokenId) => {
    const url = `${process.env.API_URL_V1}/users/logins/google`
    const response = axios.post(url, {} , {
      headers: { Authorization: `Bearer ${tokenId}`}
    })
    return response
  }
}

export default LoginsApi