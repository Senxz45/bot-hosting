# 🤖 Bot Hosting Platform

Aplikasi hosting bot yang futuristik dan powerful dengan konsep modern.

## ✨ Fitur Utama

- 🎨 **UI Futuristik** - Dark & Light mode dengan desain modern
- 📊 **Dashboard Real-time** - Monitor bot dengan visualisasi data
- 🚀 **Deploy & Management** - Deploy bot dengan mudah
- 📈 **Analytics** - Tracking performa bot
- 🔐 **Authentication** - Secure login system
- 💾 **Database Management** - Manage bot data
- 🔄 **Auto-restart** - Bot restart otomatis jika crash
- 📝 **Logging System** - Detailed bot logs
- 🌙 **Dark/Light Mode** - Theme toggle

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- Tailwind CSS
- Zustand (State Management)
- Recharts (Analytics)
- Socket.io (Real-time updates)

### Backend
- Node.js + Express
- MongoDB
- JWT Authentication
- Socket.io
- Docker Support

## 📁 Project Structure

```
bot-hosting/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── stores/       # Zustand stores
│   │   ├── utils/        # Utility functions
│   │   └── App.jsx
│   └── package.json
├── backend/               # Express server
│   ├── routes/           # API routes
│   ├── models/           # Database models
│   ├── middleware/       # Custom middleware
│   ├── controllers/       # Business logic
│   └── server.js
├── docker-compose.yml
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- MongoDB
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/Senxz45/bot-hosting.git
cd bot-hosting

# Setup Frontend
cd frontend
npm install
npm run dev

# Setup Backend (di terminal baru)
cd backend
npm install
npm start
```

## 📖 Documentation

Lihat file dokumentasi untuk panduan lebih detail.

## 📝 License

MIT
