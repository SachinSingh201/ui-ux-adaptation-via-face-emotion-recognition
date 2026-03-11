import { useState, useRef, useEffect } from 'react'
import Webcam from 'react-webcam'
import { Camera, CameraOff, Play, Pause } from 'lucide-react'
import './LiveDetection.css'

export default function LiveDetection() {
  const [isActive, setIsActive] = useState(false)
  const [currentEmotion, setCurrentEmotion] = useState<string | null>(null)
  const [confidence, setConfidence] = useState(0)
  const [emotionHistory, setEmotionHistory] = useState<Array<{ time: string; emotion: string; confidence: number }>>([])
  const webcamRef = useRef<Webcam>(null)

  const emotions = ['Boredom', 'Confusion', 'Satisfaction', 'Frustration', 'Engaging']
  const emotionColors: Record<string, string> = {
    'Boredom': '#94a3b8',
    'Confusion': '#f59e0b',
    'Satisfaction': '#2563eb',
    'Frustration': '#ef4444',
    'Engaging': '#10b981',
  }

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isActive) {
      interval = setInterval(() => {
        const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
        const randomConfidence = 0.65 + Math.random() * 0.3

        setCurrentEmotion(randomEmotion)
        setConfidence(randomConfidence)

        const now = new Date()
        const timeStr = now.toLocaleTimeString()

        setEmotionHistory(prev => [
          { time: timeStr, emotion: randomEmotion, confidence: randomConfidence },
          ...prev.slice(0, 9)
        ])
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [isActive])

  return (
    <div className="live-detection">
      <div className="detection-grid">
        <div className="video-section">
          <div className="video-card">
            <div className="video-header">
              <h3>Live Video Feed</h3>
              <button
                className={`control-btn ${isActive ? 'active' : ''}`}
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? (
                  <>
                    <Pause size={18} />
                    <span>Stop</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span>Start</span>
                  </>
                )}
              </button>
            </div>

            <div className="video-container">
              {isActive ? (
                <>
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    className="webcam"
                    videoConstraints={{
                      width: 640,
                      height: 480,
                      facingMode: "user"
                    }}
                  />
                  {currentEmotion && (
                    <div className="emotion-overlay">
                      <div
                        className="emotion-badge"
                        style={{ background: emotionColors[currentEmotion] }}
                      >
                        {currentEmotion}
                      </div>
                      <div className="confidence-bar">
                        <div
                          className="confidence-fill"
                          style={{
                            width: `${confidence * 100}%`,
                            background: emotionColors[currentEmotion]
                          }}
                        />
                        <span className="confidence-text">{(confidence * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="video-placeholder">
                  <CameraOff size={64} />
                  <p>Click Start to begin detection</p>
                </div>
              )}
            </div>
          </div>

          <div className="emotion-legend">
            <h4>Emotion States</h4>
            <div className="legend-grid">
              {emotions.map(emotion => (
                <div
                  key={emotion}
                  className={`legend-item ${currentEmotion === emotion ? 'active' : ''}`}
                >
                  <div
                    className="legend-color"
                    style={{ background: emotionColors[emotion] }}
                  />
                  <span>{emotion}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="results-section">
          <div className="results-card">
            <h3>Current Detection</h3>
            {currentEmotion ? (
              <div className="current-result">
                <div
                  className="result-emotion"
                  style={{ color: emotionColors[currentEmotion] }}
                >
                  {currentEmotion}
                </div>
                <div className="result-confidence">
                  Confidence: {(confidence * 100).toFixed(1)}%
                </div>
                <div className="result-bar">
                  <div
                    className="bar-fill"
                    style={{
                      width: `${confidence * 100}%`,
                      background: emotionColors[currentEmotion]
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="no-detection">
                <Camera size={48} />
                <p>No detection yet</p>
              </div>
            )}
          </div>

          <div className="history-card">
            <h3>Detection History</h3>
            <div className="history-list">
              {emotionHistory.length > 0 ? (
                emotionHistory.map((entry, index) => (
                  <div key={index} className="history-item">
                    <div className="history-time">{entry.time}</div>
                    <div
                      className="history-emotion"
                      style={{ color: emotionColors[entry.emotion] }}
                    >
                      {entry.emotion}
                    </div>
                    <div className="history-confidence">
                      {(entry.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-history">
                  <p>Start detection to see history</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
