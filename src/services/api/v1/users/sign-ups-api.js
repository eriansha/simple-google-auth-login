import axios from 'axios'

const SignUpsApi = {

  /**
   * Sign up using new email and password
   * return `_session_id` if valid
   * @param {String} name User's name
   * @param {String} email User's email
   * @param {String} password User's password
   * @param {String} passowordConfirmation password confirmation
   */
  academyLogin: async ({
    name,
    email, 
    password,
    passowordConfirmation
  }) => {
    const payload =  { 
      name: name,
      email: email,
      password: password,
      password_confirmation: passowordConfirmation 
    }
    const url = `${process.env.API_URL_V1}/users/signups/academy`
    const response = axios.post(url, payload)
    return response
  },
}

export default SignUpsApi