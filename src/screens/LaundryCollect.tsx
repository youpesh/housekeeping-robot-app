import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Home as HomeIcon, Bed, Bath, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const LaundryCollect = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedLocations, setSelectedLocations] = useState<string[]>(
    state.laundryCollectionLocation ? [state.laundryCollectionLocation] : []
  )

  const locations = [
    { id: 'bedroom', name: 'Bedrooms', icon: Bed, description: 'Collect from bedroom hampers' },
    { id: 'bathroom', name: 'Bathroom', icon: Bath, description: 'Collect from bathroom hampers' },
    { id: 'laundry-room', name: 'Laundry Room', icon: HomeIcon, description: 'Collect from laundry room' },
    { id: 'throughout', name: 'Throughout House', icon: Home, description: 'Collect from all locations' },
  ]

  const toggleLocation = (locationId: string) => {
    if (selectedLocations.includes(locationId)) {
      setSelectedLocations(selectedLocations.filter(id => id !== locationId))
    } else {
      // For single selection, replace the array
      setSelectedLocations([locationId])
    }
  }

  const handleNext = () => {
    if (selectedLocations.length === 0) {
      alert('Please select at least one collection location')
      return
    }
    setState({ ...state, laundryCollectionLocation: selectedLocations[0] })
    navigate('/laundry-sorting')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/home')}
            className="mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Collect Laundry</h1>
            <p className="text-sm text-blue-100 mt-1">Where should laundry be collected from?</p>
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
          <span className="text-blue-700 font-semibold">Step 1 of 8</span>
          <span className="text-blue-600">Collect Laundry</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12.5%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="space-y-4 mb-6">
          {locations.map((location) => {
            const Icon = location.icon
            const isSelected = selectedLocations.includes(location.id)
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
                    name="collectionLocation"
                    checked={isSelected}
                    onChange={() => toggleLocation(location.id)}
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
          onClick={handleNext}
          disabled={selectedLocations.length === 0}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue to Sorting
        </button>
      </div>
    </div>
  )
}

export default LaundryCollect
