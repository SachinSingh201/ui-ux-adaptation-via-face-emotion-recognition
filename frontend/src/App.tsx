import { useState } from 'react'
import Dashboard from './components/Dashboard'
import LiveDetection from './components/LiveDetection'
import ModelComparison from './components/ModelComparison'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'live' | 'models'>('dashboard')

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">DAiSEE Emotion Recognition</h1>
          <p className="subtitle">Real-time Student Engagement Analysis</p>
        </div>
      </header>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'live' && <LiveDetection />}
        {activeTab === 'models' && <ModelComparison />}
      </main>

      <footer className="footer">
        <p>Powered by Deep Learning | Dataset: DAiSEE (9068 video snippets)</p>
      </footer>
    </div>
  )
}

export default App
