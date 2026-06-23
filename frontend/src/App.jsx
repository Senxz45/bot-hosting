import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import './index.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [currentPage, setCurrentPage] = useState('dashboard')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="flex h-screen bg-white dark:bg-dark-bg">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} currentPage={currentPage} />
        <main className="flex-1 overflow-auto p-6">
          {currentPage === 'dashboard' && <Dashboard />}
        </main>
      </div>
    </div>
  )
}

export default App
