import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from 'socket.io'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
})

const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    environment: NODE_ENV,
    uptime: process.uptime()
  })
})

app.post('/api/login', (req, res) => {
  const { email, password } = req.body
  if (email && password) {
    res.json({
      success: true,
      token: 'mock-token-' + Date.now(),
      user: { email, id: 1 }
    })
  } else {
    res.status(400).json({ error: 'Invalid credentials' })
  }
})

app.get('/api/stats', (req, res) => {
  res.json({
    activeBots: 12,
    cpuUsage: Math.floor(Math.random() * 100),
    databaseSize: 2.4,
    totalUsers: 1200,
    uptime: '99.8%',
    requests: Math.floor(Math.random() * 10000)
  })
})

app.get('/api/bots', (req, res) => {
  res.json([
    { id: 1, name: 'Discord Bot', status: 'running', uptime: '99.8%', created: '2024-01-15', requests: 5200 },
    { id: 2, name: 'Telegram Bot', status: 'running', uptime: '99.5%', created: '2024-02-20', requests: 3100 },
    { id: 3, name: 'Slack Bot', status: 'idle', uptime: '98.9%', created: '2024-03-10', requests: 1500 }
  ])
})

app.post('/api/bots', (req, res) => {
  const { name, token } = req.body
  res.json({
    success: true,
    bot: {
      id: Date.now(),
      name,
      status: 'idle',
      uptime: '0%',
      created: new Date().toLocaleDateString(),
      requests: 0
    }
  })
})

app.put('/api/bots/:id', (req, res) => {
  const { id } = req.params
  res.json({
    success: true,
    message: `Bot ${id} updated successfully`
  })
})

app.delete('/api/bots/:id', (req, res) => {
  const { id } = req.params
  res.json({
    success: true,
    message: `Bot ${id} deleted successfully`
  })
})

// Socket.io Events
io.on('connection', (socket) => {
  console.log(`[Socket] User connected: ${socket.id}`)

  socket.on('bot-status', (data) => {
    console.log('[Socket] Bot status update:', data)
    io.emit('bot-update', {
      ...data,
      timestamp: new Date()
    })
  })

  socket.on('disconnect', () => {
    console.log(`[Socket] User disconnected: ${socket.id}`)
  })
})

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: NODE_ENV === 'development' ? err.message : undefined
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  })
})

httpServer.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`)
  console.log(`🚀 Bot Hosting Server Running!`)
  console.log(`📍 Server: http://localhost:${PORT}`)
  console.log(`🔌 WebSocket: ws://localhost:${PORT}`)
  console.log(`🌍 Environment: ${NODE_ENV}`)
  console.log(`⏰ Started at ${new Date().toLocaleString()}`)
  console.log(`${'='.repeat(50)}\n`)
})

export default httpServer
