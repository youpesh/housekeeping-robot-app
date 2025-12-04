import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Home as HomeIcon, Shirt, Package, CheckCircle, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryStore = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [storageLocation, setStorageLocation] = useState(state.storageLocation || '')

  const locations = [
    { id: 'bedroom', name: 'Return to Bedrooms', icon: HomeIcon, description: 'Put clothes back in bedroom closets and drawers' },
    { id: 'laundry-room', name: 'Store in Laundry Room', icon: Package, description: 'Keep in laundry room for later organization' },
    { id: 'fold-only', name: 'Fold Only', icon: Shirt, description: 'Fold and leave in laundry room' },
    { id: 'hang-only', name: 'Hang Only', icon: Shirt, description: 'Hang items and return to closets' },
  ]

  const handleComplete = () => {
    if (!storageLocation) {
      alert('Please select a storage option')
      return
    }
    setState({ 
      ...state, 
      storageLocation,
      taskType: 'laundry' // Set task type for review screen
    })
    navigate('/review')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/laundry-timer')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Storage Options</h1>
            <p className="text-sm text-blue-100 mt-1">How should laundry be stored?</p>
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
          <span className="text-blue-700 font-semibold">Step 8 of 8</span>
          <span className="text-blue-600">Storage Options</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="space-y-4 mb-6">
          {locations.map((location) => {
            const Icon = location.icon
            const isSelected = storageLocation === location.id
            return (
              <label
                key={location.id}
                className={`w-full p-6 rounded-2xl shadow-lg cursor-pointer block ${
                  isSelected
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="storageLocation"
                    value={location.id}
                    checked={isSelected}
                    onChange={(e) => setStorageLocation(e.target.value)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{location.name}</h3>
                    <p className={`text-sm mt-1 ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>{location.description}</p>
                  </div>
                </div>
              </label>
            )
          })}
        </div>

        <button
          onClick={handleComplete}
          disabled={!storageLocation}
          className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <CheckCircle className="w-6 h-6 mr-2" />
          Complete Laundry Task
        </button>
      </div>
    </div>
  )
}

export default LaundryStore

