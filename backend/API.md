# BotHost Backend API

## Endpoints

### Health
- `GET /api/health` - Server health check

### Authentication
- `POST /api/login` - User login

### Bots
- `GET /api/bots` - Get all bots
- `POST /api/bots` - Create new bot
- `PUT /api/bots/:id` - Update bot
- `DELETE /api/bots/:id` - Delete bot

### Stats
- `GET /api/stats` - Get server statistics

## WebSocket Events

- `bot-status` - Emit bot status updates
- `bot-update` - Receive bot updates
