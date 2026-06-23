import { LayoutDashboard, Bot, Package, Settings, LogOut } from 'lucide-react'

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'bots', label: 'My Bots', icon: Bot },
    { id: 'deploy', label: 'Deploy', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <aside className="w-64 bg-white dark:bg-dark-card border-r border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold gradient-text">BotHost</h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">v1.0.0</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-card'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 font-medium">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
