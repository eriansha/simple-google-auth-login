
class AuthService {

  static login() {
    localStorage.setItem('login', true)
  }

  static logout() {
    localStorage.setItem('login', false)
  }

  static isLoggedIn() {
    const isLoggedIn = localStorage.getItem('login')
    return JSON.parse(isLoggedIn)
  }
}

export default AuthService