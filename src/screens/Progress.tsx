import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Bot, X, Check, Circle, Home, Wind, Shirt, Package, Droplets } from 'lucide-react'
import { AppState } from '../App'

interface Props {
  state?: AppState
}

const Progress = ({ state }: Props) => {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0)

  const isLaundry = state?.taskType === 'laundry'
  const tasks = isLaundry
    ? [
        { name: 'Collecting laundry', icon: Package },
        { name: 'Sorting loads', icon: Package },
        { name: 'Washing', icon: Droplets },
        { name: 'Drying', icon: Wind },
        { name: 'Folding & storing', icon: Shirt },
      ]
    : [
        { name: 'Starting robot', icon: Bot },
        { name: 'Preparing area', icon: Bot },
        { name: 'Cleaning floors', icon: Bot },
        { name: 'Cleaning surfaces', icon: Bot },
        { name: 'Finishing up', icon: Bot },
      ]
  
  const currentTask = tasks[currentTaskIndex]?.name || 'Starting...'
  const timeRemaining = progress < 100 ? `${Math.max(1, Math.ceil((100 - progress) / 2))} min remaining` : 'Complete'
  
  useEffect(() => {
    let completed = false
    
    // Timer to automatically progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          if (!completed) {
            completed = true
            // Auto-navigate to completion after 1 second
            setTimeout(() => navigate('/completion'), 1000)
          }
          return 100
        }
        const newProgress = prev + 2 // Increase by 2% every second
        
        // Update task index based on progress
        setCurrentTaskIndex(current => {
          if (newProgress >= 80 && current < 4) return 4
          if (newProgress >= 60 && current < 3) return 3
          if (newProgress >= 40 && current < 2) return 2
          if (newProgress >= 20 && current < 1) return 1
          return current
        })
        
        return newProgress
      })
    }, 1000)
    
    return () => {
      clearInterval(interval)
    }
  }, [navigate])

  const getTaskStatus = (index: number) => {
    if (index < currentTaskIndex) return 'complete'
    if (index === currentTaskIndex) return 'current'
    return 'pending'
  }

  const handleCancel = () => {
    navigate('/cancel-confirm')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-center">
              {isLaundry ? 'Laundry in Progress' : 'Cleaning in Progress'}
            </h1>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        {/* Robot Icon */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <Bot className="w-32 h-32 text-blue-600" />
          </div>
        </div>

        {/* Current Task */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{currentTask}</h2>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mb-8">
          <div className="bg-gray-200 rounded-full h-6 overflow-hidden shadow-inner">
            <div 
              className="bg-green-500 h-full rounded-full flex items-center justify-center"
              style={{ width: `${progress}%` }}
            >
              <span className="text-white font-bold text-base">{progress}%</span>
            </div>
          </div>
          <div className="flex justify-between text-gray-600 mt-2">
            <span className="font-semibold">{progress}% Complete</span>
            <span className="font-semibold">{timeRemaining}</span>
          </div>
        </div>

        {/* Progress Details */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="font-bold text-gray-800 mb-4">Cleaning Tasks:</h3>
          <div className="space-y-3">
            {tasks.map((task, idx) => {
              const status = getTaskStatus(idx)
              const Icon = task.icon
              return (
                <div key={idx} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    status === 'complete' ? 'bg-green-500' : 
                    status === 'current' ? 'bg-blue-500' : 
                    'bg-gray-300'
                  }`}>
                    {status === 'complete' ? (
                      <Check className="w-4 h-4 text-white" />
                    ) : status === 'current' ? (
                      <Circle className="w-3 h-3 text-white fill-white" />
                    ) : null}
                  </div>
                  <Icon className={`w-5 h-5 mr-2 ${
                    status === 'current' ? 'text-blue-600' :
                    status === 'complete' ? 'text-green-600' :
                    'text-gray-400'
                  }`} />
                  <span className={`${
                    status === 'current' ? 'text-gray-800 font-semibold' : 
                    status === 'complete' ? 'text-gray-600 line-through' : 
                    'text-gray-400'
                  }`}>
                    {task.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Control Buttons */}
        <div className="w-full max-w-md space-y-3">
          <button
            onClick={handleCancel}
            className="w-full bg-red-500 text-white py-4 rounded-xl font-semibold shadow-lg flex items-center justify-center"
          >
            <X className="w-5 h-5 mr-2" />
            Cancel Cleaning
          </button>
        </div>
      </div>
    </div>
  )
}

export default Progress
