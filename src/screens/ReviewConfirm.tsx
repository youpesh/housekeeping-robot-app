import { useNavigate } from 'react-router-dom'
import { AppState } from '../App'
import { ArrowLeft, Check, Home } from 'lucide-react'

interface Props {
  state: AppState
  setState: React.Dispatch<React.SetStateAction<AppState>>
}

const ReviewConfirm = ({ state }: Props) => {
  const navigate = useNavigate()

  const handleConfirm = () => {
    navigate('/progress')
  }

  const getRoomNames = () => {
    const roomMap: { [key: string]: string } = {
      'living-room': 'Living Room',
      'kitchen': 'Kitchen',
      'bedroom-1': 'Bedroom 1',
      'bedroom-2': 'Bedroom 2',
    }
    return state.selectedRooms.map(id => roomMap[id] || id).join(', ') || 'None selected'
  }

  const getMethodNames = () => {
    const methodMap: { [key: string]: string } = {
      'sweep': 'Sweep',
      'mop': 'Mop',
      'polish': 'Polish',
      'scrub': 'Scrub',
      'vacuum': 'Vacuum',
      'spot-clean': 'Spot Clean',
      'carpet-freshener': 'Carpet Freshener',
      'steam-vacuum': 'Steam Vacuum',
      'dust': 'Dust',
      'wipe': 'Wipe',
      'sanitize': 'Sanitize',
    }
    const methods = state.taskType === 'floor' ? state.cleaningMethods : state.surfaceMethods
    return methods.map(id => methodMap[id] || id).join(', ') || 'None selected'
  }

  const getSurfaceNames = () => {
    const surfaceMap: { [key: string]: string } = {
      'tables': 'Tables',
      'countertops': 'Countertops',
      'desks': 'Desks',
      'shelves': 'Shelves',
      'dishes': 'Remove Dishes',
    }
    return state.surfaces.map(id => surfaceMap[id] || id).join(', ') || 'None selected'
  }

  const getProductNames = () => {
    const productMap: { [key: string]: string } = {
      'vacuum': 'Vacuum',
      'mop': 'Mop & Bucket',
      'polish': 'Polish & Scrub Brush',
      'cleaning-solution': 'Cleaning Solution',
      'spot-cleaner': 'Spot Cleaner',
      'freshener': 'Carpet Freshener',
    }
    return state.selectedProducts.map(id => productMap[id] || id).join(', ') || 'None selected'
  }

  const getFloorTypeName = () => {
    const floorMap: { [key: string]: string } = {
      'hardwood': 'Hardwood',
      'laminate': 'Laminate',
      'tile': 'Tile',
      'carpet': 'Carpet',
      'deep-pile': 'Deep-Pile Carpet',
    }
    return floorMap[state.floorType] || 'Not selected'
  }

  const getCleaningLevelName = () => {
    const levelMap: { [key: string]: string } = {
      'light': 'Light Clean',
      'medium': 'Medium Clean',
      'deep': 'Deep Clean',
    }
    return levelMap[state.cleaningLevel] || 'Not selected'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/product-selection')}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Review & Confirm</h1>
            <p className="text-sm text-blue-100 mt-1">Step {state.taskType === 'floor' ? '6' : '5'} of {state.taskType === 'floor' ? '6' : '5'}</p>
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
          <span className="text-blue-700 font-semibold">Final Step</span>
          <span className="text-blue-600">Review & Confirm</span>
        </div>
        <div className="mt-2 w-full bg-blue-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col overflow-y-auto">
        <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <Check className="w-16 h-16 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Review Your Cleaning Plan</h2>
            <p className="text-gray-600">Please confirm your selections before starting</p>
          </div>

          {/* Detailed Summary */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6 space-y-4">
            <div>
              <span className="text-gray-700 font-semibold block mb-1">Selected Rooms:</span>
              <span className="text-blue-900 font-bold">{getRoomNames()}</span>
            </div>
            
            {state.taskType === 'floor' && (
              <div>
                <span className="text-gray-700 font-semibold block mb-1">Floor Type:</span>
                <span className="text-blue-900 font-bold">{getFloorTypeName()}</span>
              </div>
            )}
            
            <div>
              <span className="text-gray-700 font-semibold block mb-1">Cleaning Methods:</span>
              <span className="text-blue-900 font-bold">{getMethodNames()}</span>
            </div>
            
            {state.taskType === 'surface' && state.surfaces.length > 0 && (
              <div>
                <span className="text-gray-700 font-semibold block mb-1">Surfaces:</span>
                <span className="text-blue-900 font-bold">{getSurfaceNames()}</span>
              </div>
            )}
            
            <div>
              <span className="text-gray-700 font-semibold block mb-1">Cleaning Level:</span>
              <span className="text-blue-900 font-bold">{getCleaningLevelName()}</span>
            </div>
            
            <div>
              <span className="text-gray-700 font-semibold block mb-1">Tidy Up:</span>
              <span className="text-blue-900 font-bold">{state.tidyUp ? 'Yes' : 'No'}</span>
            </div>
            
            <div>
              <span className="text-gray-700 font-semibold block mb-1">Selected Products:</span>
              <span className="text-blue-900 font-bold">{getProductNames()}</span>
            </div>
            
            <div className="pt-3 border-t border-blue-200">
              <span className="text-gray-700 font-semibold block mb-1">Estimated Time:</span>
              <span className="text-blue-900 font-bold text-lg">
                {state.cleaningLevel === 'light' ? '15-20 min' : 
                 state.cleaningLevel === 'medium' ? '30-45 min' : 
                 state.cleaningLevel === 'deep' ? '60-90 min' : 'Not specified'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleConfirm}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              Start Cleaning
            </button>

            <button
              onClick={() => navigate('/home')}
              className="w-full bg-white text-gray-700 py-3 rounded-xl font-semibold border-2 border-gray-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewConfirm

