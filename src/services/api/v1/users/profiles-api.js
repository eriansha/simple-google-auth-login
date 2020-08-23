import axios from 'axios'

const ProfilesApi = {

  /**
   * Get user detail
   */
  get: async () => {
    const url = `${process.env.API_URL_V1}/users/profiles`
    const response = axios.get(url)
    return response
  },
}

export default ProfilesApi