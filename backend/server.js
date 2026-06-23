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

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() })
})

app.get('/api/stats', (req, res) => {
  res.json({
    activeBots: 12,
    cpuUsage: 45,
    databaseSize: 2.4,
    totalUsers: 1200,
    uptime: '99.8%'
  })
})

app.get('/api/bots', (req, res) => {
  res.json([
    { id: 1, name: 'Discord Bot', status: 'running', uptime: '99.8%' },
    { id: 2, name: 'Telegram Bot', status: 'running', uptime: '99.5%' },
    { id: 3, name: 'Slack Bot', status: 'running', uptime: '98.9%' }
  ])
})

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`)
  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`)
  })
})

httpServer.listen(PORT, () => {
  console.log(`\n🚀 Bot Hosting Server Running!`)
  console.log(`📍 Server: http://localhost:${PORT}`)
  console.log(`⏰ Started at ${new Date().toLocaleString()}\n`)
})
