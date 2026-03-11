import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'
import { TrendingUp, Users, Brain, Activity } from 'lucide-react'
import './Dashboard.css'

export default function Dashboard() {
  const [stats] = useState({
    totalSamples: 9068,
    activeModels: 3,
    avgAccuracy: 0.847,
    processingSpeed: 28.5,
  })

  const emotionData = [
    { name: 'Engaging', value: 2834, color: '#10b981' },
    { name: 'Boredom', value: 2145, color: '#94a3b8' },
    { name: 'Confusion', value: 1876, color: '#f59e0b' },
    { name: 'Satisfaction', value: 1543, color: '#2563eb' },
    { name: 'Frustration', value: 670, color: '#ef4444' },
  ]

  const performanceData = [
    { model: 'CNN (Image)', accuracy: 0.723, f1: 0.698 },
    { model: 'CNN-LSTM', accuracy: 0.847, f1: 0.821 },
    { model: '3D CNN', accuracy: 0.812, f1: 0.789 },
  ]

  const trainingHistory = [
    { epoch: 1, cnn: 0.45, cnnLstm: 0.42, cnn3d: 0.43 },
    { epoch: 5, cnn: 0.61, cnnLstm: 0.67, cnn3d: 0.64 },
    { epoch: 10, cnn: 0.69, cnnLstm: 0.78, cnn3d: 0.74 },
    { epoch: 15, cnn: 0.72, cnnLstm: 0.83, cnn3d: 0.80 },
    { epoch: 20, cnn: 0.72, cnnLstm: 0.85, cnn3d: 0.81 },
  ]

  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #2563eb, #1e40af)' }}>
            <Users size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.totalSamples.toLocaleString()}</div>
            <div className="stat-label">Total Samples</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
            <Brain size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.activeModels}</div>
            <div className="stat-label">Active Models</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{(stats.avgAccuracy * 100).toFixed(1)}%</div>
            <div className="stat-label">Avg Accuracy</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }}>
            <Activity size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{stats.processingSpeed} FPS</div>
            <div className="stat-label">Processing Speed</div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-title">Model Performance Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="model" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend />
              <Bar dataKey="accuracy" fill="#2563eb" name="Accuracy" radius={[8, 8, 0, 0]} />
              <Bar dataKey="f1" fill="#10b981" name="F1 Score" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Emotion Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={emotionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {emotionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card full-width">
          <h3 className="chart-title">Training Progress - Validation Accuracy</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trainingHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="epoch" stroke="#94a3b8" label={{ value: 'Epoch', position: 'insideBottom', offset: -5 }} />
              <YAxis stroke="#94a3b8" label={{ value: 'Accuracy', angle: -90, position: 'insideLeft' }} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend />
              <Line type="monotone" dataKey="cnn" stroke="#94a3b8" name="CNN (Image)" strokeWidth={2} />
              <Line type="monotone" dataKey="cnnLstm" stroke="#2563eb" name="CNN-LSTM" strokeWidth={2} />
              <Line type="monotone" dataKey="cnn3d" stroke="#10b981" name="3D CNN" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
