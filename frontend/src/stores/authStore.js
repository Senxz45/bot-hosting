import create from 'zustand'

const useAuthStore = create((set) => ({
  user: null,
  token: localStorage.getItem('token') || null,
  isAuthenticated: !!localStorage.getItem('token'),
  
  login: (email, password) => {
    const token = 'mock-token-' + Date.now()
    localStorage.setItem('token', token)
    set({
      user: { email, id: 1 },
      token,
      isAuthenticated: true
    })
  },
  
  logout: () => {
    localStorage.removeItem('token')
    set({
      user: null,
      token: null,
      isAuthenticated: false
    })
  },
  
  setUser: (user) => set({ user })
}))

export default useAuthStore
