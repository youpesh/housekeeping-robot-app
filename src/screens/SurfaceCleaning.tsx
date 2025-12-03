import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, Armchair, UtensilsCrossed, Monitor, BookOpen, Trash2, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const SurfaceCleaning = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedSurfaces, setSelectedSurfaces] = useState<string[]>(state.surfaces)

  const surfaces = [
    { id: 'tables', name: 'Tables', icon: Armchair, description: 'Dining tables, coffee tables' },
    { id: 'countertops', name: 'Countertops', icon: UtensilsCrossed, description: 'Kitchen counters' },
    { id: 'desks', name: 'Desks', icon: Monitor, description: 'Work surfaces' },
    { id: 'shelves', name: 'Shelves', icon: BookOpen, description: 'Dust shelving units' },
    { id: 'dishes', name: 'Remove Dishes', icon: Trash2, description: 'Clear dirty dishes' },
  ]

  const toggleSurface = (surfaceId: string) => {
    if (selectedSurfaces.includes(surfaceId)) {
      setSelectedSurfaces(selectedSurfaces.filter(id => id !== surfaceId))
    } else {
      setSelectedSurfaces([...selectedSurfaces, surfaceId])
    }
  }

  const handleNext = () => {
    setState({ ...state, surfaces: selectedSurfaces })
    navigate('/surface-method-selection')
  }

  const handleSkip = () => {
    setState({ ...state, surfaces: [] })
    navigate('/surface-method-selection')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/cleaning-room-selection')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Select Surfaces</h1>
            <p className="text-sm text-blue-100 mt-1">Choose surfaces to clean</p>
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
          <span className="text-blue-700 font-semibold">Step 1 of 5</span>
          <span className="text-blue-600">Select Surfaces</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '20%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">

        <div className="flex-1 space-y-4 mb-6 overflow-y-auto">
          {surfaces.map((surface) => {
            const Icon = surface.icon
            const isSelected = selectedSurfaces.includes(surface.id)
            return (
              <label
                key={surface.id}
                className={`w-full p-6 rounded-2xl shadow-lg cursor-pointer block ${
                  isSelected
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSurface(surface.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-lg font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{surface.name}</h3>
                  </div>
                </div>
              </label>
            )
          })}
        </div>


        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleNext}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg"
          >
            Continue
          </button>
          <button
            onClick={handleSkip}
            className="w-full bg-white text-gray-700 py-4 rounded-xl font-semibold border-2 border-gray-300"
          >
            Skip Surface Cleaning
          </button>
        </div>
      </div>
    </div>
  )
}

export default SurfaceCleaning

