import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Thermometer, Package, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryWashSettings = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [temperature, setTemperature] = useState(state.washSettings.temperature || '')
  const [loadSize, setLoadSize] = useState(state.washSettings.loadSize || '')

  const temperatures = [
    { id: 'cold', name: 'Cold', icon: Thermometer },
    { id: 'warm', name: 'Warm', icon: Thermometer },
    { id: 'hot', name: 'Hot', icon: Thermometer },
  ]

  const loadSizes = [
    { id: 'small', name: 'Small' },
    { id: 'medium', name: 'Medium' },
    { id: 'large', name: 'Large' },
    { id: 'extra-large', name: 'Extra Large' },
  ]

  const handleNext = () => {
    if (!temperature || !loadSize) {
      alert('Please select temperature and load size')
      return
    }
    setState({
      ...state,
      washSettings: {
        ...state.washSettings,
        temperature,
        loadSize
      }
    })
    navigate('/laundry-detergent')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-sorting')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Wash Settings</h1>
            <p className="text-sm text-blue-100 mt-1">Configure washing options</p>
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
          <span className="text-blue-700 font-semibold">Step 3 of 8</span>
          <span className="text-blue-600">Wash Settings</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '37.5%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Temperature */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Temperature</h2>
          <div className="space-y-3">
            {temperatures.map((temp) => (
              <label
                key={temp.id}
                className={`flex items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                  temperature === temp.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="temperature"
                  value={temp.id}
                  checked={temperature === temp.id}
                  onChange={(e) => setTemperature(e.target.value)}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <temp.icon className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg font-semibold">{temp.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Load Size */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Load Size</h2>
          <div className="space-y-3">
            {loadSizes.map((size) => (
              <label
                key={size.id}
                className={`flex items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                  loadSize === size.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="loadSize"
                  value={size.id}
                  checked={loadSize === size.id}
                  onChange={(e) => setLoadSize(e.target.value)}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <Package className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg font-semibold">{size.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!temperature || !loadSize}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Detergent
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundryWashSettings
