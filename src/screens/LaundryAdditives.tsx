import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Droplets, Sparkles, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryAdditives = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [additives, setAdditives] = useState<string[]>(state.washSettings.additives || [])

  const additiveOptions = [
    { id: 'bleach', name: 'Bleach', icon: Droplets },
    { id: 'fabric-softener', name: 'Fabric Softener', icon: Sparkles },
    { id: 'scent-beads', name: 'Scent Beads', icon: Sparkles },
  ]

  const toggleAdditive = (additiveId: string) => {
    if (additives.includes(additiveId)) {
      setAdditives(additives.filter(id => id !== additiveId))
    } else {
      setAdditives([...additives, additiveId])
    }
  }

  const handleNext = () => {
    setState({
      ...state,
      washSettings: {
        ...state.washSettings,
        additives
      }
    })
    navigate('/laundry-dry')
  }

  const handleSkip = () => {
    setState({
      ...state,
      washSettings: {
        ...state.washSettings,
        additives: []
      }
    })
    navigate('/laundry-dry')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-detergent')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Additives</h1>
            <p className="text-sm text-blue-100 mt-1">Optional washing additives</p>
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
          <span className="text-blue-700 font-semibold">Step 5 of 8</span>
          <span className="text-blue-600">Additives</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '62.5%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="space-y-4 mb-6">
          {additiveOptions.map((additive) => {
            const Icon = additive.icon
            const isSelected = additives.includes(additive.id)
            return (
              <label
                key={additive.id}
                className={`flex items-center p-6 rounded-2xl shadow-lg cursor-pointer ${
                  isSelected ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleAdditive(additive.id)}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <Icon className="w-10 h-10 mr-4 text-blue-600" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{additive.name}</h3>
                </div>
              </label>
            )
          })}
        </div>

        <div className="mt-auto space-y-3">
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Continue to Dry Settings
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-300"
          >
            Skip Additives
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundryAdditives

