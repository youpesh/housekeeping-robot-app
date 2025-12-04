import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Droplets, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryDetergent = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [detergent, setDetergent] = useState(state.washSettings.detergent || '')

  const detergents = [
    { id: 'liquid', name: 'Liquid Detergent' },
    { id: 'pods', name: 'Pods' },
    { id: 'dark-fabric', name: 'Dark Fabric Detergent' },
  ]

  const handleNext = () => {
    if (!detergent) {
      alert('Please select a detergent type')
      return
    }
    setState({
      ...state,
      washSettings: {
        ...state.washSettings,
        detergent
      }
    })
    navigate('/laundry-additives')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-wash-settings')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Detergent Type</h1>
            <p className="text-sm text-blue-100 mt-1">Select detergent</p>
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
          <span className="text-blue-700 font-semibold">Step 4 of 8</span>
          <span className="text-blue-600">Detergent Type</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="space-y-4 mb-6">
          {detergents.map((det) => (
            <label
              key={det.id}
              className={`flex items-center p-6 rounded-2xl shadow-lg cursor-pointer ${
                detergent === det.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
              }`}
            >
              <input
                type="radio"
                name="detergent"
                value={det.id}
                checked={detergent === det.id}
                onChange={(e) => setDetergent(e.target.value)}
                className="w-6 h-6 mr-4 accent-blue-600"
              />
              <Droplets className="w-10 h-10 mr-4 text-blue-600" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800">{det.name}</h3>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!detergent}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Additives
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundryDetergent

