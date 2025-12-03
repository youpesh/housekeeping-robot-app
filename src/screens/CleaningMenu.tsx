import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Sparkles, Armchair, Home } from 'lucide-react'
import { AppState } from '../App'

interface Props {
  state?: AppState
  setState?: React.Dispatch<React.SetStateAction<AppState>>
}

const CleaningMenu = ({ state, setState }: Props) => {
  const navigate = useNavigate()

  const cleaningOptions = [
    { id: 1, name: 'Floor Cleaning', icon: Sparkles, taskType: 'floor' as const },
    { id: 2, name: 'Surface Cleaning', icon: Armchair, taskType: 'surface' as const }
  ]

  const handleSelectTask = (taskType: 'floor' | 'surface') => {
    if (setState && state) {
      setState({ ...state, taskType, selectedRooms: [], floorType: '', cleaningMethods: [], surfaceMethods: [], surfaces: [], cleaningLevel: '', selectedProducts: [] })
    }
    navigate('/cleaning-room-selection')
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
            <h1 className="text-2xl font-bold">Floor & Surface Cleaning</h1>
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
      <div className="flex-1 p-6">
        <div className="space-y-4">
          {cleaningOptions.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => handleSelectTask(option.taskType)}
                className="w-full p-6 rounded-2xl shadow-lg bg-white hover:bg-gray-50 text-left"
              >
                <div className="flex items-center">
                  <Icon className="w-8 h-8 mr-4 flex-shrink-0 text-blue-600" />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800">{option.name}</h3>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CleaningMenu

