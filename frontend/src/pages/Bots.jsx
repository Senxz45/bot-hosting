import { useState } from 'react'
import { Plus, Trash2, Power, MoreVertical } from 'lucide-react'
import useBotStore from '../stores/botStore'

const Bots = () => {
  const { bots, addBot, deleteBot, updateBot } = useBotStore()
  const [showModal, setShowModal] = useState(false)
  const [newBot, setNewBot] = useState({ name: '', token: '' })

  const handleAddBot = (e) => {
    e.preventDefault()
    addBot({
      ...newBot,
      status: 'idle',
      uptime: '0%',
      created: new Date().toLocaleDateString()
    })
    setNewBot({ name: '', token: '' })
    setShowModal(false)
  }

  const toggleBotStatus = (bot) => {
    updateBot(bot.id, {
      status: bot.status === 'running' ? 'idle' : 'running'
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Bots</h1>
        <button
          onClick={() => setShowModal(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Plus size={20} />
          Add Bot
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="card-dark max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Deploy New Bot</h2>
            <form onSubmit={handleAddBot} className="space-y-4">
              <input
                type="text"
                placeholder="Bot Name"
                value={newBot.name}
                onChange={(e) => setNewBot({...newBot, name: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none"
                required
              />
              <input
                type="text"
                placeholder="Bot Token"
                value={newBot.token}
                onChange={(e) => setNewBot({...newBot, token: e.target.value})}
                className="w-full px-4 py-2 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none"
                required
              />
              <div className="flex gap-3">
                <button type="submit" className="btn-primary flex-1">Deploy</button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-700 hover:border-neon-blue"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Bots Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bots.map((bot) => (
          <div key={bot.id} className="card-dark group hover:border-neon-blue transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold">{bot.name}</h3>
                <p className="text-xs text-gray-400">Created {bot.created}</p>
              </div>
              <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Status</span>
                <span className={bot.status === 'running' ? 'text-green-400' : 'text-yellow-400'}>
                  {bot.status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Uptime</span>
                <span>{bot.uptime}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleBotStatus(bot)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium ${
                  bot.status === 'running'
                    ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30'
                    : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                }`}
              >
                <Power size={16} />
                {bot.status === 'running' ? 'Stop' : 'Start'}
              </button>
              <button
                onClick={() => deleteBot(bot.id)}
                className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bots
