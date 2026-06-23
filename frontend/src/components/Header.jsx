import { Moon, Sun, Bell, User } from 'lucide-react'

const Header = ({ darkMode, setDarkMode, currentPage }) => {
  const pageNames = {
    dashboard: 'Dashboard',
    bots: 'My Bots',
    deploy: 'Deploy',
    settings: 'Settings',
  }

  return (
    <header className="bg-white dark:bg-dark-card border-b border-gray-200 dark:border-gray-700 shadow-md px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold gradient-text">{pageNames[currentPage]}</h2>
        <p className="text-sm text-gray-500">Welcome back to BotHost</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card">
          {darkMode ? <Sun className="w-6 h-6 text-neon-blue" /> : <Moon className="w-6 h-6" />}
        </button>

        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-card">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-medium hidden sm:block">User</span>
        </button>
      </div>
    </header>
  )
}

export default Header
