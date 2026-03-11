import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { CheckCircle, Clock, Cpu, Layers } from 'lucide-react'
import './ModelComparison.css'

export default function ModelComparison() {
  const models = [
    {
      name: 'CNN (Image)',
      description: 'Single-frame baseline using 2D convolutions',
      accuracy: 0.723,
      f1Score: 0.698,
      precision: 0.715,
      recall: 0.682,
      trainTime: '12 min',
      inferenceSpeed: '45 FPS',
      parameters: '2.1M',
      icon: Layers,
      color: '#94a3b8',
      pros: ['Fast inference', 'Low memory', 'Simple architecture'],
      cons: ['No temporal context', 'Lower accuracy', 'Limited features'],
    },
    {
      name: 'CNN-LSTM',
      description: 'Sequential model combining spatial and temporal features',
      accuracy: 0.847,
      f1Score: 0.821,
      precision: 0.839,
      recall: 0.804,
      trainTime: '38 min',
      inferenceSpeed: '28 FPS',
      parameters: '5.8M',
      icon: CheckCircle,
      color: '#2563eb',
      pros: ['Best overall accuracy', 'Captures motion', 'Good generalization'],
      cons: ['Slower training', 'More memory', 'Sequential dependency'],
    },
    {
      name: '3D CNN',
      description: '3D convolutions for spatiotemporal feature extraction',
      accuracy: 0.812,
      f1Score: 0.789,
      precision: 0.801,
      recall: 0.777,
      trainTime: '52 min',
      inferenceSpeed: '22 FPS',
      parameters: '8.3M',
      icon: Cpu,
      color: '#10b981',
      pros: ['Parallel processing', 'Rich features', 'End-to-end learning'],
      cons: ['High memory usage', 'Slow training', 'Many parameters'],
    },
  ]

  const comparisonData = [
    { metric: 'Accuracy', 'CNN (Image)': 0.723, 'CNN-LSTM': 0.847, '3D CNN': 0.812 },
    { metric: 'F1 Score', 'CNN (Image)': 0.698, 'CNN-LSTM': 0.821, '3D CNN': 0.789 },
    { metric: 'Precision', 'CNN (Image)': 0.715, 'CNN-LSTM': 0.839, '3D CNN': 0.801 },
    { metric: 'Recall', 'CNN (Image)': 0.682, 'CNN-LSTM': 0.804, '3D CNN': 0.777 },
  ]

  const radarData = [
    { metric: 'Accuracy', 'CNN (Image)': 72.3, 'CNN-LSTM': 84.7, '3D CNN': 81.2, fullMark: 100 },
    { metric: 'Speed', 'CNN (Image)': 90, 'CNN-LSTM': 62, '3D CNN': 49, fullMark: 100 },
    { metric: 'Memory Eff.', 'CNN (Image)': 85, 'CNN-LSTM': 65, '3D CNN': 45, fullMark: 100 },
    { metric: 'Training Time', 'CNN (Image)': 88, 'CNN-LSTM': 60, '3D CNN': 40, fullMark: 100 },
  ]

  const confusionMatrices = {
    'CNN-LSTM': [
      [152, 18, 12, 8, 10],
      [22, 141, 15, 12, 10],
      [15, 20, 135, 18, 12],
      [10, 15, 22, 128, 25],
      [8, 12, 16, 20, 144],
    ],
  }

  const emotionLabels = ['Boredom', 'Confusion', 'Satisfaction', 'Frustration', 'Engaging']

  return (
    <div className="model-comparison">
      <div className="models-grid">
        {models.map((model) => {
          const Icon = model.icon
          return (
            <div key={model.name} className="model-card">
              <div className="model-header">
                <div className="model-icon" style={{ background: model.color }}>
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="model-name">{model.name}</h3>
                  <p className="model-description">{model.description}</p>
                </div>
              </div>

              <div className="model-metrics">
                <div className="metric-row">
                  <span className="metric-label">Accuracy</span>
                  <span className="metric-value" style={{ color: model.color }}>
                    {(model.accuracy * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">F1 Score</span>
                  <span className="metric-value" style={{ color: model.color }}>
                    {(model.f1Score * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Precision</span>
                  <span className="metric-value">{(model.precision * 100).toFixed(1)}%</span>
                </div>
                <div className="metric-row">
                  <span className="metric-label">Recall</span>
                  <span className="metric-value">{(model.recall * 100).toFixed(1)}%</span>
                </div>
              </div>

              <div className="model-specs">
                <div className="spec-item">
                  <Clock size={16} />
                  <span>{model.trainTime}</span>
                </div>
                <div className="spec-item">
                  <Cpu size={16} />
                  <span>{model.inferenceSpeed}</span>
                </div>
                <div className="spec-item">
                  <Layers size={16} />
                  <span>{model.parameters}</span>
                </div>
              </div>

              <div className="pros-cons">
                <div className="pros">
                  <h4>Strengths</h4>
                  <ul>
                    {model.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="cons">
                  <h4>Limitations</h4>
                  <ul>
                    {model.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="analysis-grid">
        <div className="chart-card">
          <h3 className="chart-title">Performance Metrics Comparison</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={comparisonData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="metric" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" domain={[0, 1]} />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                labelStyle={{ color: '#f1f5f9' }}
              />
              <Legend />
              <Bar dataKey="CNN (Image)" fill="#94a3b8" radius={[8, 8, 0, 0]} />
              <Bar dataKey="CNN-LSTM" fill="#2563eb" radius={[8, 8, 0, 0]} />
              <Bar dataKey="3D CNN" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Overall Model Comparison</h3>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="metric" stroke="#94a3b8" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#94a3b8" />
              <Radar name="CNN (Image)" dataKey="CNN (Image)" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
              <Radar name="CNN-LSTM" dataKey="CNN-LSTM" stroke="#2563eb" fill="#2563eb" fillOpacity={0.3} />
              <Radar name="3D CNN" dataKey="3D CNN" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
              <Legend />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card confusion-matrix-card">
          <h3 className="chart-title">Confusion Matrix - CNN-LSTM (Best Model)</h3>
          <div className="confusion-matrix">
            <div className="matrix-grid">
              {confusionMatrices['CNN-LSTM'].map((row, i) => (
                <div key={i} className="matrix-row">
                  {row.map((value, j) => {
                    const total = row.reduce((a, b) => a + b, 0)
                    const intensity = value / total
                    return (
                      <div
                        key={j}
                        className="matrix-cell"
                        style={{
                          background: i === j
                            ? `rgba(37, 99, 235, ${intensity})`
                            : `rgba(239, 68, 68, ${intensity * 0.5})`,
                        }}
                      >
                        {value}
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
            <div className="matrix-labels">
              <div className="label-row">
                <span className="label-title">Predicted:</span>
                {emotionLabels.map((label, i) => (
                  <span key={i} className="label-text">{label}</span>
                ))}
              </div>
              <div className="label-column">
                <span className="label-title">Actual:</span>
                {emotionLabels.map((label, i) => (
                  <span key={i} className="label-text">{label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
