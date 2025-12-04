import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, UtensilsCrossed, Droplet, Sofa, Bed, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const AreaTypeSelection = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [selectedAreaType, setSelectedAreaType] = useState<string>(state.areaType || '')

  const areaTypes = [
    { id: 'kitchen', name: 'Kitchen', icon: UtensilsCrossed, description: 'Countertops, appliances, and kitchen surfaces' },
    { id: 'bathroom', name: 'Bathroom', icon: Droplet, description: 'Bathroom surfaces and fixtures' },
    { id: 'living', name: 'Living Space', icon: Sofa, description: 'Living room, dining room, and common areas' },
    { id: 'bedroom', name: 'Bedroom', icon: Bed, description: 'Bedroom surfaces and furniture' },
  ]

  const handleSelect = (areaTypeId: string) => {
    setSelectedAreaType(areaTypeId)
    setState({ ...state, areaType: areaTypeId })
    navigate('/cleaning-level')
  }

  const totalSteps = 7
  const currentStep = 2

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
            <h1 className="text-2xl font-bold">Select Area Type</h1>
            <p className="text-sm text-blue-100 mt-1">Choose the type of area to clean</p>
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
          <span className="text-blue-700 font-semibold">Step {currentStep} of {totalSteps}</span>
          <span className="text-blue-600">Select Area Type</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(currentStep / totalSteps) * 100}%` }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-hidden">
        <div className="flex-1 space-y-4 mb-6">
          {areaTypes.map((areaType) => {
            const Icon = areaType.icon
            const isSelected = selectedAreaType === areaType.id
            return (
              <label
                key={areaType.id}
                className={`w-full p-6 rounded-2xl shadow-lg cursor-pointer block ${
                  isSelected
                    ? 'bg-blue-50 border-2 border-blue-600'
                    : 'bg-white border-2 border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="areaType"
                    value={areaType.id}
                    checked={isSelected}
                    onChange={() => handleSelect(areaType.id)}
                    className="w-6 h-6 mr-4 flex-shrink-0 accent-blue-600 cursor-pointer"
                  />
                  <Icon className={`w-10 h-10 mr-4 flex-shrink-0 ${isSelected ? 'text-blue-600' : 'text-gray-600'}`} />
                  <div className="flex-1 text-left">
                    <h3 className={`text-xl font-bold ${isSelected ? 'text-blue-900' : 'text-gray-800'}`}>{areaType.name}</h3>
                    <p className={`text-sm mt-1 ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>{areaType.description}</p>
                  </div>
                </div>
              </label>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AreaTypeSelection
