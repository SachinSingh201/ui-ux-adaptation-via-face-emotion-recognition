import { BarChart3, Video, GitCompare } from 'lucide-react'
import './Navigation.css'

interface NavigationProps {
  activeTab: 'dashboard' | 'live' | 'models'
  setActiveTab: (tab: 'dashboard' | 'live' | 'models') => void
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'dashboard' as const, label: 'Dashboard', icon: BarChart3 },
    { id: 'live' as const, label: 'Live Detection', icon: Video },
    { id: 'models' as const, label: 'Model Comparison', icon: GitCompare },
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Icon size={20} />
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
