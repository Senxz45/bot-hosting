import { useState } from 'react'
import { Eye, EyeOff, LogIn } from 'lucide-react'
import useAuthStore from '../stores/authStore'

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const login = useAuthStore((state) => state.login)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      login(email, password)
      setLoading(false)
      onSuccess?.()
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg to-dark-card flex items-center justify-center p-4">
      <div className="card-dark max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">BotHost</h1>
          <p className="text-gray-400">Futuristic Bot Hosting Platform</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-neon-blue"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Demo credentials: test@example.com / password
        </p>
      </div>
    </div>
  )
}

export default Login
