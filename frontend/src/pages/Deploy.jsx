import { Cloud, Server, Settings, Zap } from 'lucide-react'
import { useState } from 'react'

const Deploy = () => {
  const [selectedMethod, setSelectedMethod] = useState('docker')

  const deployMethods = [
    {
      id: 'docker',
      title: 'Docker',
      icon: Server,
      description: 'Deploy using Docker containers',
      steps: [
        'Build your Dockerfile',
        'Push to Docker Hub',
        'Connect Docker Hub account',
        'Select image and deploy'
      ]
    },
    {
      id: 'github',
      title: 'GitHub',
      icon: Cloud,
      description: 'Deploy directly from GitHub',
      steps: [
        'Connect GitHub account',
        'Select repository',
        'Configure branch',
        'Auto deploy on push'
      ]
    },
    {
      id: 'manual',
      title: 'Manual',
      icon: Zap,
      description: 'Manual deployment',
      steps: [
        'Upload your files',
        'Configure environment',
        'Set startup command',
        'Start bot'
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Deploy Bot</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {deployMethods.map((method) => {
          const Icon = method.icon
          return (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`card-dark text-left transition-all ${
                selectedMethod === method.id
                  ? 'border-neon-blue shadow-lg shadow-neon-blue/50'
                  : 'hover:border-neon-blue/50'
              }`}
            >
              <Icon className="w-8 h-8 mb-3 text-neon-blue" />
              <h3 className="font-bold text-lg mb-1">{method.title}</h3>
              <p className="text-sm text-gray-400">{method.description}</p>
            </button>
          )
        })}
      </div>

      {/* Deployment Steps */}
      <div className="card-dark">
        <h2 className="text-2xl font-bold mb-6">Deployment Steps</h2>
        <div className="space-y-4">
          {deployMethods.find(m => m.id === selectedMethod)?.steps.map((step, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-center text-white font-bold">
                {idx + 1}
              </div>
              <div className="flex-1 pt-1">
                <p className="text-lg font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Configuration Form */}
      <div className="card-dark">
        <h2 className="text-2xl font-bold mb-6">Configuration</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Bot Name</label>
            <input type="text" placeholder="My Awesome Bot" className="w-full px-4 py-2 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Environment Variables</label>
            <textarea placeholder="KEY=value\nKEY2=value2" className="w-full px-4 py-2 rounded-lg bg-dark-card border border-gray-700 focus:border-neon-blue focus:outline-none h-24" />
          </div>
          <button className="btn-primary w-full">Deploy Bot</button>
        </div>
      </div>
    </div>
  )
}

export default Deploy
