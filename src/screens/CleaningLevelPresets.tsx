import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Sun, Cloud, Zap, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const CleaningLevelPresets = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedLevel, setSelectedLevel] = useState(state.cleaningLevel || '')

  const levels = [
    {
      id: 'light',
      name: 'Light Clean',
      icon: Sun,
      time: '15-20 min',
      tasks: state.customPresets.light
    },
    {
      id: 'medium',
      name: 'Medium Clean',
      icon: Cloud,
      time: '30-45 min',
      tasks: state.customPresets.medium
    },
    {
      id: 'deep',
      name: 'Deep Clean',
      icon: Zap,
      time: '60-90 min',
      tasks: state.customPresets.deep
    },
  ]

  const handleSelectLevel = (levelId: string) => {
    setSelectedLevel(levelId)
    setState({ ...state, cleaningLevel: levelId })
  }

  const handleContinue = () => {
    if (!selectedLevel) {
      alert('Please select a cleaning level')
      return
    }
    if (state.taskType === 'floor') {
      navigate('/extra-actions')
    } else {
      navigate('/surface-cleaning')
    }
  }

  const floorTotalSteps = 6
  const surfaceTotalSteps = 7
  const currentStep = state.taskType === 'floor' ? 4 : 3
  const totalSteps = state.taskType === 'floor' ? floorTotalSteps : surfaceTotalSteps
  const progressWidth = (currentStep / totalSteps) * 100

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => {
              if (state.taskType === 'floor') {
                navigate('/method-selection')
              } else {
                navigate('/area-type')
              }
            }}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Cleaning Level</h1>
            <p className="text-sm text-blue-100 mt-1">Applies to both floor and surface cleaning</p>
          </div>
          <button
            onClick={() => navigate('/home')}
            className="ml-4"
          >
            <Home className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-blue-50 px-6 py-3 border-b border-blue-200">
        <div className="flex items-center justify-between text-sm">
          <span className="text-blue-700 font-semibold">
            Step {currentStep} of {totalSteps}
          </span>
          <span className="text-blue-600">Select Cleaning Level</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${progressWidth}%` }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">

        <div className="space-y-4 mb-6">
          {levels.map((level) => {
            const Icon = level.icon
            const isSelected = selectedLevel === level.id
            return (
              <label
                key={level.id}
                className={`w-full p-6 rounded-2xl shadow-lg cursor-pointer block ${
                  isSelected ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="cleaningLevel"
                    value={level.id}
                    checked={isSelected}
                    onChange={() => handleSelectLevel(level.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-12 h-12 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{level.name}</h3>
                  </div>
                </div>
              </label>
          )
        })}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedLevel}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default CleaningLevelPresets
