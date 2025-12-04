import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Wind, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryDry = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [setting, setSetting] = useState(state.drySettings.setting || '')

  const settings = [
    { id: 'normal', name: 'Normal' },
    { id: 'delicate', name: 'Delicate' },
    { id: 'bulky', name: 'Bulky' },
    { id: 'air-fluff', name: 'Air Fluff' },
  ]

  const handleNext = () => {
    if (!setting) {
      alert('Please select a drying setting')
      return
    }
    setState({
      ...state,
      drySettings: {
        ...state.drySettings,
        setting
      }
    })
    navigate('/laundry-timer')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-additives')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Dry Settings</h1>
            <p className="text-sm text-blue-100 mt-1">Configure drying options</p>
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
          <span className="text-blue-700 font-semibold">Step 6 of 8</span>
          <span className="text-blue-600">Dry Settings</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Drying Setting */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Drying Setting</h2>
          <div className="space-y-3">
            {settings.map((set) => (
              <label
                key={set.id}
                className={`flex items-center p-4 rounded-xl shadow-lg cursor-pointer ${
                  setting === set.id ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border-2 border-gray-200'
                }`}
              >
                <input
                  type="radio"
                  name="dryingSetting"
                  value={set.id}
                  checked={setting === set.id}
                  onChange={(e) => setSetting(e.target.value)}
                  className="w-6 h-6 mr-4 accent-blue-600"
                />
                <Wind className="w-6 h-6 mr-3 text-blue-600" />
                <span className="text-lg font-semibold">{set.name}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleNext}
            disabled={!setting}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Timer
          </button>
        </div>
      </div>
    </div>
  )
}

export default LaundryDry
