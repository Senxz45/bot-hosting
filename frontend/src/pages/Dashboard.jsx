import { Activity, Cpu, Database, Users, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const Dashboard = () => {
  const statsData = [
    { label: 'Active Bots', value: '12', icon: Activity, trend: '+3' },
    { label: 'CPU Usage', value: '45%', icon: Cpu, trend: '-5%' },
    { label: 'Database', value: '2.4GB', icon: Database, trend: '+0.2GB' },
    { label: 'Total Users', value: '1.2K', icon: Users, trend: '+120' },
  ]

  const chartData = [
    { name: 'Jan', bots: 4 },
    { name: 'Feb', bots: 3 },
    { name: 'Mar', bots: 8 },
    { name: 'Apr', bots: 6 },
    { name: 'May', bots: 10 },
    { name: 'Jun', bots: 12 },
  ]

  const pieData = [
    { name: 'Running', value: 10, color: '#00d4ff' },
    { name: 'Idle', value: 2, color: '#b537f2' },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, idx) => {
          const Icon = stat.icon
          const isTrendUp = stat.trend.includes('+')
          return (
            <div key={idx} className="card-dark">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold ${isTrendUp ? 'text-green-500' : 'text-red-500'}`}>
                  {isTrendUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.trend}
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-dark">
          <h3 className="text-xl font-bold mb-4">Bot Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip />
              <Line type="monotone" dataKey="bots" stroke="#00d4ff" strokeWidth={3} dot={{ fill: '#00d4ff' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card-dark">
          <h3 className="text-xl font-bold mb-4">Bot Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-dark">
        <h3 className="text-xl font-bold mb-4">Recent Bots</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left py-3 px-4">Bot Name</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Uptime</th>
            </tr>
          </thead>
          <tbody>
            {['Discord Bot', 'Telegram Bot', 'Slack Bot'].map((bot, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-white/5">
                <td className="py-3 px-4 font-medium">{bot}</td>
                <td className="py-3 px-4"><span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">Running</span></td>
                <td className="py-3 px-4">99.8%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard
