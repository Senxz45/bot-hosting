import create from 'zustand'

const useBotStore = create((set) => ({
  bots: [
    { id: 1, name: 'Discord Bot', status: 'running', uptime: '99.8%', created: '2024-01-15' },
    { id: 2, name: 'Telegram Bot', status: 'running', uptime: '99.5%', created: '2024-02-20' },
    { id: 3, name: 'Slack Bot', status: 'idle', uptime: '98.9%', created: '2024-03-10' }
  ],
  
  addBot: (bot) => set((state) => ({
    bots: [...state.bots, { ...bot, id: Date.now() }]
  })),
  
  updateBot: (id, updates) => set((state) => ({
    bots: state.bots.map(bot => bot.id === id ? { ...bot, ...updates } : bot)
  })),
  
  deleteBot: (id) => set((state) => ({
    bots: state.bots.filter(bot => bot.id !== id)
  })),
  
  getBots: () => set((state) => state.bots)
}))

export default useBotStore
