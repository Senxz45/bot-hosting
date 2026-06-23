import { Bell, Lock, Palette, LogOut } from 'lucide-react'
import { useState } from 'react'
import useAuthStore from '../stores/authStore'

const Settings = ({ onLogout }) => {
  const [notifications, setNotifications] = useState(true)
  const [twoFactor, setTwoFactor] = useState(false)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    onLogout?.()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Notification Settings */}
      <div className="card-dark">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-neon-blue" />
            <div>
              <h3 className="font-bold">Notifications</h3>
              <p className="text-sm text-gray-400">Receive alerts for bot activities</p>
            </div>
          </div>
          <label className="relative inline-flex cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-blue"></div>
          </label>
        </div>
      </div>

      {/* Security Settings */}
      <div className="card-dark">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-neon-purple" />
            <div>
              <h3 className="font-bold">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-400">Add an extra layer of security</p>
            </div>
          </div>
          <label className="relative inline-flex cursor-pointer">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={(e) => setTwoFactor(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neon-purple"></div>
          </label>
        </div>
      </div>

      {/* API Keys */}
      <div className="card-dark">
        <h3 className="font-bold mb-4">API Keys</h3>
        <div className="space-y-3">
          <div className="bg-dark-bg p-3 rounded-lg flex justify-between items-center">
            <code className="text-neon-blue">sk_live_51234567890abcdef</code>
            <button className="text-sm px-3 py-1 rounded bg-neon-blue/20 text-neon-blue hover:bg-neon-blue/30">
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* Account Settings */}
      <div className="card-dark">
        <h3 className="font-bold mb-4">Account</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-3 border-b border-gray-700">
            <span>Email</span>
            <span className="text-gray-400">user@example.com</span>
          </div>
          <div className="flex justify-between items-center py-3">
            <span>Plan</span>
            <span className="text-neon-blue font-semibold">Pro</span>
          </div>
        </div>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full px-6 py-3 rounded-lg font-semibold bg-red-500/20 text-red-400 hover:bg-red-500/30 flex items-center justify-center gap-2"
      >
        <LogOut size={20} />
        Logout
      </button>
    </div>
  )
}

export default Settings
