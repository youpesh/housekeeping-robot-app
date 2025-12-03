import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { AppState } from '../App'
import { ArrowLeft, TreeDeciduous, FileText, Square, Disc, Layers, ChevronDown, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const FloorTypeSelection = ({ state, setState }: Props) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const floorTypes = [
    { id: 'hardwood', name: 'Hardwood', icon: TreeDeciduous },
    { id: 'laminate', name: 'Laminate', icon: FileText },
    { id: 'tile', name: 'Tile', icon: Square },
    { id: 'carpet', name: 'Carpet', icon: Disc },
    { id: 'deep-pile', name: 'Deep-Pile Carpet', icon: Layers },
  ]

  const selectedFloor = floorTypes.find(f => f.id === state.floorType)

  const handleSelect = (floorTypeId: string) => {
    setState({ ...state, floorType: floorTypeId })
    setIsOpen(false)
  }

  const handleContinue = () => {
    if (!state.floorType) {
      alert('Please select a floor type')
      return
    }
    navigate('/method-selection')
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
            <h1 className="text-2xl font-bold">Select Floor Type</h1>
            <p className="text-sm text-blue-100 mt-1">Choose the type of flooring</p>
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
          <span className="text-blue-700 font-semibold">Step 2 of 6</span>
          <span className="text-blue-600">Select Floor Type</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Floor Type Selection</h2>
            <p className="text-gray-600">Please choose a floor type:</p>
          </div>

          {/* Custom Dropdown */}
          <div className="mb-6 relative">
            {/* Dropdown Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full p-4 text-lg border-2 border-gray-300 rounded-xl bg-white cursor-pointer text-left flex items-center justify-between hover:border-blue-400"
            >
              <span className={selectedFloor ? 'text-gray-800' : 'text-gray-400'}>
                {selectedFloor ? selectedFloor.name : 'Select a floor type...'}
              </span>
              <ChevronDown className={`w-6 h-6 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border-2 border-gray-300 rounded-xl shadow-xl max-h-80 overflow-y-auto">
                {floorTypes.map((floor) => {
                  const Icon = floor.icon
                  return (
                    <button
                      key={floor.id}
                      onClick={() => handleSelect(floor.id)}
                      className={`w-full p-4 text-left flex items-center hover:bg-blue-50 border-b border-gray-200 last:border-b-0 ${
                        state.floorType === floor.id ? 'bg-blue-50' : ''
                      }`}
                    >
                      <Icon className="w-6 h-6 mr-3 text-blue-600" />
                      <span className="text-lg text-gray-800">{floor.name}</span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Visual representation */}
          {state.floorType && (
            <div className="mb-6 p-6 bg-blue-50 rounded-xl border-2 border-blue-200 text-center">
              {selectedFloor && (() => {
                const Icon = selectedFloor.icon
                return (
                  <>
                    <Icon className="w-16 h-16 mx-auto mb-3 text-blue-600" />
                    <p className="text-lg font-bold text-blue-900">{selectedFloor.name}</p>
                  </>
                )
              })()}
            </div>
          )}

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!state.floorType}
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default FloorTypeSelection

