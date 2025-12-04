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

  const getAreaTypeName = () => {
    const areaMap: { [key: string]: string } = {
      'kitchen': 'Kitchen',
      'bathroom': 'Bathroom',
      'living': 'Living Space',
      'bedroom': 'Bedroom',
    }
    return areaMap[state.areaType] || 'Not selected'
  }

  const getExtraActionsNames = () => {
    const actionMap: { [key: string]: string } = {
      'under-furniture': 'Clean Under Furniture',
      'baseboards': 'Include Baseboards',
      'stains': 'Treat Stains',
      'stain-removal': 'Deep Stain Removal',
    }
    return state.extraActions.map(id => actionMap[id] || id).join(', ') || 'None'
  }

  const getCleaningLevelName = () => {
    const levelMap: { [key: string]: string } = {
      'light': 'Light Clean',
      'medium': 'Medium Clean',
      'deep': 'Deep Clean',
    }
    return levelMap[state.cleaningLevel] || 'Not selected'
  }

  // Laundry helper functions
  const getCollectionLocationName = () => {
    const locationMap: { [key: string]: string } = {
      'bedroom': 'Bedrooms',
      'bathroom': 'Bathroom',
      'laundry-room': 'Laundry Room',
      'throughout': 'Throughout House',
    }
    return locationMap[state.laundryCollectionLocation] || 'Not selected'
  }

  const getSortingOptions = () => {
    const options: string[] = []
    if (state.laundrySorting.byColor) options.push('Sort by Color')
    if (state.laundrySorting.byType) options.push('Sort by Type')
    return options.length > 0 ? options.join(', ') : 'No sorting'
  }

  const getTemperatureName = () => {
    const tempMap: { [key: string]: string } = {
      'hot': 'Hot',
      'warm': 'Warm',
      'cold': 'Cold',
    }
    return tempMap[state.washSettings.temperature] || 'Not selected'
  }

  const getLoadSizeName = () => {
    const sizeMap: { [key: string]: string } = {
      'small': 'Small',
      'medium': 'Medium',
      'large': 'Large',
      'extra-large': 'Extra Large',
    }
    return sizeMap[state.washSettings.loadSize] || 'Not selected'
  }

  const getDetergentName = () => {
    const detMap: { [key: string]: string } = {
      'liquid': 'Liquid Detergent',
      'pods': 'Pods',
      'dark-fabric': 'Dark Fabric Detergent',
    }
    return detMap[state.washSettings.detergent] || 'Not selected'
  }

  const getAdditivesNames = () => {
    const additiveMap: { [key: string]: string } = {
      'bleach': 'Bleach',
      'fabric-softener': 'Fabric Softener',
      'scent-beads': 'Scent Beads',
    }
    return state.washSettings.additives.map(id => additiveMap[id] || id).join(', ') || 'None'
  }

  const getDryingSettingName = () => {
    const settingMap: { [key: string]: string } = {
      'normal': 'Normal',
      'delicate': 'Delicate',
      'bulky': 'Bulky',
      'air-fluff': 'Air Fluff',
    }
    return settingMap[state.drySettings.setting] || 'Not selected'
  }

  const getTimerDisplay = () => {
    if (state.drySettings.timer === 0) return 'Auto-dry (until dry)'
    return `${state.drySettings.timer} minutes`
  }

  const getStorageLocationName = () => {
    const storageMap: { [key: string]: string } = {
      'bedroom': 'Return to Bedrooms',
      'laundry-room': 'Store in Laundry Room',
      'fold-only': 'Fold Only',
      'hang-only': 'Hang Only',
    }
    return storageMap[state.storageLocation] || 'Not selected'
  }

  const getEstimatedTimeForLaundry = () => {
    // Base time: 30-45 min for wash + dry
    // Add time based on load size
    const baseTime = 30
    const loadSizeMultiplier: { [key: string]: number } = {
      'small': 0.7,
      'medium': 1,
      'large': 1.5,
      'extra-large': 2,
    }
    const multiplier = loadSizeMultiplier[state.washSettings.loadSize] || 1
    const totalMinutes = Math.round(baseTime * multiplier)
    return `${totalMinutes}-${totalMinutes + 15} min`
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white p-6 shadow-lg">
        <div className="flex items-center">
          <button
            onClick={() => {
              if (state.taskType === 'laundry') {
                navigate('/laundry-store')
              } else {
                navigate('/product-selection')
              }
            }}
            className="mr-4 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Review & Confirm</h1>
            <p className="text-sm text-blue-100 mt-1">
              Final Step
            </p>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {state.taskType === 'laundry' ? 'Review Your Laundry Plan' : 'Review Your Cleaning Plan'}
            </h2>
            <p className="text-gray-600">Please confirm your selections before starting</p>
          </div>

          {/* Detailed Summary */}
          <div className="bg-blue-50 rounded-xl p-6 mb-6 space-y-4">
            {state.taskType === 'laundry' ? (
              <>
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Collection Location:</span>
                  <span className="text-blue-900 font-bold">{getCollectionLocationName()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Sorting Options:</span>
                  <span className="text-blue-900 font-bold">{getSortingOptions()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Wash Temperature:</span>
                  <span className="text-blue-900 font-bold">{getTemperatureName()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Load Size:</span>
                  <span className="text-blue-900 font-bold">{getLoadSizeName()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Detergent Type:</span>
                  <span className="text-blue-900 font-bold">{getDetergentName()}</span>
                </div>
                
                {state.washSettings.additives.length > 0 && (
                  <div>
                    <span className="text-gray-700 font-semibold block mb-1">Additives:</span>
                    <span className="text-blue-900 font-bold">{getAdditivesNames()}</span>
                  </div>
                )}
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Drying Setting:</span>
                  <span className="text-blue-900 font-bold">{getDryingSettingName()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Dry Timer:</span>
                  <span className="text-blue-900 font-bold">{getTimerDisplay()}</span>
                </div>
                
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Storage Location:</span>
                  <span className="text-blue-900 font-bold">{getStorageLocationName()}</span>
                </div>
                
                <div className="pt-3 border-t border-blue-200">
                  <span className="text-gray-700 font-semibold block mb-1">Estimated Time:</span>
                  <span className="text-blue-900 font-bold text-lg">{getEstimatedTimeForLaundry()}</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className="text-gray-700 font-semibold block mb-1">Selected Rooms:</span>
                  <span className="text-blue-900 font-bold">{getRoomNames()}</span>
                </div>
                
                {state.taskType === 'floor' && (
                  <>
                    <div>
                      <span className="text-gray-700 font-semibold block mb-1">Floor Type:</span>
                      <span className="text-blue-900 font-bold">{getFloorTypeName()}</span>
                    </div>
                    {state.extraActions.length > 0 && (
                      <div>
                        <span className="text-gray-700 font-semibold block mb-1">Extra Actions:</span>
                        <span className="text-blue-900 font-bold">{getExtraActionsNames()}</span>
                      </div>
                    )}
                  </>
                )}
                
                {state.taskType === 'surface' && (
                  <div>
                    <span className="text-gray-700 font-semibold block mb-1">Area Type:</span>
                    <span className="text-blue-900 font-bold">{getAreaTypeName()}</span>
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
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleConfirm}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
            >
              {state.taskType === 'laundry' ? 'Start Laundry' : 'Start Cleaning'}
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
